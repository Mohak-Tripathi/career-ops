# Report: InMobi — SDE III, Gen AI

**Date:** 2026-06-24
**Score:** 3.1/5
**URL:** https://job-boards.greenhouse.io/inmobi/jobs/7548045
**PDF:** not generated — run /career-ops pdf inmobi-sde3-gen-ai to create on demand
**Legitimacy:** High Confidence
**Verification:** active

---

## Block A: Match with CV

**Fit: 2.8/5**

| Requirement | Mohak's Profile | Verdict |
|-------------|----------------|---------|
| 5+ years building/deploying ML/AI systems | 3.5 years total, ~1–1.5yr production AI | Hard Blocker — 1.5yr gap |
| 2+ years focused on Gen AI / LLMs | LangChain/LangGraph at V-Align, Whisper at V-Align & Terrisage | Partial Match (~1–1.5yr) |
| Expert-level Python (async, performance) | Knows basics, not production Python | Hard Gap |
| PyTorch / Transformers / LangChain | LangChain ✅, LangGraph ✅, PyTorch/Transformers ❌ | Partial |
| Vector databases | No direct vector DB production experience | Gap |
| Production deployment at scale | AWS EC2/S3/Docker deployed production apps | Partial |
| Transformer architecture knowledge | No deep ML theory background | Gap |
| RAG pipelines | LangChain RAG at V-Align (production) | Match |
| Multi-agent systems (production) | LangGraph agentic doc generation at V-Align (production) | Match |
| Prompt engineering | Used in LangChain/LangGraph workflows | Match |
| Product search/discovery + hybrid BM25 | No search/discovery domain experience | Gap |
| GCP + Docker + Kubernetes | AWS ✅, Docker ✅, GCP ❌, K8s ❌ | Partial |
| LangGraph / Google ADK | LangGraph ✅ in production, Google ADK ❌ | Partial |
| ONNX / TensorRT (optimization) | No model optimization experience | Gap |

Mohak has genuine, production-validated AI experience: LangChain RAG pipelines, LangGraph multi-agent document generation (increased output 4→7 proposals/week), and OpenAI Whisper voice transcription in two separate products. However, the role demands Python expertise (Mohak uses TypeScript/Node.js), PyTorch/Transformers for model work, and 5+ years total experience. The exp gap and Python gap are meaningful.

## Block B: North Star Alignment

**Fit: 3.5/5**

This aligns squarely with Archetype 2 (Backend Engineer with AI Integration — LLMs, agentic workflows, RAG, voice AI). The work includes:
- Building production Gen AI apps serving millions of users
- RAG pipelines, multi-agent systems, LLM fine-tuning
- Prompt engineering, cost optimization (50–70% token reduction)

This IS the trajectory Mohak is building toward. The concern is the ML-depth requirement (transformer architectures, PyTorch, model fine-tuning) which goes deeper than Mohak's current AI work, which is application-layer (LangChain/LangGraph) rather than model-layer. InMobi's ad-tech context means the AI work is likely in content recommendation, creative generation, and targeting optimization — interesting product problems.

## Block C: Compensation

**Score: 3.0/5**

InMobi is Bangalore-based for this role (Bangalore confirmed in JD). Gen AI SDE3 roles at funded Indian ad-tech companies typically range 35–55 LPA depending on years of AI experience. Given that Mohak would likely be assessed at SDE2 level due to total experience (3.5yr vs 5yr requirement), comp might land at 28–40 LPA. The range overlaps with Mohak's target but the experience mismatch could compress it toward the lower end. No comp disclosed in posting.

## Block D: Cultural Signals

**Score: 3.5/5**

