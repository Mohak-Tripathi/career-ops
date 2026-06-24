# 018 — GetYourGuide: Senior Software Engineer, GraphQL - API Platform

**Date:** 2026-06-13
**URL:** https://getyourguide.careers/jobs/6986390?gh_jid=6986390
**Archetype:** Backend / Platform Engineer (SDE-2) + API / Infrastructure Engineer
**Score:** 3.6/5
**Legitimacy:** Proceed with Caution
**PDF:** not generated — run /career-ops pdf getyourguide-graphql-api-platform to create on demand

---

## A) Role Summary

| Field | Detail |
|-------|--------|
| Archetype | Backend / Platform Engineer + API / Infrastructure Engineer |
| Domain | Travel marketplace — internal developer platform |
| Function | Build — own the GraphQL API layer powering all customer-facing surfaces |
| Seniority | Senior L6 (5+ YOE, 2+ years production GraphQL) |
| Remote | Hybrid Berlin (Mon/Tue/Thu in-office; 30 days global remote/year — NOT India/IST remote) |
| Team size | API Platform team (internal platform serving all product teams) |
| TL;DR | Own GYG's Apollo Federation GraphQL API layer across search, discovery, and checkout — the best-fit GYG role for Mohak due to Node.js/Go stack option and deep GraphQL requirement matching his actual production experience. |

---

## B) Match with CV

| JD Requirement | CV Match | Strength |
|----------------|----------|----------|
| 5+ YOE backend engineering | 3.5 YOE (gap: ~1.5 years) | Moderate gap |
| 2+ years production GraphQL | Terrisage: GraphQL API (Node.js + Apollo) serving React Native + web; V-Align: GraphQL (Rails + Apollo) | **Strong match** |
| Java, Go, OR Node.js (any one) | Node.js in production | **Match — Node.js is explicitly listed** |
| Apollo Federation / schema design | Apollo GraphQL at Terrisage (single schema, two clients) | **Strong match** |
| Dataloader patterns, persisted queries | Apollo server patterns familiar; not explicitly documented | Partial |
| Query cost analysis, observability | Not documented — gap | Soft gap |
| Distributed systems | Multi-tenant SaaS, ETL pipelines | Good |
| High-throughput customer-facing APIs | Terrisage GraphQL serving mobile + web in production | Good |
| Schema governance / deprecation policies | Not documented | Soft gap |
| Stakeholder management / platform mindset | V-Align: internal platform serving 5+ enterprise clients | Good |

**Gaps:**
1. **YOE (soft gap):** 5+ years required, Mohak has 3.5. Not a hard blocker for a strong portfolio — platform roles often weigh impact over tenure.
2. **Advanced federation patterns:** Mohak has single-schema Apollo; GYG likely uses Apollo Federation across multiple subgraphs. Adjacent but not identical — mitigatable via reading Apollo Federation docs + honest framing.
3. **Query cost analysis / observability:** Not documented. Could leverage Sentry + Uptime Robot experience as production observability signal.
4. **Berlin on-site:** Hard location constraint — no India/IST remote option.

---

## C) Level and Strategy

- **Level detected:** L6 Senior — platform ownership, schema governance, internal stakeholder management
- **Candidate level:** SDE-2 to L5 equivalent. The GraphQL depth partially compensates for YOE.
- **Sell senior plan:** Lead with Terrisage as the proof point — "sole engineer who designed and owns a production GraphQL API serving 15+ B2B clients across two client surfaces (React Native + web) from a single schema." This is genuinely platform-level ownership. Emphasize Apollo patterns, RBAC at the resolver level, and production deployment ownership.
- **If downleveled:** Moot — Berlin is the hard blocker. If somehow remote were on the table, accept L5 with a 12-month review tied to schema governance deliverables.

---

## D) Comp and Demand

| Item | Data |
|------|------|
| GYG Senior SWE Berlin (Glassdoor est.) | €70,000–€95,000 gross/year |
| GraphQL platform specialist premium | +5–10% vs standard backend |
| INR equivalent | ~65–90 LPA |
| Berlin cost of living offset | High — INR conversion makes comp less attractive vs India-based role |
| Verdict | Comp is strong in absolute EUR; requires Berlin relocation |

---

## E) Customization Plan

| # | Section | Current | Proposed change | Why |
|---|---------|---------|-----------------|-----|
| 1 | Summary | Backend-heavy SDE | "GraphQL platform engineer with production Apollo experience across multi-tenant B2B systems" | Matches platform role language directly |
| 2 | Terrisage | B2B CRM backend | Lead with "single GraphQL schema serving React Native mobile + web CRM for 15+ enterprise clients" | Exact match to GYG's platform challenge |
| 3 | Skills | GraphQL, Apollo GraphQL | Add "Apollo Federation (self-study)" to signal awareness | Closes federation gap |
| 4 | V-Align | Rails + GraphQL | Frame as "GraphQL API design for multi-tenant platform" | Platform pattern signal |
| 5 | Observability | Sentry, Uptime Robot | "Production observability across GraphQL layer" — name latency tracking and error monitoring | Matches query observability requirement |

