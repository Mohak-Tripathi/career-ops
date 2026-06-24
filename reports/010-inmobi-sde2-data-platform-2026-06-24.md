# Report: InMobi — SDE II, Data Platform

**Date:** 2026-06-24
**Score:** 2.2/5
**URL:** https://job-boards.greenhouse.io/inmobi/jobs/7956882
**PDF:** not generated — run /career-ops pdf inmobi-sde2-data-platform to create on demand
**Legitimacy:** High Confidence
**Verification:** active

---

## Block A: Match with CV

**Fit: 2.0/5**

| Requirement | Mohak's Profile | Verdict |
|-------------|----------------|---------|
| 3–6 years data/platform engineering | 3.5yr but backend/fullstack, not data platform | Partial — wrong domain |
| Spark / PySpark (core requirement) | No Spark experience | Hard Gap |
| Apache Flink (streaming) | No Flink experience | Hard Gap |
| Airflow orchestration | Used Airflow at V-Align for ETL (20K+/day) | Match |
| Iceberg / Delta / Hudi (lake formats) | No data lake experience | Hard Gap |
| Python proficiency | Knows basics, not production-level | Minor Gap |
| Kubernetes | Docker+AWS deployment at V-Align (no Kubernetes) | Partial |
| SQL and data modeling | PostgreSQL, Prisma at V-Align and Terrisage | Match |
| CI/CD, Git, IaC | Docker + AWS, Git workflows | Partial |
| Kafka / streaming (nice-to-have) | No Kafka experience | Gap |

Mohak's backend experience (TypeScript, Node.js, PostgreSQL, GraphQL) doesn't map to this data engineering role. The JD is squarely in the Spark/Flink/Iceberg/PySpark world — a distinct sub-discipline from backend web engineering. The only meaningful overlaps are Airflow (used at V-Align) and SQL/data modeling. The core stack is essentially a complete mismatch.

## Block B: North Star Alignment

**Fit: 1.5/5**

This is a Data Platform Engineering role — building data pipelines, lake formats, query optimization, and Kubernetes-based data workloads. It does not align with any of Mohak's 4 archetypes:
1. Backend Engineer (SDE2/SDE3) — NOT this (no web services, no APIs)
2. Backend Engineer with AI Integration — NOT this (no LLM/AI work)
3. Full Stack Engineer (Backend-Heavy) — NOT this (no frontend, no product work)
4. Platform/Infra Engineer — Closest, but data platform ≠ application platform

The work itself — Spark optimization, partitioning strategies, data quality frameworks — would require Mohak to pivot away from his current trajectory entirely. Not what he wants to build.

## Block C: Compensation

**Score: 2.0/5**

InMobi is a well-funded ad-tech unicorn (SoftBank, Kleiner Perkins) but does not disclose comp in this posting. For a SDE2 role at InMobi Bangalore this might be 20–35 LPA depending on band. However this role is in **Lucknow**, not Bangalore — InMobi Lucknow comp bands are typically materially lower than Bangalore (estimated 18–30 LPA). This likely falls below or barely touches Mohak's 30 LPA floor. Hard to score above 2.0 without comp disclosure and given the location.

## Block D: Cultural Signals

**Score: 3.0/5**

InMobi is a mature, profitable Indian tech company with strong brand recognition, global operations (150+ countries), and a solid engineering culture. "Great Place to Work" certified. They run large-scale infra processing petabytes daily — real technical challenges. However:
- The role is in **Lucknow**, not Bengaluru — this is a significant lifestyle/career network concern
- Data platform teams can be internally-facing and less visible than product engineering
- No remote/hybrid policy mentioned, which likely means on-site Lucknow

## Block E: Technical Fit

**Score: 1.5/5**

The tech stack is fundamentally different from Mohak's profile:
- **Required but absent:** PySpark/Scala, Flink, Iceberg, DBT, Great Expectations, Velox/Gluten
- **Present in Mohak's profile:** Airflow (overlap), PostgreSQL/SQL, Docker, AWS, Node.js (irrelevant here), TypeScript (irrelevant here)
- **Python gap:** The role requires Python proficiency; Mohak knows basics but doesn't have production Python experience

This isn't a "stretch role" — it's a different engineering discipline entirely. Ramp-up would be 6–12 months minimum to become productive.

## Block F: Interview Plan

If applying despite the mismatch, these are the only plausible STAR stories:

1. **Airflow ETL at V-Align:** Built and maintained Airflow-based ETL pipeline processing 20K+ records/day. Can speak to orchestration, DAG design, failure handling.
2. **Multi-tenant data modeling at Terrisage:** Designed PostgreSQL schema for multi-tenant B2B CRM — data modeling, partitioning thinking, query optimization.
3. **Monitoring/Observability at Terrisage:** Sentry + Uptime Robot setup, 99.5% uptime — can stretch this toward data quality/monitoring themes.

None of these directly address the Spark/Flink core — the interview would quickly expose the stack gap.

## Block G: Posting Legitimacy

**Tier: High Confidence**

- Greenhouse-hosted, active Greenhouse API response confirms live posting
- InMobi is a real company with well-documented career history
- Job updated 2026-06-24 (today), very fresh
- Location (Lucknow) is consistent with InMobi's known satellite offices
- No salary inflation red flags, no suspicious demands

## Recommendation

**DO NOT APPLY.** This role is a data platform engineering position requiring Spark, Flink, Iceberg, and PySpark — none of which are in Mohak's stack. The Lucknow location adds a further obstacle on top of a fundamental discipline mismatch. Mohak would be competing against dedicated data engineers with 3–6 years of exactly this tooling.

---

## Machine Summary

```yaml
company: InMobi
role: SDE II, Data Platform
score: 2.2
status: Evaluated
url: https://job-boards.greenhouse.io/inmobi/jobs/7956882
date: 2026-06-24
pdf: false
archetype: Platform/Infra Engineer (mismatch — data platform, not app platform)
notes: Data pipeline role (Spark/Flink/Iceberg) in Lucknow — wrong stack and wrong location; only Airflow overlap
```
