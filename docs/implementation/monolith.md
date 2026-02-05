# モノリス実装ガイド — ToDoアプリ

## モジュール構成（例）
```
/ src
  / auth
  / users
  / tasks
  / notifications
  / shared
```

## データスキーマ（SQLイメージ）
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

## コアフロー
### 認証
- サインアップ: パスワードハッシュ → 作成 → トークン返却
- ログイン: パスワード検証 → トークン返却

### タスク
- CRUD（オーナーシップチェック）
- status/due_at でフィルタ

### 通知（同一プロセス内）
- 2種類のジョブ
  - 日次: 24h以内
  - 15分: 1h以内
- 送信はモック（console）

## なぜこれが正解か
- Inputで求められる **スピード / シンプルさ / 小規模運用** に合致

## 将来の分割ポイント（任意）
- 通知は先に切り出せる
- それでもまずはモノリスで十分
