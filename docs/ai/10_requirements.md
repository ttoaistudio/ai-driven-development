# 10_requirements — Functional & Non‑functional Requirements

## Functional requirements
- **User management**
  - Sign up, login, logout
  - Basic profile (name, email)
- **Task management**
  - Create / Read / Update / Delete
  - Status: todo / doing / done
  - Due date, tags, notes
- **Notifications**
  - Daily due reminders
  - Immediate reminder when due date is within 1 hour

## Non‑functional requirements
- **Simplicity**: One codebase, one DB, minimal services.
- **Observability**: Structured logs, basic metrics, error tracking hooks.
- **Security baseline**: Password hashing, auth tokens, input validation.
- **Maintainability**: Clear module boundaries inside the monolith.

## Out of scope
- Multi-tenant org features
- Real-time collaboration
- Multi-region deployment
