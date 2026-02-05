# AI-Driven Development — ToDoモノリス

このリポジトリは、**ToDoアプリをモノリスでどう実装すべきか**を示す「設計〜実装ガイド」と、
その結論に至る**AI向けドキュメンテーション**をまとめたものです。

## 中身
- `AGENTS.md` — AI向けの貢献ガイド
- `docs/ai/` — 入力 → 要件 → 設計 → 実装計画
- `docs/implementation/` — モノリス実装の指針
- `src/` — Node/Expressの最小実装サンプル

## クイックスタート（サンプルAPI起動）
```bash
npm install
npm run dev
```

## サンプルAPI
- `POST /auth/signup`
- `POST /auth/login`
- `GET /users/me`
- `POST /tasks`
- `GET /tasks`
- `GET /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

> ※ サンプルコードは「概念を伝えるための最小実装」です。

詳しくは `docs/ai/` と `docs/implementation/` を参照してください。
