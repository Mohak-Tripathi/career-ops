# Report: InMobi — SDE 3, Data Platform Engineering

**Date:** 2026-06-24
**Score:** 1.6/5
**URL:** https://job-boards.greenhouse.io/inmobi/jobs/7956875
**PDF:** not generated — run /career-ops pdf inmobi-sde3-data-platform to create on demand
**Legitimacy:** High Confidence
**Verification:** active

---

## Block A: Match with CV

**Fit: 1.0/5**

| Requirement | Mohak's Profile | Verdict |
|-------------|----------------|---------|
| 7–10 years in production data platforms | 3.5 years total experience | Hard Blocker — 3.5–6.5yr gap |
| Spark/PySpark (expert level) | No Spark experience | Hard Gap |
| Apache Flink streaming | No Flink experience | Hard Gap |
| Iceberg table format | No data lake experience | Hard Gap |
| DBT modeling | No DBT experience | Hard Gap |
| Great Expectations data quality | No GX experience | Hard Gap |
| Velox/Gluten (compute engines) | No experience | Hard Gap |
| Kubernetes platform dev (GKE) | Docker, no K8s | Hard Gap |
| Python + Scala | No production Python/Scala | Hard Gap |
| Terraform + Helm | No IaC experience | Hard Gap |
| Airflow DAG development | Used Airflow at V-Align | Only Match |

This is the worst CV match in the batch. Mohak meets 1 of ~11 technical requirements (Airflow). The experience bar alone (7–10 years) is a hard disqualifier — Mohak has 3.5 years total. This role is designed for a seasoned data platform architect, not a backend engineer making a transition.

## Block B: North Star Alignment

**Fit: 1.0/5**

SDE3 Data Platform at InMobi means architecting petabyte-scale distributed data infrastructure. This is entirely outside Mohak's 4 archetypes. The role involves:
- Designing lake house architecture (Iceberg, Spark, Flink)
- Multi-region Kubernetes platform operations
- Data quality frameworks, telemetry, observability at scale

None of this is backend product engineering, AI integration, full stack, or application platform. This would be a full career pivot to a specialty Mohak has no foundation in.

## Block C: Compensation

**Score: 2.0/5**

SDE3 at InMobi (Lucknow) would likely pay 30–50 LPA based on seniority, but:
- Lucknow comp bands are below Bangalore even at the same title
- Mohak is vastly underqualified — unlikely to reach the SDE3 band
- No comp disclosed in posting
- Even at 40 LPA this doesn't compensate for the career mismatch

## Block D: Cultural Signals

**Score: 2.5/5**

InMobi's engineering culture is legitimate and the company runs genuinely interesting scale challenges. However:
- **Lucknow location** is a hard practical concern — InMobi's main engineering hub is Bangalore
- SDE3 in Lucknow suggests this is a cost center office, not the core product team
- 7–10 year exp requirement for a Lucknow posting is unusual — suggests they may struggle to fill the role at this band in this location
- No mention of remote/hybrid

## Block E: Technical Fit

**Score: 1.0/5**

The tech overlap is essentially zero for the core requirements:
- **Must-have and absent:** Spark, Flink, Iceberg, DBT, Great Expectations, Velox, Terraform, Helm, Scala, GKE
- **Only overlap:** Airflow (minor), SQL/data modeling (transferable but insufficient)
- **Experience gap:** SDE3 requires 7–10 years; Mohak has 3.5 years — this is a 3–6 year gap regardless of stack

Even if Mohak had the stack, he would be screened out at the resume stage on experience level alone.

## Block F: Interview Plan

There is no realistic interview path for this role given the hard blockers. For documentation purposes:

1. **Airflow ETL at V-Align:** Only relevant technical story — DAG orchestration, 20K+ records/day, pipeline reliability.
2. **System design at Terrisage:** Multi-tenant architecture, schema design, scaling considerations — very distant from data platform design.

The experience gap and stack gap would surface in the first 10 minutes of any technical screen.

## Block G: Posting Legitimacy

**Tier: High Confidence**

- Greenhouse API confirms active status
- InMobi is a verified, publicly known company
- JD language is professional and internally consistent
- Lucknow office is a known InMobi location
- No red flags in posting structure

## Recommendation

**DO NOT APPLY.** This role has two independent hard disqualifiers: (1) 7–10 years experience required vs Mohak's 3.5 years, and (2) the entire tech stack (Spark, Flink, Iceberg, DBT, Scala, Terraform) is absent from Mohak's profile. The Lucknow location and data platform discipline mismatch make this a triple fail. Do not invest any time here.

---

## Machine Summary

```yaml
company: InMobi
role: SDE 3, Data Platform Engineering
score: 1.6
status: Evaluated
url: https://job-boards.greenhouse.io/inmobi/jobs/7956875
date: 2026-06-24
pdf: false
archetype: Platform/Infra Engineer (heavy mismatch — data platform, not app platform)
notes: Hard disqualifiers — 7-10yr exp required (Mohak has 3.5yr), full Spark/Flink/Iceberg stack gap, Lucknow location
```