InMobi has strong positive signals:
- 450M+ active users, 150+ countries — real scale, real engineering challenges
- "Great Place to Work" certified, SoftBank + Kleiner Perkins backing
- Bangalore location — Mohak's home base, full marks on location
- Gen AI team likely has direct product impact (ad creative, targeting, performance)
- "Lab Days" concept (from Truecaller, not InMobi — but InMobi's culture is known for engineering autonomy)
- Potential downside: ad-tech AI can feel less prestigious than product AI; InMobi's core is ad monetization

## Block E: Technical Fit

**Score: 2.8/5**

Strong overlaps in the AI application layer; gaps in the ML/model layer:

**Strong overlaps:**
- LangChain (production RAG) ✅
- LangGraph (production multi-agent) ✅
- OpenAI Whisper (voice AI, Whisper API) ✅
- Docker + AWS deployment ✅
- Multi-tenant SaaS architecture (directly transferable) ✅

**Significant gaps:**
- Python (need expert-level; Mohak is basics) — this is potentially the hardest gap
- PyTorch / Transformers / model fine-tuning (no experience)
- Vector databases (Pinecone, Weaviate, Qdrant — not on CV)
- Google ADK (new framework, learnable)
- ONNX / TensorRT (model serving optimization — advanced)
- Product search / BM25 hybrid search (no domain experience)
- GCP (AWS only; GCP learnable)
- Kubernetes (Docker only)

The Python gap deserves special attention: this JD says "Expert-level Python with async programming and performance optimization." Mohak is a TypeScript/Node.js engineer. Switching to Python as primary language at expert level would require sustained effort. This is a genuine blocker in AI/ML roles that are Python-first.

## Block F: Interview Plan

These STAR stories are most relevant to this JD:

1. **LangGraph Agentic Doc Generation at V-Align (Core Story):**
   Situation: Manual proposal creation was slow (4/week). Task: Build agentic document generation pipeline. Action: Designed LangGraph multi-step agent with LangChain RAG, context injection, iterative refinement. Result: 75% increase in output (4→7 proposals/week), released for client use. *Maps to: multi-agent systems, RAG pipelines, production AI deployment.*

2. **OpenAI Whisper Voice Transcription (V-Align + Terrisage):**
   Situation: Client needed voice-to-text in CRM and proposal workflows. Action: Integrated Whisper API, built post-processing pipeline, handled async audio upload flows. Result: Deployed in both products, real end users. *Maps to: multimodal AI, production AI deployment, voice AI experience.*

3. **Multi-Tenant SaaS Architecture at Terrisage:**
   Situation: 0→1 B2B CRM for multiple real estate lead sources. Action: Designed PostgreSQL multi-tenant schema, webhook pipelines for Meta Ads + MagicBricks + 99acres, RBAC. Result: Live on App Store + Play Store, production traffic. *Maps to: scalable microservices, production deployment, distributed systems thinking.*

4. **ETL Pipeline Cost/Performance at V-Align:**
   Situation: Airflow ETL processing 20K+ records/day needed optimization. Action: Tuned pipeline stages, improved reliability. Result: Maintained throughput at lower operational cost. *Maps to: cost optimization, pipeline performance, production systems.*

5. **Testing Pyramid at Terrisage:**
   Situation: Sole backend engineer needed confidence in releases. Action: Built 90+ Jest/Supertest unit tests + Maestro E2E coverage. Result: 99.5% uptime on live app. *Maps to: production quality, ownership, reliability.*

## Block G: Posting Legitimacy

**Tier: High Confidence**

- Greenhouse API confirms active, live posting
- InMobi is a publicly known, funded, operational company
- JD is detailed, technically specific, and internally consistent
- Bangalore location aligns with InMobi's primary engineering base
- Published date appears recent; role is clearly scoped for a real team need
- No red flags (no unusual requirements, no suspicious contact info, no "work from home globally" claims)

## Recommendation

**APPLY WITH CAUTION.** This is the best match in the InMobi batch by a significant margin — Bangalore location, right archetype (Gen AI backend), and genuine LangChain/LangGraph overlap. However, there are two real obstacles: (1) the 5-year experience requirement vs Mohak's 3.5 years, and (2) the Python-first requirement vs Mohak's TypeScript/Node.js background. Mohak should apply and frame himself as an AI application engineer with proven production deployments — emphasizing that most industry LangChain/LangGraph work is done in Python but his implementations are architecturally equivalent and he can onboard Python rapidly given his TypeScript/Node.js expertise. The experience gap may be waived for a strong portfolio. Do not apply without tailoring the CV to highlight the AI integration work specifically.

**Application framing:** Lead with the LangGraph + LangChain production story. Position as "AI Integration Engineer who builds at the application layer with production-proven agentic and RAG systems." Explicitly address the Python question by noting rapid ramp-up capability and the architectural overlap. Downplay data engineering background; emphasize multi-agent, RAG, voice AI, and production scale.

---

## Machine Summary

```yaml
company: InMobi
role: SDE III, Gen AI
score: 3.1
status: Evaluated
url: https://job-boards.greenhouse.io/inmobi/jobs/7548045
date: 2026-06-24
pdf: false
archetype: Backend Engineer with AI Integration
notes: Bangalore, right archetype, strong LangGraph/RAG overlap; blockers are Python gap and 5yr exp req vs 3.5yr; apply with tailored CV
```
