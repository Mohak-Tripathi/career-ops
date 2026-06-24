# Evaluation: Glean — Software Engineer, Product Backend

**Date:** 2026-06-13
**URL:** https://job-boards.greenhouse.io/gleanwork/jobs/4428090005
**Archetype:** Product Backend Engineer (greenfield features, API design)
**Score:** 3.6/5
**Legitimacy:** Proceed with Caution
**PDF:** not generated — run /career-ops pdf glean-product-backend to create on demand

---

## A) Role Summary

| Field | Detail |
|-------|--------|
| Archetype | Product Backend Engineer — greenfield features, API design |
| Domain | Enterprise AI Search / Knowledge Management |
| Function | Build — greenfield backend features, scalable REST APIs, cross-functional collaboration |
| Seniority | Senior (BA/BS + proven experience; no explicit YOE number stated) |
| Remote | Hybrid — Mountain View, CA (3 days/week: Mon, Wed, Fri in Palo Alto) |
| Team size | Cross-functional (product, design, data science, engineering) |
| TL;DR | Product-focused backend engineer at Glean — own greenfield features end-to-end in Golang and Java, REST API design, SQL/NoSQL databases, Palo Alto hybrid. |

---

## B) Match with CV

| JD Requirement | CV Match | Evidence |
|----------------|----------|---------|
| Proven experience shipping scalable backend features | Strong | CV: "15+ 0→1 features across production SaaS teams"; Terrisage 0→1 |
| Scalable and maintainable backend systems | Strong | CV: multi-tenant SaaS, GraphQL API, RBAC, Airflow ETL |
| SQL and NoSQL databases | Strong | CV: PostgreSQL, MongoDB |
| REST API design (OpenAPI preferred) | Strong | CV: "REST APIs" in Backend skills; webhook pipeline API design |
| Cross-functional collaboration | Strong | CV: Terrisage CRM with real estate clients; V-Align enterprise clients |
| Golang / Java | Hard gap | Go not in stack; Java not in stack |
| Greenfield feature ownership | Strong | CV: "0→1 features", Terrisage sole engineer |
| Mentoring or learning from senior engineers | Neutral | Not mentioned in CV |
| User-centric mindset | Strong | CV: Terrisage CRM built from real estate agent workflows |
| Mountain View / Palo Alto hybrid | Blocker | Mohak is in Bengaluru |

**Gaps:**

| Gap | Severity | Mitigation |
|-----|----------|-----------|
| Golang / Java primary requirement | Hard | JD says "willingness to work with Golang and Java" — frames it as openness to learn, not must-have mastery |
| Mountain View / Palo Alto on-site | Hard blocker | 3 days/week in office; Mohak is in Bengaluru |
| No CS degree stated | Soft | "BA/BS in Computer Science" listed but many product-focused companies flex on this |

---

## C) Level and Strategy

**Level detected:** Mid-Senior Product Backend Engineer
**Mohak's natural level:** Excellent fit from a skills perspective. The role profile — greenfield features, REST API design, SQL/NoSQL, cross-functional collaboration, ownership — maps precisely to Mohak's demonstrated experience. The two blockers are Golang (learnable per JD framing) and location (hard blocker).

**Best angle (if remote exception exists):**
- Lead with 0→1 ownership of Terrisage (sole backend engineer, REST API design, PostgreSQL, cross-functional with real estate agents)
- Frame "willingness to work with Golang and Java" as matched — Mohak has shipped Python + TypeScript + Rails across different stacks
- Emphasize PostgreSQL depth relevant to SQL requirement

**Location note:** This role specifies Palo Alto office on Mon/Wed/Fri. Unless Glean has an India office or accepts India remote for this specific role (which their Bangalore office for the Backend role suggests is possible), this is a hard location blocker.

---

## D) Comp and Demand

| Signal | Finding | Source |
|--------|---------|--------|
| Glean Product Backend base | $140,000 – $265,000 USD (per JD) | JD (explicit) |
| INR equivalent | ~1,176–2,226 LPA | Dramatically exceeds floor |
| Benefits | Medical/vision/dental, 401k, flex time off, home office stipend, education/wellness stipends | JD |
| Equity | Yes | JD |

Exceptional compensation if remote from India is possible.

---

## E) Customization Plan

| # | Section | Current | Proposed | Why |
|---|---------|---------|---------|-----|
| 1 | Summary | "backend-heavy SDE" | "Product backend engineer with 0→1 greenfield ownership and REST API design track record" | Direct match to role framing |
| 2 | Terrisage | GraphQL API focus | Emphasize REST API for partner integrations (webhook pipelines, Meta Ads API), PostgreSQL schema design | REST + SQL focus matches JD |
| 3 | V-Align | Multi-tenant general | "Greenfield feature ownership: RBAC, billing integration, ETL pipelines — all from 0→1 on a product team" | Greenfield ownership framing |
| 4 | Skills | TypeScript/Node primary | Add: "willingness to adopt Golang/Java — previously adopted Rails and Python in production" | Address Go/Java requirement directly |
| 5 | Cross-functional signals | Implied in work descriptions | Explicit: "collaborated with product, design, and client teams on feature scoping and delivery" | Cross-functional culture signal |

---

## F) Interview Plan

