# 014 — GetYourGuide: Senior Software Engineer (Backend focused)

**Date:** 2026-06-13
**URL:** https://getyourguide.careers/jobs/7526177?gh_jid=7526177
**Archetype:** Backend / Platform Engineer (SDE-2)
**Score:** 2.8/5
**Legitimacy:** Proceed with Caution
**PDF:** not generated — run /career-ops pdf getyourguide-senior-backend to create on demand

---

## A) Role Summary

| Field | Detail |
|-------|--------|
| Archetype | Backend / Platform Engineer (SDE-2) |
| Domain | Travel marketplace / e-commerce |
| Function | Build — product backend for marketplace features |
| Seniority | Senior (6+ YOE required) |
| Remote | Hybrid Berlin (Mon/Tue/Thu in-office; 30 days global remote/year — NOT India/IST remote) |
| Team size | Cross-functional mission team (backend + mobile + data + PM + design) |
| TL;DR | Senior backend role at Berlin travel marketplace building A/B experiments and scalable marketplace features; Java is a hard requirement; Berlin on-site required. |

---

## B) Match with CV

| JD Requirement | CV Match | Strength |
|----------------|----------|----------|
| 6+ years software development | 3.5 YOE (shortfall of ~2.5 years) | Weak — seniority gap |
| Advanced Java proficiency (primary lang) | Node.js, Rails, TypeScript — no Java | GAP — hard miss |
| Component-based web framework | React/Next.js experience | Partial |
| Distributed systems architecture | Multi-tenant SaaS, ETL pipelines, webhook pipelines | Good |
| Testing / code quality | 90+ Jest/Supertest suites, Maestro E2E | Good |
| A/B experiment design | Not in CV | GAP |
| Kafka / Kubernetes | Not explicitly listed | GAP |
| E-commerce background | Not directly; B2B SaaS only | Weak |

**Gaps:**
1. **Java (hard blocker):** Primary language is Java/Spring Boot. Mohak's production stack is Node.js/TypeScript/Rails. This is a hard tech miss — not mitigatable without months of ramp-up.
2. **YOE shortfall:** JD requires 6+ years; Mohak has 3.5. Would likely screen out at ATS.
3. **A/B testing:** No signal in CV. Nice-to-have but reinforces weak fit.
4. **Kafka/Kubernetes:** Not listed. Could claim Docker and AWS infra experience as adjacent.

---

## C) Level and Strategy

- **Level detected:** Senior (L5+), requires 6 YOE, Java mastery, architectural ownership
- **Candidate level:** SDE-2 equivalent — solid for mid-senior backend, but YOE gap is real
- **Sell senior plan:** Lead with 0→1 Terrisage ownership (multi-tenant, GraphQL, full deployment stack). Frame breadth as senior-equivalent ownership signal. But Java gap makes this argument hard to land.
- **If downleveled:** Moot — Java is a hard blocker regardless of level.

---

## D) Comp and Demand

| Item | Data |
|------|------|
| GYG Senior SWE Berlin (Glassdoor est.) | €70,000–€95,000 gross/year |
| INR equivalent | ~65–88 LPA (at current rates) |
| Mohak's target | 25–40 LPA |
| Verdict | Comp is strong in EUR terms, but role requires Berlin relocation — no remote for IST |

Note: No salary stated in JD. Germany has no salary transparency law. GYG is VC-backed (>$1B raised), pays competitively vs Berlin market.

---

## E) Customization Plan

| # | Section | Current | Proposed change | Why |
|---|---------|---------|-----------------|-----|
| 1 | Summary | Backend-heavy SDE | Add "distributed systems" and "marketplace/platform APIs" framing | Match GYG platform language |
| 2 | Skills | Node.js/TypeScript | Cannot honestly add Java | N/A — gap is real |
| 3 | Experience | V-Align ETL / Airflow | Highlight Kafka-adjacent event pipeline work | Signal distributed systems familiarity |
| 4 | Terrisage | Multi-tenant CRM | Emphasize cross-tenant A/B-adjacent feature flags | Closest proxy to experimentation |
| 5 | Education | Standard | Add any Java/Spring self-study if pursued | Closes gap signal |

