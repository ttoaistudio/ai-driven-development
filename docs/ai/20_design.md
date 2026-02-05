# 20_design — モノリス設計

## アーキテクチャ
単一アプリの内部モジュール分割:
- **auth**: 認証
- **users**: プロフィール
- **tasks**: CRUD
- **notifications**: リマインド
- **shared**: DB / 設定 / ログ

## データモデル（論理）
- **users**: id, name, email, password_hash, created_at
- **tasks**: id, user_id, title, status, due_at, tags, notes, created_at, updated_at
- **notification_jobs**: id, task_id, type, scheduled_at, sent_at

## 主要決定（Inputとの紐づけ）
- **単一DB**: 運用を簡素化
- **ジョブは同一プロセス内**: 追加インフラを避ける
- **REST API**: CRUDに適合

## APIスケッチ
- `POST /auth/signup`
- `POST /auth/login`
- `GET /users/me`
- `POST /tasks`
- `GET /tasks`
- `GET /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

## 通知戦略
- 毎日: 24h以内のタスクをスキャン
- 15分ごと: 1h以内のタスクをスキャン
- 送信はモック（console）
