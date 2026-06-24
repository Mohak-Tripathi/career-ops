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

**Pipeline (`data/pipeline.md`)** — The inbox. URLs waiting to be evaluated. Feed URLs here manually or via `/career-ops scan`. Process them with `/career-ops pipeline`.

**Scan** — `scan.mjs` hits career page APIs directly (Greenhouse, Ashby, Lever JSON APIs — zero LLM tokens). New URLs not in `data/scan-history.tsv` get added to `data/pipeline.md`. Deduplication is automatic.

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
