# Report: Contentstack — Software Engineer I (Node.js Backend)

**Date:** 2026-06-24
**Score:** 3.5/5
**URL:** https://peerlist.io/company/contentstack/careers/software-engineer-i-nodejs-backend/jobhq798dreqb99na1onqjokq6k8qd
**PDF:** not generated — run /career-ops pdf contentstack to create on demand
**Legitimacy:** Tier 1 — Verified company, Peerlist-listed, active posting confirmed
**Verification:** active (liveness check confirmed)

---

## Block A: Match with CV
**Fit: 3.5/5**

| Requirement | Mohak's Profile | Verdict |
|-------------|----------------|---------|
| Node.js + TypeScript | Primary stack across V-Align and Terrisage | Strong match |
| OCLIF framework (CLI plugins) | No CLI framework experience documented | Gap |
| SDK development (JS/TS/Java/.Net/Python/ObjC/Swift/Android) | No SDK authoring experience | Gap |
| Unit + integration tests | 90+ Jest/Supertest tests on Terrisage | Match |
| Complex data structures + algorithms | 400+ LeetCode/GFG problems | Match |
| Agile environment | V-Align and Terrisage both agile | Match |

**Notes:** The role is specifically focused on CLI tooling (OCLIF framework) and multi-language SDK development — not a backend API/service role. This is a niche specialization that doesn't align well with Mohak's experience building SaaS backends, APIs, and data pipelines. The Node.js/TypeScript foundation is solid, but the actual day-to-day work (maintaining CLIs and SDKs across 8+ languages) is far removed from Mohak's profile.

## Block B: North Star Alignment
**Fit: 3.0/5**

Contentstack is a leading Composable DXP (Digital Experience Platform) — a respected product company with enterprise clients (ASICS, Chase, Riot Games, Shell). However:
- The role is CLI + SDK engineering, not backend service engineering
- This maps to none of Mohak's four target archetypes cleanly
- Archetype 1 (Backend SDE) expects service/API work, not developer tooling
- Archetype 4 (Platform/Infra) is adjacent but SDK authoring is a different skill set
- Growth trajectory toward backend services would require an internal role switch

The "Software Engineer I" title combined with SDK/CLI scope suggests this could be entry-level framing with limited upward mobility into the backend product areas Mohak targets.

## Block C: Compensation
**Score: 3.0/5**

- Levels.fyi data: Contentstack India SWE median ~₹1.91M (~19 LPA); range ₹301K–₹1.91M+
- Indeed India average: ~₹9.37 LPA
- "Software Engineer I" is typically the lowest band at any company
- At Contentstack India, SWE I likely bands at 12–20 LPA based on market data
- This is at or below Mohak's hard floor of 25 LPA
- Contentstack has raised $80M+ (Series C, Insight Partners, Illuminate) — comp may be better than India median suggests, but SWE I band is a ceiling risk

## Block D: Cultural Signals
**Score: 3.5/5**

- Contentstack is remote-friendly, India presence in Bengaluru — matches location preference
- Enterprise-grade codebase (8 language SDKs, OCLIF CLI) — high code quality standards
- VC-backed (Insight Partners, Illuminate) with $80M+ raised — financial stability
- Agile environment, collaborative engineering culture indicated
- No red flags on culture
- Risk: SDK/CLI teams can be isolated from the main product roadmap; growth visibility may be lower

## Block E: Technical Fit
**Score: 3.0/5**

- Node.js + TypeScript: Strong (primary stack)
- OCLIF framework: Zero exposure — learning curve required
- Multi-language SDK development: No documented experience in Java, .Net, Python, ObjC, Swift, Android
- Unit + integration testing: Strong (Jest/Supertest)
- Data structures + algorithms: Strong (400+ DSA problems)
- Agile: Comfortable
- The core technical mismatch is the specialization in CLI/SDK engineering vs Mohak's backend service/API experience

## Block F: Interview Plan

**Story 1 — TypeScript + Node.js depth**
STAR: Built Terrisage backend entirely in TypeScript/Node.js — strict types, Prisma ORM, GraphQL schema-first. Maintained type safety across 90+ test files. Result: zero type-related production bugs post-launch. Relevance: demonstrates TS depth needed for SDK authoring.

**Story 2 — Test pyramid ownership**
STAR: On Terrisage, introduced full test pyramid (unit, integration, E2E with Maestro) as sole engineer. Result: 90+ automated tests covering all critical paths; caught 3 regression bugs before production. Relevance: Contentstack explicitly requires creating/updating CLI plugins with unit and integration tests.

**Story 3 — Complex data structures in production**
STAR: At V-Align, designed Airflow ETL pipeline processing 20K+ records/day with complex hierarchical data models in PostgreSQL. Implemented RBAC permission graphs. Result: zero data processing errors in production. Relevance: demonstrates DSA applied to real systems, not just LeetCode.

**Story 4 — Learning new frameworks under production pressure**
STAR: At V-Align, adopted LangChain/LangGraph (no prior production AI experience) to build agentic document generation — shipped in 4 weeks. Result: 75% increase in proposal throughput. Relevance: demonstrates fast framework adoption, directly relevant to learning OCLIF.

**Likely interview questions:**
- Have you built or maintained any CLI tools? Walk us through your approach.
- How would you design a Node.js SDK that works across multiple environments?
- Describe your approach to testing a CLI that has side effects (file system, network)?
- How do you handle breaking changes in a public SDK?

## Block G: Posting Legitimacy
**Tier: Tier 1**

- Listed on Peerlist — high-signal India-focused tech platform
- Contentstack is a verified company with $80M+ in VC funding
- Liveness confirmed active by check-liveness.mjs
- Role description consistent across Peerlist and Built In listings
- No suspicious signals

## Recommendation

**APPLY WITH CAUTION.** Contentstack is a quality company and the Node.js/TypeScript fit is real, but the role is CLI/SDK engineering — a niche that doesn't match Mohak's backend service experience or any of his four target archetypes. The comp band (SWE I) is likely below his floor. Worth applying only if Mohak is specifically interested in developer tooling as a career direction, or if Contentstack confirms a higher band and a path to backend service work.

---

## Machine Summary
```yaml
company: Contentstack
role: Software Engineer I (Node.js Backend)
score: 3.5
status: Evaluated
url: https://peerlist.io/company/contentstack/careers/software-engineer-i-nodejs-backend/jobhq798dreqb99na1onqjokq6k8qd
date: 2026-06-24
pdf: false
archetype: Backend Engineer (SDE1) — CLI/SDK niche, not core backend
notes: Quality company but CLI/SDK focus mismatches profile; SWE I band likely below floor
```
