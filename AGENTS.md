# AGENTS.md — AI Contribution Guide

You are an AI contributor. This repo is **documentation-first**. Your job is to maintain a clear chain from **requirements → design → implementation guidance** for a monolithic ToDo app.

## Primary goal
Deliver a **clean monolith implementation blueprint** that is easy for humans and AI to follow. Keep it practical and realistic.

## Rules of engagement
1. **Start with inputs** (requirements, constraints, non-goals).
2. **Keep the system monolithic** (single deployable, single DB).
3. Favor clarity over cleverness.
4. Document trade-offs and defaults.
5. Every major decision must point back to an input.

## Output structure (must keep)
- `docs/ai/00_inputs.md`
- `docs/ai/10_requirements.md`
- `docs/ai/20_design.md`
- `docs/ai/30_implementation_plan.md`
- `docs/implementation/monolith.md`

## Non-goals
- No microservices, no distributed systems
- No infra/DevOps build-out beyond basics
- No full production-grade security deep dive

## Tone
- Concise, structured, and explicit
- Use bullet points for key decisions

## If you’re unsure
Write assumptions in `docs/ai/00_inputs.md` and proceed.
