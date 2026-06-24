# Report: Truecaller — Senior Software Engineer Backend

**Date:** 2026-06-24
**Score:** 1.4/5
**URL:** https://job-boards.greenhouse.io/truecaller/jobs/8020192
**PDF:** not generated — run /career-ops pdf truecaller-senior-backend to create on demand
**Legitimacy:** High Confidence
**Verification:** active

---

## Block A: Match with CV

**Fit: 2.5/5**

| Requirement | Mohak's Profile | Verdict |
|-------------|----------------|---------|
| 5+ years Scala, Java, or Go | No Scala, no Java, no Go — TypeScript/Node.js | Hard Blocker — all 3 languages absent |
| Scalable, highly available, real-time distributed systems | Multi-tenant SaaS, 99.5% uptime, webhook pipelines | Partial |
| Non-relational databases | PostgreSQL only (relational) | Hard Gap |
| Data structures and algorithms | 400+ LeetCode/GFG problems | Match |
| Mentoring / leadership skills | Sole backend engineer, cross-team collaboration | Partial |
| Excellent English communication | Strong English throughout career | Match |
| GCP (nice-to-have) | AWS only, no GCP | Minor Gap |
| Docker / Kubernetes (nice-to-have) | Docker ✅, Kubernetes ❌ | Partial |
| Cassandra + Kafka (nice-to-have) | Neither in stack | Gap |
| Valid work permit in Sweden or EU/EEA citizenship | India-based, no Swedish work permit | Hard Blocker — location |

Mohak meets 2 of ~8 hard requirements (DSA, communication skills). The primary tech requirement (Scala, Java, or Go) is a hard blocker — Mohak's entire experience is TypeScript/Node.js. Truecaller's backend infrastructure runs on JVM or Go; none of Mohak's stack transfers. The work permit requirement adds a second independent hard blocker.

## Block B: North Star Alignment

**Fit: 2.0/5**

Senior Backend at Truecaller means operating distributed systems at massive scale (450M+ users, 15B+ calls/day). The work — high-volume, low-latency services, mission-critical availability — directionally overlaps with Backend Engineer archetype (Archetype 1). The problem domain (spam detection, identity, real-time call analysis) is genuinely interesting. However:
- The role is in Sweden, not India
- The tech stack is Scala/Java/Go — a completely different backend ecosystem
- Non-relational databases (Cassandra, HBase, etc.) are core — Mohak has no experience here

The role archetype is right but the geography and stack make it unreachable for Mohak at this time.

## Block C: Compensation

**Score: 1.0/5**

This is a **Sweden-based role** with Swedish compensation structure (likely 800K–1.1M SEK/year = approx 55–75 LPA INR equivalent in purchasing power, but paid in SEK in Stockholm). Mohak would need to relocate to Sweden, which is a hard NO per his location policy (India only). The compensation question is moot given the geographic disqualification. Scoring at 1.0 because the role cannot be considered.

## Block D: Cultural Signals

**Score: 3.0/5**

Truecaller has genuinely strong engineering culture:
- 450M+ MAU, real-world scale challenges
- "Lab Days" (5x/year, 3-day hackathon-style blocks) — strong innovation culture signal
- 45+ nationalities, office-first but collaborative
- JD mentions internal mobility, mentoring, transparent progression
- Backed by public listing (TELE) — financial stability
- However: **office-first in Stockholm** — no remote option

Scoring culture independently as if location weren't a blocker: 3.5/5. But it must be discounted for the location hard stop.

## Block E: Technical Fit

**Score: 1.5/5**

The tech stack overlap is minimal:
- **Required and absent:** Scala, Java, Go (all three primary language options — all missing)
- **Required and absent:** Non-relational databases (Cassandra, HBase, etc.)
- **Nice-to-have and partially present:** Docker ✅, GCP ❌, Kubernetes ❌, Kafka ❌
- **Present but irrelevant here:** TypeScript, Node.js, GraphQL, PostgreSQL, React/Next.js, LangChain

Truecaller's backend is a JVM/Go shop with NoSQL databases. This represents a full stack rebuild for Mohak — not a stretch, but a pivot. The 5+ years requirement specifically tied to those languages makes this a hard screen-out.

## Block F: Interview Plan

There is no viable application path. For documentation:

1. **Multi-tenant architecture at Terrisage:** Most relevant system design story (RBAC, webhook pipelines, PostgreSQL at scale) — but the database is wrong (Cassandra vs PostgreSQL).
2. **High-availability thinking at Terrisage/LiftUP:** Sentry monitoring, Uptime Robot, 99.5% uptime — maps to mission-critical services theme.
3. **Webhook pipeline architecture:** Meta Ads + MagicBricks + 99acres real-time webhooks — closest to distributed/real-time systems thinking.

None of these would survive the first technical screen which would immediately surface the language mismatch.

## Block G: Posting Legitimacy

**Tier: High Confidence**

- Greenhouse API confirms active live posting (updated 2026-06-22)
- Truecaller is a publicly listed company (Nasdaq First North, Stockholm)
- JD is professionally written, consistent with Truecaller's known engineering culture
- Sweden location is Truecaller's actual HQ
- Work permit requirement explicitly stated — transparent and consistent with a European employer
- No red flags

## Recommendation

**DO NOT APPLY.** Two independent hard disqualifiers make this a non-starter: (1) **Location is Sweden** — Mohak's policy is India only, no relocation; (2) **Primary language requirement is Scala/Java/Go** — all three are absent from Mohak's stack. Even if location were flexible, Mohak cannot clear the Scala/Java/Go language requirement at 5+ years experience. The role is filed for reference only.

---

## Machine Summary

```yaml
company: Truecaller
role: Senior Software Engineer Backend
score: 1.4
status: Evaluated
url: https://job-boards.greenhouse.io/truecaller/jobs/8020192
date: 2026-06-24
pdf: false
archetype: Backend Engineer (hard disqualified — wrong location and wrong stack)
notes: Sweden location (hard NO), Scala/Java/Go required (all absent from Mohak's stack); two independent hard blockers
```
