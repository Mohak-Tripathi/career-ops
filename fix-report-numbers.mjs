#!/usr/bin/env node
// Renumber duplicate-numbered reports and write TSVs for untracked reports
import fs from 'fs';
import path from 'path';

const REPORTS_DIR = 'reports';
const TRACKER_FILE = 'data/applications.md';
const TSV_DIR = 'batch/tracker-additions';
const DATE = '2026-06-13';

// Read tracker to find already-merged report numbers
const trackerContent = fs.readFileSync(TRACKER_FILE, 'utf-8');
const trackedNums = new Set();
for (const line of trackerContent.split('\n')) {
  const m = line.match(/^\|\s*(\d+)\s*\|/);
  if (m) trackedNums.add(parseInt(m[1]));
}
console.log('Already tracked:', [...trackedNums].sort((a,b)=>a-b).join(', '));

// Parse a report file to extract metadata
function parseReport(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract from Machine Summary YAML block
  const yamlMatch = content.match(/```yaml\n([\s\S]+?)```/);
  const meta = {};
  if (yamlMatch) {
    for (const line of yamlMatch[1].split('\n')) {
      const m = line.match(/^(\w+):\s*"?([^"]+)"?\s*$/);
      if (m) meta[m[1].trim()] = m[2].trim();
    }
  }

  // Also extract from header section
  const scoreMatch = content.match(/\*\*Score:\*\*\s*([0-9.]+\/5)/);
  if (scoreMatch && !meta.score) meta.score = scoreMatch[1].replace('/5', '');

  const urlMatch = content.match(/\*\*URL:\*\*\s*(\S+)/);
  if (urlMatch && !meta.url) meta.url = urlMatch[1];

  const dateMatch = content.match(/\*\*Date:\*\*\s*(\S+)/);
  if (dateMatch && !meta.date) meta.date = dateMatch[1];

  // Extract company/role from H1
  const h1Match = content.match(/^#\s+(?:\d+\s+[—–-]+\s+)?(.+?)(?:\s*—\s*(.+))?$/m);
  if (h1Match) {
    const h1 = h1Match[0];
    // Pattern: "# NNN — Company: Role" or "# Evaluation: Company — Role"
    const evalMatch = h1.match(/^#\s+Evaluation:\s+(.+?)\s+[—–]\s+(.+)$/);
    const numMatch = h1.match(/^#\s+\d+\s+[—–]\s+(.+?):\s+(.+)$/);
    if (evalMatch) {
      if (!meta.company) meta.company = evalMatch[1].trim();
      if (!meta.role) meta.role = evalMatch[2].trim();
    } else if (numMatch) {
      if (!meta.company) meta.company = numMatch[1].trim();
      if (!meta.role) meta.role = numMatch[2].trim();
    }
  }

  // Recommendation/notes
  const recMatch = content.match(/^recommendation:\s*(.+)$/m);
  if (recMatch && !meta.recommendation) meta.recommendation = recMatch[1].trim().replace(/"/g, '');

  return { ...meta, _content: content };
}

// Slugify company+role for filename
function slugify(str) {
  return str.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 40);
}

// Get all report files sorted
const allReports = fs.readdirSync(REPORTS_DIR)
  .filter(f => f.endsWith('.md'))
  .sort();

// Separate already-tracked from untracked
// "013-meesho" is tracked as #13
const alreadyTracked = [];
const untracked = [];

for (const filename of allReports) {
  const numMatch = filename.match(/^(\d+)-/);
  const num = numMatch ? parseInt(numMatch[1]) : null;

  // Check if this exact file is for a tracked entry
  // The tracker has nums 1-13; 013-meesho is #13
  if (num !== null && trackedNums.has(num) && filename.includes('meesho')) {
    alreadyTracked.push(filename);
    console.log(`  Already tracked: ${filename}`);
  } else if (num !== null && trackedNums.has(num) && num <= 12) {
    alreadyTracked.push(filename);
    console.log(`  Already tracked: ${filename}`);
  } else {
    untracked.push(filename);
  }
}

console.log(`\nUntracked reports (${untracked.length}):`, untracked.join(', '));

// Assign new sequential numbers
let nextNum = Math.max(...trackedNums) + 1;
console.log(`\nStarting new numbering from: ${nextNum}`);

const renames = []; // { oldFile, newFile, newNum, meta }

for (const filename of untracked) {
  const oldPath = path.join(REPORTS_DIR, filename);
  const meta = parseReport(oldPath);

  const num = nextNum++;
  const company = meta.company || 'unknown';
  const role = meta.role || 'unknown';

  // Build new slug from company name
  const companySlug = slugify(company.replace(/[()]/g, '').replace('Intercom Fin', 'intercom'));
  const newFilename = `${String(num).padStart(3, '0')}-${companySlug}-${DATE}.md`;
  const newPath = path.join(REPORTS_DIR, newFilename);

  renames.push({ oldFile: filename, oldPath, newFilename, newPath, newNum: num, meta });
  console.log(`  ${String(num).padStart(3, '0')}: ${company} — ${role} (was ${filename})`);
}

// Apply renames: update internal header and rename file
for (const { oldFile, oldPath, newFilename, newPath, newNum, meta } of renames) {
  let content = meta._content;

  const numStr = String(newNum).padStart(3, '0');
  const company = meta.company || 'Unknown';
  const role = meta.role || 'Unknown';

  // Replace H1 line
  content = content.replace(
    /^#\s+.+$/m,
    `# ${numStr} — ${company}: ${role}`
  );

  // Update id in Machine Summary if present
  content = content.replace(/^id:\s*"\d+"/m, `id: "${numStr}"`);

  // Write new file
  if (oldPath !== newPath) {
    fs.writeFileSync(newPath, content, 'utf-8');
    fs.unlinkSync(oldPath);
    console.log(`  Renamed: ${oldFile} → ${newFilename}`);
  } else {
    fs.writeFileSync(newPath, content, 'utf-8');
    console.log(`  Updated: ${newFilename} (same path)`);
  }

  // Write TSV
  const score = meta.score ? `${parseFloat(meta.score).toFixed(1)}/5` : '?/5';
  const rec = meta.recommendation || '';
  const notes = rec.replace(/\t/g, ' ').substring(0, 80);
  const reportLink = `[${numStr}](reports/${numStr}-${slugify(company.replace(/[()]/g, '').replace('Intercom Fin', 'intercom'))}-${DATE}.md)`;

  const tsvFilename = path.join(TSV_DIR, `${numStr}-${slugify(company.replace(/[()]/g, '').replace('Intercom Fin', 'intercom'))}.tsv`);
  const tsvLine = [numStr, DATE, company, role, 'Evaluated', score, '❌', reportLink, notes].join('\t');
  fs.writeFileSync(tsvFilename, tsvLine + '\n', 'utf-8');
  console.log(`  TSV written: ${path.basename(tsvFilename)}`);
}

console.log(`\nDone. ${renames.length} reports renumbered and TSVs written.`);
console.log('Now run: node merge-tracker.mjs');