---

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|-------------|---|---|---|---|------------|
| 1 | Production GraphQL schema design | Terrisage GraphQL API | 15+ B2B clients on one backend, two client surfaces | Design one schema serving mobile + web | Apollo Server, resolver-level RBAC, type-safe schema | Zero schema conflicts; both surfaces shipped on time | Would implement persisted queries earlier for mobile performance |
| 2 | High-throughput API reliability | Terrisage production deployment | Live iOS + Android + web serving real customers | Sole engineer owning uptime | Sentry tracing, Uptime Robot, 90+ test suites | 99%+ uptime in pilot | Would add GraphQL query depth limits from day 1 |
| 3 | Internal platform / stakeholder management | V-Align multi-tenant SaaS | 5+ enterprise clients on shared platform | API must serve all tenants without customization per client | Schema-level tenant scoping, RBAC | 75% operational output increase | Platform-level APIs require stricter deprecation policies than product APIs |
| 4 | Distributed systems at scale | V-Align ETL Airflow | 20K+ records/day cross-tenant sync | No data leakage between tenants | Airflow DAGs + PostgreSQL tenant isolation | Zero cross-tenant incidents | Event-driven would have been more scalable than scheduled ETL |
| 5 | Observability / query analysis | Sentry + Uptime Robot at Terrisage | Production app with no DevOps team | Need to catch errors before clients do | Sentry source maps + alerting | Caught 3 critical regressions in staging | Would add distributed tracing (OpenTelemetry) earlier |

**Recommended case study:** Terrisage GraphQL layer — "I designed a single Apollo Server schema that serves a React Native mobile app and a Next.js web CRM with resolver-level RBAC. Every query goes through tenant-scoped authorization middleware before hitting the database. This is operationally identical to what a platform API team does for internal consumers."

**Red-flag Q:** "You don't have Apollo Federation experience — this is an Apollo Federation architecture."
**Answer:** "I've worked with Apollo Server in a multi-client environment which is conceptually the same federation challenge — one schema, multiple consumers with different access patterns. I understand Federation's subgraph composition and have been studying the Apollo Federation docs specifically for this role. I'd expect to be productive on schema governance within the first sprint."

---

## G) Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | JR101130 — Greenhouse job ID; active apply path confirmed | Positive |
| JD quality | Highly specific: Apollo Federation, dataloader patterns, persisted queries, query cost analysis, SLA monitoring | Positive |
| Requirements realism | 5 YOE + 2 years GraphQL = legitimate senior GraphQL bar | Positive |
| Company stability | GYG restructured 2022–2023, now actively building out platform engineering | Neutral |
| Role-company fit | API Platform team owning the GraphQL layer is core infrastructure — makes complete sense | Positive |
| Reposting | JR101130 referenced in Greenhouse, not seen before in scan history | Neutral |

**Context:** This is GYG's most technically specific posting across the batch — very detailed GraphQL requirements suggest a real, active headcount need rather than evergreen pipeline building. High confidence this is a real opening. The main concern is that it's been up long enough that either (a) it's hard to fill due to the niche GraphQL platform expertise requirement, or (b) it's been listed a while without being closed.

---

## Cover Letter Draft

> Draft generated at evaluation time. Score 3.6/5 — worth pursuing IF Berlin relocation is on the table or remote policy can be negotiated. Blocked for India/IST remote.

---

**Opening**
GetYourGuide's API Platform team faces a challenge I've worked through in production: designing a single GraphQL layer that serves multiple consumer surfaces with different access patterns and performance requirements. I'd like to bring that experience to your team.

**Profile introduction**
I'm a backend-heavy engineer with 3.5 years building production GraphQL APIs, multi-tenant SaaS platforms, and distributed backend systems. At Terrisage (B2B real estate CRM), I designed and own the complete GraphQL layer — an Apollo Server schema serving both a React Native mobile app and a Next.js web CRM with resolver-level RBAC and tenant-scoped data isolation. I understand what it takes to run a platform API that multiple consumers depend on.

**Key achievements**
- **Designed a single GraphQL schema** serving two client surfaces (React Native + web CRM) for 15+ enterprise B2B clients, with resolver-level RBAC enforcing tenant isolation at every query.
- **Built and owned the full production stack** — backend, mobile, web, iOS/Android deployment — as sole engineer, maintaining 90+ Jest/Supertest suites and Sentry monitoring in a live B2B pilot.
- **Architected multi-tenant SaaS backend** (Rails, GraphQL, PostgreSQL) with tenant-scoped RBAC, increasing client operational output by 75%.
- **Engineered Airflow ETL pipelines** processing 20K+ records/day across tenants without cross-tenant data leakage.

**Problems I will solve** *(placeholder — requires company research + your input)*
> To be completed: what schema governance challenges is GYG's API Platform facing? What's the federation migration status? What are the top SLA pressures on the GraphQL layer?

**Closing**
I am happy to discuss further at your convenience.

---

**Gaps flagged:**
- Berlin on-site required; Mohak is India-based — location is the primary blocker
- Apollo Federation vs Apollo Server (single schema): adjacent, not identical
- 5 YOE requirement vs 3.5 YOE actual

**JD keywords to mirror:** GraphQL, Apollo Federation, schema governance, dataloader patterns, persisted queries, query cost analysis, SLA monitoring, high-throughput APIs, distributed systems, observability, schema deprecation

---

*Run /career-ops cover getyourguide-graphql-api-platform to complete angles if pursuing (requires Berlin relocation discussion first).*

---

## Machine Summary

```yaml
role: "Senior Software Engineer, GraphQL - API Platform"
company: "GetYourGuide"
score: 3.6
archetype: "Backend / Platform Engineer + API / Infrastructure Engineer"
location: "Berlin, Germany (hybrid)"
remote_india: false
location_verdict: "location dealbreaker — Berlin on-site required, no IST remote"
tech_stack: ["Java", "Go", "Node.js", "GraphQL", "Apollo Federation", "PostgreSQL", "Kubernetes"]
stack_gap: "Apollo Federation (adjacent); Node.js is explicitly accepted"
yoe_required: 5
recommendation: "skip unless Berlin relocation viable — best-fit GYG role on tech, blocked on location"
legitimacy: "Proceed with Caution"
```