| # | JD Requirement | Story | S | T | A | R | Reflection |
|---|--------------|-------|---|---|---|---|-----------|
| 1 | Greenfield features end-to-end | Terrisage 0→1 | 0 existing codebase, sole backend engineer | Launch B2B CRM with mobile + web | GraphQL API, RBAC, webhook ingestion, OpenAI integration — all from scratch | Live in App Store/Play Store, 15+ B2B clients | Would start with OpenAPI spec before any implementation |
| 2 | Scalable REST API design | V-Align + Terrisage REST | Multiple clients needed consistent, versioned APIs | Design for mobile, web, and partner integrations simultaneously | REST endpoints with auth middleware, webhook validation, idempotency | 0 breaking changes to existing clients in 12 months | API versioning strategy should be a day-one architecture decision |
| 3 | SQL/NoSQL at scale | Airflow ETL + PostgreSQL | Multi-tenant data sync across clients | 20K+ records/day with zero cross-tenant leakage | PostgreSQL schema design with tenant partitioning, InfluxDB time-series | 0 data leaks, stable pipeline | Separate read replicas for analytical queries earlier |
| 4 | Cross-functional product work | Terrisage CRM | Real estate agents had specific workflow needs | Translate agent workflows into API + mobile UX | Iterated with early pilot users; adjusted data model based on field feedback | Product adoption by pilot clients; ongoing feature requests from real users | Build lightweight feedback loop (in-app feedback or sync calls) from week 1 |

**Red-flag questions:**
- "No Golang experience?" → "The JD frames it as 'willingness to work with Go and Java.' I have shipped in 4 languages (TypeScript, Python, Ruby, JavaScript) across different production systems. Go's patterns around concurrency and interfaces I find compelling; I'd be productive within 2–3 months."
- "Not a CS degree?" → "Masai School + Progression School AI Engineering — I've shipped production distributed systems, 90+ test suites, and two published mobile apps. Happy to code live to demonstrate technical depth."

---

## G) Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Cannot determine | Neutral |
| Apply button | Active via Greenhouse | Positive |
| Comp transparency | Full range explicitly stated ($140K–$265K) | Positive |
| Tech specificity | High — Golang, Java, REST/OpenAPI, SQL, NoSQL | Positive |
| Description quality | Very specific: greenfield ownership, Mon/Wed/Fri in Palo Alto, AI exercise in interviews | Positive |
| Company health | Glean well-funded enterprise AI company | Positive |
| Role-company fit | Product backend is a standard engineering function at any scale-up | Positive |

**Context:** Posting appears genuinely active and well-defined. The main issue for Mohak is location.

---

## Cover Letter Draft

> Draft generated at evaluation time. Complete via `/career-ops cover glean-product-backend`.
> **Critical: Confirm remote/India-based possibility before applying. Palo Alto on-site (Mon/Wed/Fri) is listed.**

---

**Opening**
Glean is solving the knowledge retrieval problem for enterprise teams, and the Product Backend role is precisely where I want to contribute — owning greenfield features end to end, designing scalable REST APIs, and shipping products users actually depend on.

**Profile introduction**
Product-focused backend SDE with a track record of owning complete features from architecture to production deployment. I have shipped greenfield backend systems in TypeScript, Rails, and Python across multi-tenant SaaS products — REST APIs, SQL database design, webhook pipelines, and real-time data flows. At Terrisage I built the entire backend as sole engineer from 0→1, serving 15+ B2B clients across mobile and web from a single API layer.

**Key achievements**
- Built Terrisage CRM backend from 0→1 as sole engineer — REST APIs, PostgreSQL schema, webhook integrations — live with 15+ B2B clients on App Store and Play Store.
- Architected multi-tenant SaaS backend with scoped RBAC and data isolation, increasing operational output by 75%.
- Orchestrated Airflow ETL pipelines processing 20K+ records/day for cross-tenant data synchronization.
- Razorpay recurring billing integration reducing manual billing operations by 60%.

**Problems I will solve** *(placeholder)*
> To be completed: specific Glean product backend gaps; knowledge graph feature opportunities; scaling REST API layer for enterprise search.

**Closing**
I am happy to discuss further at your convenience.

---

**Gaps flagged:**
- Palo Alto office on Mon/Wed/Fri — Mohak is in Bengaluru. Confirm India remote or Bangalore office option before applying.
- Golang/Java — JD says "willingness" not mastery required; address directly.
- No formal CS degree.

**JD keywords to mirror:**
`greenfield features`, `scalable REST APIs`, `OpenAPI`, `SQL`, `NoSQL`, `product ownership`, `cross-functional`, `mentorship`, `maintainable code`, `user-centric`, `Golang`, `Java`

---

## Machine Summary

```yaml
company: Glean
role: Software Engineer, Product Backend
score: 3.6
recommendation: conditional — verify India/remote option; strong product ownership match otherwise
reason: Greenfield ownership + REST API + SQL/NoSQL skills are direct match; location (Palo Alto hybrid) is hard blocker unless India remote confirmed; Go/Java gap is soft per JD framing
stack_match: strong on role DNA (0→1, REST, PostgreSQL, cross-functional); Go/Java language gap is soft
location: Mountain View/Palo Alto hybrid 3 days/week — hard blocker unless India remote available
comp_estimate_lpa: extraordinary ($140K–$265K USD = 1,176–2,226 LPA)
report: reports/035-glean-product-backend-2026-06-13.md
```
