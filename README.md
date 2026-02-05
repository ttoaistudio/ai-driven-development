# AI-Driven Development — ToDo Monolith

This repo demonstrates **how a ToDo app should be implemented as a monolith**, plus the **AI-facing documentation** that leads to that implementation. It is intentionally small and explicit to serve as a reference.

## What’s inside
- `AGENTS.md` — AI guidance for contributions and decision-making
- `docs/ai/` — AI-facing documentation (requirements → design → implementation plan)
- `docs/implementation/` — monolith implementation guidance

## Quick start (human)
This project is documentation-first. There is no runtime code yet. The goal is to show *how to implement* the monolith and the reasoning that gets you there.

## Recommended stack (reference)
- API: FastAPI or Express
- DB: PostgreSQL
- Auth: JWT (or session)
- Notification: background job within the same app

## Scope of the ToDo app (reference)
- Users: sign up / login / profile
- Tasks: CRUD, status, due date, tags
- Notifications: due reminders (email/push mocked)

See `docs/ai/` for the full decision trail and `docs/implementation/` for the target architecture.
