# Report: Neysa Networks — Backend Engineer

**Date:** 2026-06-24
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/neysanetwork/jobs/4258326009
**PDF:** not generated — run `/career-ops pdf neysa-networks` to create on demand
**Legitimacy:** High Confidence
**Verification:** active (Greenhouse API confirmed)

---

## Block A: Match with CV

**Fit: 2.5/5**

| Requirement | Mohak's Profile | Verdict |
|-------------|----------------|---------|
| Node.js + TypeScript (required) | Primary stack ✅ | Exact match |
| NestJS (required) | Not used directly, but Express + Apollo familiar | Partial (close) |
| PostgreSQL + TypeORM (required) | PostgreSQL ✅; Prisma used not TypeORM | Partial |
| gRPC APIs (required) | REST + GraphQL ✅; gRPC not used | Minor gap |
| Redis (required) | Not directly; understand caching concepts | Gap |
| Kafka (required) | ETL pipelines at V-Align conceptually; not Kafka specifically | Gap |
| Neo4j / Elasticsearch (required) | Not in stack | Gap |
| **5–7 years experience** | **3.5 years** | **BELOW MINIMUM** |

**Critical blocker:** The experience requirement is 5–7 years. Mohak has 3.5 years — 1.5 years below the stated minimum. This is a hard blocker that no stack match can compensate for at the screening stage.

The Node.js/TypeScript core is a perfect fit, but the surrounding infra stack (Kafka, Neo4j, gRPC, Elasticsearch) adds multiple ramp-up points on top of the exp gap.

---

## Block B: North Star Alignment

**Fit: 3.5/5**

Neysa Networks is building AI infrastructure (the "Overwatch" platform — NestJS/Nx monorepo for device management, telemetry pipelines, and alerting). The domain is adjacent to Mohak's AI integration work and IoT background (Digital Blanket). Good archetype alignment for "Backend SDE2/3" — but this role is scoped for SDE3+ given the exp requirement.

---

## Block C: Compensation

**Score: 3.0/5**

- Not stated in JD
- Early-stage AI infra startup — compensation unknown; likely ₹20–40L for 5–7yr profile
- May align with target range but insufficient data

---

## Block D: Cultural Signals

**Score: 3.5/5**

- AI infrastructure startup — interesting technical domain
- Greenfield production codebase (NestJS monorepo) with clear ownership
- Working with modern backend infra (gRPC, Kafka, Kubernetes) — good learning environment
- Smaller company, less structured

---

## Block E: Technical Fit

**Score: 3.5/5**

For someone who *qualifies* on experience, the Node.js/TypeScript/PostgreSQL stack is a strong foundation. NestJS is Express with decorators — learnable fast. TypeORM vs Prisma is a minor shift. The real gaps are Kafka and gRPC — both require non-trivial learning but are foundational distributed systems concepts Mohak can ramp on.

As currently scoped (5–7yr), the technical gap adds on top of the experience gap, making this difficult to crack at initial screening.

---

## Block F: Growth Potential

**Score: 3.5/5**

Neysa Networks is building AI-adjacent infrastructure. If the company grows, the stack exposure (Kafka, gRPC, Kubernetes, Neo4j) is valuable. However, as an early-stage startup, risk is higher than established companies.

---

## Block G: Posting Legitimacy

**Tier: High Confidence**

- Active Greenhouse API response confirmed
- Specific JD with detailed tech stack and responsibilities
- Legitimate Bangalore-based company

---

## Recommendation

**DO NOT APPLY — experience below minimum (3.5yr vs 5–7yr requirement).**

The Node.js/TypeScript stack is the best possible match, but the screening filter will reject at the resume review stage. This role will likely still exist in 12–18 months when Mohak's experience crosses 5 years. Flag for revisit.

**Alternative:** If Neysa Networks has a junior/mid role (3–5yr), that would be a strong fit. Worth checking their full jobs board periodically.

---

## Machine Summary

```yaml
company: Neysa Networks
role: Backend Engineer
score: 3.0
status: Evaluated
url: https://job-boards.greenhouse.io/neysanetwork/jobs/4258326009
date: 2026-06-24
pdf: false
archetype: Backend Engineer (SDE2/SDE3)
notes: Excellent Node.js/TS stack match. Hard blocker: 5-7yr exp req vs 3.5yr. Do not apply. Revisit in 12-18mo.
```
