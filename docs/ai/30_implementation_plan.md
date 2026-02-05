# 30_implementation_plan — How to build it (Monolith)

## Step 1: Project setup
- Choose framework (FastAPI or Express)
- Add lint, format, env config
- Set up DB connection and migrations

## Step 2: Core modules
- `auth` (signup/login)
- `users` (profile)
- `tasks` (CRUD)
- `notifications` (in-process scheduler)

## Step 3: Data layer
- Define models (users, tasks, notification_jobs)
- Add indexes on `tasks.user_id`, `tasks.due_at`

## Step 4: API layer
- REST endpoints per module
- Input validation + error handling

## Step 5: Notifications
- Daily and near‑due jobs
- Send via stubbed email/console

## Step 6: Observability
- Structured logging
- Basic metrics placeholders

## Definition of done
- API passes basic CRUD flows
- Notifications fire at correct times
- Docs reflect final structure
