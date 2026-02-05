# 30_implementation_plan — 実装計画（モノリス）

## Step 1: セットアップ
- Node + Express
- 環境変数 / ログ / Lint

## Step 2: コアモジュール
- `auth`（サインアップ/ログイン）
- `users`（プロフィール）
- `tasks`（CRUD）
- `notifications`（スケジューラ）

## Step 3: データ層
- users / tasks / notification_jobs
- インデックス: `tasks.user_id`, `tasks.due_at`

## Step 4: API層
- ルーティング
- 入力バリデーション
- エラーハンドリング

## Step 5: 通知
- 日次 & 15分スキャン
- 送信はスタブ

## Step 6: 観測性
- 構造化ログ
- 基本メトリクス（プレースホルダ）

## Done条件
- CRUDが一通り動作
- 期限リマインドが動く
- ドキュメントが一致している
