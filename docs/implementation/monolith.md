# Monolith Implementation Guide — ToDo App

This is the **target monolith implementation**. It is intentionally simple and modular.

## Module layout (example)
```
/ src
  / auth
  / users
  / tasks
  / notifications
  / shared
```

## Data schema (SQL-ish)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  status TEXT NOT NULL,
  due_at TIMESTAMP NULL,
  tags TEXT[] NULL,
  notes TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE notification_jobs (
  id UUID PRIMARY KEY,
  task_id UUID NOT NULL REFERENCES tasks(id),
  type TEXT NOT NULL,
  scheduled_at TIMESTAMP NOT NULL,
  sent_at TIMESTAMP NULL
);
```

## Core flows
### Auth
- Signup: hash password, create user, return token
- Login: verify password, return token

### Tasks
- CRUD with ownership check
- Filter by status, due date

### Notifications (in-process)
- Scheduler runs in same app process
- Two jobs:
  - Daily scan (24h window)
  - Near-due scan (1h window)
- Send via stub (console / mock email)

## Why this is “correct”
- Matches upstream inputs: **fast iteration**, **small team**, **simple ops**
- Keeps clean module boundaries without service sprawl

## Future split points (optional)
If requirements change:
- **notifications** can split first (high change/volume)
- **tasks** can split next (core domain with distinct scaling needs)
