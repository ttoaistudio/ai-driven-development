# 20_design — Monolith Design

## Architecture
Single application with internal modules:
- **auth**: login, token, password reset
- **users**: profile
- **tasks**: CRUD, tags, status
- **notifications**: scheduled + near-due reminders
- **shared**: db, config, logging

## Data model (logical)
- **users**: id, name, email, password_hash, created_at
- **tasks**: id, user_id, title, status, due_at, tags, notes, created_at, updated_at
- **notification_jobs**: id, task_id, type, scheduled_at, sent_at

## Key decisions (with inputs)
- Single DB → aligns with simplicity/time-to-market.
- Background jobs inside same app → avoids extra infra.
- RESTful API → straightforward for CRUD.

## API sketch
- `POST /auth/signup`
- `POST /auth/login`
- `GET /users/me`
- `POST /tasks`
- `GET /tasks`
- `GET /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

## Notification strategy
- Daily job scans tasks due in 24h.
- Near-due job scans every 15 min for due in 1h.
- Jobs run in-process (cron/worker thread).
