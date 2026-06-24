# Evaluation: Spotify — Backend Engineer - User Platform

**Date:** 2026-06-13
**URL:** https://jobs.lever.co/spotify/58860a10-4a0d-4a21-a495-1f3605b300c1
**Archetype:** Backend / Platform Engineer (SDE-2)
**Score:** 2.8/5
**Legitimacy:** Proceed with Caution
**PDF:** not generated — run /career-ops pdf spotify-backend-user-platform to create on demand

---

## A) Role Summary

| Field | Detail |
|-------|--------|
| Archetype | Backend / Platform Engineer (SDE-2) |
| Domain | Music/audio streaming — Identity and Access Management (IAM/CIAM) |
| Function | Build — creator authorization infrastructure for Spotify's 700M+ user platform |
| Seniority | Mid-Senior (3+ years Java + SQL required) |
| Remote | Hybrid Toronto (some in-person meetings, WFH flexible) — NOT India/IST remote |
| Team size | Lockness team within User Platform (UP), Platform Mission |
| TL;DR | Backend IAM role in Toronto requiring Java/SQL; good seniority match (3+ YOE) but Java is a language gap and Toronto is a location gap; authorization domain has some overlap with Mohak's RBAC experience. |

---

## B) Match with CV

| JD Requirement | CV Match | Strength |
|----------------|----------|----------|
| 3+ years Java + SQL | No Java production experience; PostgreSQL/SQL strong | Language GAP; SQL strong |
| Authorization domain / IAM | RBAC implementation at Terrisage and V-Align (role-based access control, tenant scoping) | **Strong adjacent match** |
| Full-stack understanding (server + client) | Full-stack capability (Node.js + React/Next.js) | Match |
| Cross-functional collaboration | Cross-team work at V-Align (PM + engineers + designers) | Match |
| Apply AI to improve systems | LangChain, OpenAI APIs in production | Match |
| TypeScript (secondary) | TypeScript primary language | **Match** |
| React / Next.js (secondary) | React/Next.js in CV | Match |
| Problem solving: concept to production | 0→1 at Terrisage — complete lifecycle ownership | Strong match |

**Authorization domain note:** Mohak's RBAC implementation (tenant-scoped access control, resolver-level authorization at Terrisage) is genuinely adjacent to IAM work. Not CIAM at 700M scale, but the conceptual domain (who can access what, scoped to context) is the same.

**Gaps:**
1. **Java (moderate-hard blocker):** Primary language required. Mohak has no Java production experience. The 3+ year bar is lower than other Spotify/GYG roles — but Java is still a hard technology gap.
2. **Location:** Toronto hybrid. No IST remote.
3. **IAM/CIAM scale:** Spotify's authorization infrastructure serves 700M users. Mohak's RBAC is at B2B SaaS scale — design pattern match but volume is entirely different.

---

## C) Level and Strategy

- **Level detected:** Mid-Senior (3+ YOE with Java; lower bar than typical "Senior" postings in this batch)
- **Candidate level:** SDE-2 — excellent seniority match if language gap can be addressed
- **Sell plan:** Lead with RBAC/authorization design at Terrisage — "resolver-level RBAC enforcing tenant isolation at every GraphQL query for 15+ enterprise clients." This is IAM work by any definition, just at B2B scale. Pivot to full-stack capability and AI tooling.
- **Java gap framing:** "My production stack is TypeScript/Node.js. Java and TypeScript are both strongly-typed, OOP languages — the paradigms transfer. I've studied Spring Boot patterns and could be productive within 4–6 weeks on Java specifics."
- **Primary blocker:** Toronto hybrid; location cannot be negotiated.

---

## D) Comp and Demand

| Item | Data |
|------|------|
| Stated comp | CAD $103,321–$147,602 base + equity |
| INR equivalent | ~63–90 LPA |
| vs Mohak's target | Well above floor |
| Requires Toronto work authorization | Yes — Canadian work permit for Indian citizen |
| Equity component | Stock options add meaningful upside at Spotify's public company scale |