**Reality check:** CV customization cannot bridge the Java gap. This is a resume filter issue, not a framing issue.

---

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|-------------|---|---|---|---|------------|
| 1 | Distributed systems at scale | Airflow ETL at V-Align | 20K+ records/day cross-tenant | Build reliable daily sync | Airflow DAGs, PostgreSQL, tenant scoping | 75% ops output increase | Would add dead-letter queues earlier |
| 2 | Multi-tenant architecture | Terrisage B2B CRM | 15+ clients on one backend | Zero cross-tenant leakage | Schema-level isolation + RBAC | Zero leakage incidents in production | Learned tenant scoping must be designed from day 1, not retrofitted |
| 3 | Code quality / testing | Terrisage test pyramid | Solo engineer, needed confidence | 90+ backend suites + E2E | Jest, Supertest, Maestro | Caught 3 critical regressions pre-launch | TDD saves disproportionate time at the integration layer |
| 4 | Mentoring (bonus) | Digital Blanket IoT | New team member onboarding | Transfer WebSocket + InfluxDB context | Pair programming sessions | Junior engineer owned feature independently in 3 weeks | Documentation > live mentoring for async teams |

**Recommended case study:** Terrisage — lead with multi-tenant data isolation and single GraphQL schema serving two clients.

**Red-flag Q:** "You don't have Java experience — how would you ramp up?"
**Answer:** "My production systems are Node.js and Rails — the paradigms (DI, ORM, testing, microservices) transfer directly. I've read through Spring Boot architecture and can point to specific patterns I've implemented in equivalent TypeScript. I'd be production-ready in 4–6 weeks on Java fundamentals. That said, I'd rather be honest: if Java is blocking-critical from day one, this may not be the right timing."

---

## G) Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Date not parseable from Greenhouse API response; active apply button present | Neutral |
| JD quality | Specific tech stack (Java, Spring Boot, Kafka, Kubernetes, GraphQL), clear team structure | Positive |
| Requirements realism | 6 YOE + advanced Java = realistic senior bar | Positive |
| Company stability | GYG raised €484M, has had layoffs (2022–2023) but actively hiring in 2025–2026 | Neutral |
| Role-company fit | Makes sense — marketplace engineering is core to GYG | Positive |
| Salary transparency | No salary stated — standard for Berlin tech | Neutral |

**Context:** GYG went through a restructuring in 2022–2023 but has been in active hiring mode since late 2024. The Berlin office is operational. No immediate ghost-job signals, but the Java-heavy JD is very standard for GYG's backend org.

---

## Cover Letter Draft

> Draft generated at evaluation time. NOT recommended to complete — score 2.8/5 and Java gap make this a low-priority application.

**Gaps flagged:**
- Java is the primary language; Mohak has no production Java experience
- 6 YOE requirement vs 3.5 YOE actual
- Berlin on-site required; no India/IST remote path

**JD keywords to mirror:** Java, Spring Boot, GraphQL, Kafka, Kubernetes, A/B experiments, distributed systems, cross-functional, scalable solutions, marketplace

---

*Run /career-ops cover getyourguide-senior-backend to complete angles if pursuing.*

---

## Machine Summary

```yaml
role: "Senior Software Engineer (Backend focused)"
company: "GetYourGuide"
score: 2.8
archetype: "Backend / Platform Engineer"
location: "Berlin, Germany (hybrid)"
remote_india: false
location_verdict: "location dealbreaker — Berlin on-site required, no IST remote"
tech_stack: ["Java", "Spring Boot", "Kafka", "Kubernetes", "GraphQL", "Node.js", "PostgreSQL"]
stack_gap: "Java — hard miss"
yoe_required: 6
recommendation: "skip — Java hard requirement + YOE gap + no IST remote"
legitimacy: "Proceed with Caution"
```
