# Report: Glean — Software Engineer, Backend (India)

**Date:** 2026-06-24
**Score:** 2.2/5
**URL:** https://job-boards.greenhouse.io/gleanwork/jobs/4006731005
**PDF:** not generated — run /career-ops pdf glean-software-engineer-backend to create on demand
**Legitimacy:** High Confidence
**Verification:** active

---

## Block A: Match with CV

**Fit: 2.0/5**

| Requirement | Mohak's Profile | Verdict |
|-------------|----------------|---------|
| 6+ years backend/infra experience | 3.5 years total | HARD BLOCKER — 2.5-yr shortfall |
| Go / Python / Java / C++ (primary languages) | TypeScript/Node.js primary; Python basics only; no Go, no Java | HARD BLOCKER — Go/Java are listed as primary languages |
| Distributed systems / cloud-native infrastructure | AWS (EC2/S3/API Gateway), Docker, Airflow ETL at V-Align | Partial match — infra exposure but not at Glean's scale |
| Reliability, scalability, comprehensive testing | 90+ Jest/Supertest, Sentry, 99.5% uptime on LiftUP | Partial match |
| Design docs + high-quality code | Architecture decisions at V-Align and Terrisage | Match |
| BA/BS in Computer Science | Not stated in provided profile | Unknown |
| Cloud-native (GCP/AWS/Azure) | AWS (EC2/S3/API Gateway), Docker | Partial match |
| Mentorship / cross-functional collaboration | Solo backend owner on Terrisage, team at V-Align | Partial match |

**Hard blockers:** (1) 6+ year experience requirement vs. Mohak's 3.5 years — this is a firm gate at most companies. (2) Go/Java/C++ expected as primary language; Mohak's primary stack is TypeScript/Node.js with only basic Python and no Go/Java production experience. Glean is primarily a Go shop for backend infrastructure.

---

## Block B: North Star Alignment

**Fit: 2.5/5**

Glean is a compelling product — enterprise AI search and knowledge management, well-funded (~$1B+ raised), used by top-tier tech companies. The infrastructure/backend role would involve permissions-aware search, distributed indexing, and multi-tenant cloud architecture — all directionally interesting.

However the archetype here is **Platform/Infrastructure Engineer** at a very senior level (6+ years), focused on Go-based distributed systems. Mohak's strongest archetypes are Backend Engineer with AI Integration and Full Stack Backend-Heavy. The product mission aligns but the specific role level and language stack do not match well. This is a role Mohak could target in 2-3 years with Go experience added.

---

## Block C: Compensation

**Score: 4.0/5**

Glean Backend Software Engineer in Bengaluru per Levels.fyi data: median ~₹12M, range ₹6.65M–₹16.97M+ total compensation. For a 6+ year hire this would likely land ₹35–60 LPA+ base equivalently. Glean is well-funded and compensates above median Indian market rates. If Mohak cleared the bar, compensation would easily hit the 40+ LPA sweet spot. Score is theoretical — blocked by experience/stack mismatch.

---

## Block D: Cultural Signals

**Score: 4.0/5**

- Series E+ startup ($1B+ raised), strong product-market fit in enterprise AI search
- Engineering-first culture, design docs and ownership model mentioned explicitly
- In-person at Bengaluru office (not remote) — neutral for Mohak
- Founders from Google, Facebook; investors include Sequoia, Kleiner Perkins, Coatue
- AI-focused interview exercise signals progressive engineering values
- Fast-growth environment with mentorship both ways (junior or senior co-workers)

Good culture signals for someone at the right level. No remote flexibility is a mild negative but Bengaluru is full marks for location.

---

## Block E: Technical Fit

**Score: 1.5/5**

The JD explicitly calls for Go, Python, Java, or C++ as primary languages. Mohak's stack is TypeScript/Node.js. This is a fundamental mismatch:

- **Go:** Hard gap — no production experience
- **Java:** Hard gap — no production experience  
- **C++:** Hard gap — not in profile
- **Python:** Minor gap — knows basics, no production backend systems
- **Distributed systems infra:** Some exposure (Airflow ETL, Docker, AWS) but not at the scale/depth a 6-year infra engineer would bring
- **Cloud-native (GCP/AWS):** AWS experience is real but limited to EC2/S3/API Gateway

The entire language dimension is a near-complete mismatch. Even Mohak's strongest infrastructure work (multi-tenant SaaS, RBAC, ETL pipelines) was built on Node.js/TypeScript/PostgreSQL — not the systems-level languages Glean needs.

---

## Block F: Interview Plan

If somehow advancing (unlikely given hard blockers):

1. **Distributed systems design:** STAR — Airflow ETL pipeline at V-Align processing 20K+ records/day; design decisions around idempotency, retry logic, and failure handling.
2. **Multi-tenant RBAC at scale:** STAR — V-Align's multi-tenant SaaS with per-org RBAC; how permissions were modeled and enforced across GraphQL resolvers.
3. **Reliability and observability:** STAR — Terrisage's 90% test coverage (Jest/Supertest + Maestro E2E) + Sentry + Uptime Robot; 99.5% uptime on LiftUP.
4. **AI integration discussion:** LangChain/LangGraph agentic document generation at V-Align (4→7 proposals/week); OpenAI Whisper voice transcription pipeline.
5. **System design:** Multi-tenant permissions-aware search index — map Glean's challenge to multi-tenant data isolation patterns Mohak has shipped.

---

## Block G: Posting Legitimacy

**Tier: High Confidence**

- Greenhouse ATS-hosted posting, confirmed active via API (status 200, not 404)
- Glean is a legitimate, well-funded company with documented hiring history
- Job description is detailed and specific — not a generic scraper posting
- No red flags (no upfront fees, no vague requirements, proper ATS flow)

---

## Recommendation

**DO NOT APPLY.** Two hard blockers make this a non-starter right now: (1) the 6-year experience requirement exceeds Mohak's 3.5 years by a significant margin, and (2) the primary language stack (Go/Java/C++) is entirely outside Mohak's production experience. File this as a future target — revisit in 2–3 years after gaining Go experience or when Glean posts a mid-level TypeScript/Node.js role.

---

## Machine Summary

```yaml
company: Glean
role: Software Engineer, Backend (India)
score: 2.2
status: Evaluated
url: https://job-boards.greenhouse.io/gleanwork/jobs/4006731005
date: 2026-06-24
pdf: false
archetype: Platform/Infra Engineer
notes: Hard blockers — 6+ yr req vs 3.5yr actual, Go/Java primary stack vs Node.js/TS; skip now, revisit in 2-3 yrs
```