---

## E) Customization Plan

| # | Section | Current | Proposed change | Why |
|---|---------|---------|-----------------|-----|
| 1 | Summary | Backend-heavy SDE | "Backend engineer with RBAC/authorization design and multi-tenant access control experience" | Matches IAM domain directly |
| 2 | Terrisage | Multi-tenant CRM | "Resolver-level RBAC enforcing tenant-scoped authorization at every API call" | IAM language applied to Terrisage work |
| 3 | V-Align | RBAC implementation | "Multi-tenant RBAC with data isolation — 5+ enterprise clients, zero cross-tenant access incidents" | Authorization domain proof point |
| 4 | AI integration | LangChain, Whisper | "Applied AI tooling (OpenAI APIs) to improve system throughput by 75%" | Matches "apply AI" requirement |
| 5 | Skills | TypeScript listed | Note Java familiarity (self-study); emphasize SQL proficiency | Softens Java gap signal |

---

## F) Interview Plan

| # | JD Requirement | STAR+R Story | Key metric |
|---|----------------|-------------|------------|
| 1 | Authorization / RBAC | Terrisage RBAC design | Resolver-level access control, 15+ enterprise clients, zero cross-tenant leakage |
| 2 | Multi-tenant access control | V-Align multi-tenant SaaS | Tenant-scoped RBAC, 5+ enterprise clients, 75% ops output increase |
| 3 | Full-stack delivery | Terrisage 0→1 | Backend + React Native mobile + web, sole engineer |
| 4 | Apply AI to systems | V-Align proposal automation | 4→7 proposals/week with LangChain/LangGraph |
| 5 | High-availability systems | Terrisage production | 99%+ uptime, Sentry, Uptime Robot, 90+ test suites |

**Recommended case study:** Terrisage RBAC — "I designed resolver-level authorization middleware that checks tenant membership and role permissions before every GraphQL query. This is the same IAM pattern Spotify uses for creator authorization — enforcing access at the API layer, not the database layer."

---

## G) Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Lever API active; salary range disclosed | Positive |
| JD quality | Named team (Lockness/User Platform), specific domain (creator IAM), comp range disclosed | Positive |
| Salary transparency | CAD $103K–$147K + equity — strong legitimacy signal | Positive |
| Spotify company signals | Public company (SPOT); Q1 2025 profitable; Platform Mission hiring | Positive |
| IAM domain | Authorization infrastructure is evergreen — always needs engineers | Positive |
| Toronto hiring | Spotify's Toronto hub is active engineering center | Positive |

Real posting. Spotify is a public company with disclosed comp — very low ghost-job risk.

---

## Cover Letter Draft

> Score 2.8/5. Java gap and Toronto location reduce viability. Worth noting for "if Toronto relocation" pipeline only.

**Gaps flagged:**
- Java primary required; no production Java in Mohak's stack
- Toronto hybrid; Canadian work authorization required
- IAM at 700M scale vs B2B SaaS RBAC — design pattern match, scale is entirely different

**JD keywords to mirror:** Java, SQL, authorization, IAM, CIAM, RBAC, creator authorization, User Platform, cross-functional, full-stack, AI tooling

---

## Machine Summary

```yaml
role: "Backend Engineer - User Platform"
company: "Spotify"
score: 2.8
archetype: "Backend / Platform Engineer"
location: "Toronto, Canada (hybrid)"
remote_india: false
location_verdict: "location dealbreaker — Toronto hybrid, Canadian work authorization required"
tech_stack: ["Java", "SQL", "React", "TypeScript", "Next.js"]
stack_gap: "Java — production gap (TypeScript/Node.js is primary)"
yoe_required: "3+ years"
comp_stated: "CAD $103,321-$147,602 + equity"
recommendation: "skip — Java gap + Toronto location; note IAM domain as future target area"
legitimacy: "Proceed with Caution"
```
