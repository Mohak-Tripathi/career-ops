# Personal Learning — career-ops

My notes, learnings, and contribution ideas as I use this repo for my job search.

---

## How the System Works (My Understanding)

### The Full Flow

```
portals.yml (company list)
     ↓
/career-ops scan          → finds new job URLs
     ↓
data/pipeline.md          → inbox queue of unprocessed URLs
     ↓
/career-ops pipeline      → evaluates each URL one by one
  (or /career-ops batch)  → evaluates multiple URLs in parallel
     ↓
reports/{###}-{company}-{date}.md   → detailed evaluation report
     ↓
data/applications.md      → tracker row added (company, score, status, link to report)
     ↓
output/{company}.pdf      → tailored CV PDF (if score ≥ 4.0)
```

### Key Concepts

**Evaluation** — Reading a job description and scoring it (1–5) against my profile across 7 blocks:
- A: Role fit (do the requirements match my archetypes?)
- B: Compensation (does the pay match my 30–55 LPA target?)
- C: Location (Bangalore? Remote? NCR?)
- D: Company (stage, culture, red flags)
- E: Technical fit (my stack vs theirs)
- F: Growth potential
- G: Posting legitimacy (is this a real open role or ghost posting?)

**Report** — The detailed output of an evaluation. Saved in `reports/` as a markdown file. Contains the full A-G block analysis, a score, a recommendation, and a `## Machine Summary` YAML block that scripts use downstream.

**Tracker (`data/applications.md`)** — A summary table. One row per evaluated/applied job. Links back to the full report. Shows status (Evaluated → Applied → Interview → Offer etc.).

**Reading a report** — Two ways to open the full evaluation for any role:
1. **Direct file:** Find the report number in the tracker table → open `reports/{###}-{company}-{date}.md` directly.
2. **Dashboard TUI:** Run `./dashboard/career-dashboard` from the project root. Browse all reports in the terminal, filter by score and status, and open any report without leaving the terminal. Think of it as your real-time status screen — where you stand across every role at a glance.

> Note: The dashboard is a Go binary. If it's not built yet, run `go build -o career-dashboard .` inside `dashboard/` first (requires Go installed).

**Pipeline (`data/pipeline.md`)** — The inbox. URLs waiting to be evaluated. Feed URLs here manually or via `/career-ops scan`. Process them with `/career-ops pipeline`.

**Scan** — `scan.mjs` hits career page APIs directly (Greenhouse, Ashby, Lever JSON APIs — zero LLM tokens). New URLs not in `data/scan-history.tsv` get added to `data/pipeline.md`. Deduplication is automatic.

### Scan — Detailed Breakdown

Scan is pure raw information fetching. It does NOT read JDs, score anything, or talk to an LLM. It just collects URLs.

**One example end-to-end:**

1. `portals.yml` has InMobi configured with a Greenhouse API endpoint.
2. `scan.mjs` hits `https://boards-api.greenhouse.io/v1/boards/inmobi/jobs` → gets back a JSON list of all open jobs.
3. One entry: `{ title: "SDE 2", url: "https://job-boards.greenhouse.io/inmobi/jobs/7956882" }`
4. Title passes the filter (contains "SDE") → not already in scan-history.tsv → gets written to `data/pipeline.md`:
   ```
   - [ ] https://job-boards.greenhouse.io/inmobi/jobs/7956882 | InMobi | SDE 2
   ```
5. That's it. URL is now in the inbox.

**Then `/career-ops pipeline` picks it up:**
1. Opens the Greenhouse page, reads the full JD
2. Scores it A–G against your CV + profile
3. Writes `reports/010-inmobi-2026-06-24.md`
4. Adds a row to `data/applications.md`
5. Marks the entry as done in pipeline.md: `- [x] #010 | ...`
6. Generates PDF if score ≥ 4.0

**Scan sources (3 levels):**
- Level 0/2: Direct ATS APIs (Greenhouse, Lever, Ashby) — zero tokens, zero browser
- Level 1: Playwright navigation to career pages (for companies without public APIs)
- Level 3: WebSearch with `site:` filters (CutShort, Instahyre, Naukri, LinkedIn, Wellfound)

**Where portals.yml fits:**
- `tracked_companies` — specific companies to scan directly (with their career URL + API if available)
- `search_queries` — WebSearch queries to run (broad discovery across job boards)
- `title_filter` — positive/negative keywords to accept/reject job titles

**File locations:**
- `portals.yml` — scanner config (project root)
- `data/pipeline.md` — inbox (NOT project root, it's in `data/`)
- `data/scan-history.tsv` — dedup history (every URL ever seen)
- `reports/` — evaluated job reports
- `data/applications.md` — tracker summary table

---

## Things I Want to Understand Better

- [ ] How does `check-liveness.mjs` work? When does it fall back to Playwright?
- [ ] What does the Machine Summary YAML look like in a report? What scripts consume it?
- [ ] How does `merge-tracker.mjs` work? The TSV → applications.md flow.
- [ ] What exactly does `batch/batch-runner.sh` do vs `/career-ops pipeline`?
- [ ] How does the PDF generation work? (Playwright + cv-template.html)
- [ ] What is `analyze-patterns.mjs` — what patterns does it detect?

---

## Contribution Ideas

> Things I might open source / PR back to the upstream repo

- [ ] Add Indian job portals (Naukri, Instahyre, Wellfound India) to portals.example.yml
- [ ] Add Indian unicorn companies (Razorpay, CRED, PhonePe, Groww, Swiggy etc.) to portals.example.yml with correct ATS detection
- [ ] Indian comp normalization: LPA support in salary filter (currently USD/EUR/GBP/CHF)
- [ ] India-specific `modes/in/` — INR comp ranges, notice period norms, offer letter conventions, ESOP treatment in Indian startups
- [ ] Parser scripts for Indian career pages that don't use standard ATS (Zerodha, CRED etc.)

---

## TODO — My Job Search

- [ ] Run `/career-ops scan` to discover what's open at Wave 1 companies now
- [ ] Start applying to Wave 1 immediately (already past Mid-June target)
- [ ] Harden LLD: practice runnable OOP (parking lot, splitwise, chess) before CRED/Flipkart
- [ ] DSA: maintain 2 LC Hards per session cadence
- [ ] Prepare separately for Juspay (OS fundamentals + concurrency + thread safety)

---

## Notes on Setup

- User data files (`cv.md`, `config/profile.yml`, `modes/_profile.md`, `portals.yml`) are in `.gitignore` but force-tracked on the `custom` branch for cross-machine sync.
- To sync to another machine: `git pull origin custom`
- NEVER push to `main` — `custom` is the personal branch.
