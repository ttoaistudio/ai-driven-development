# examples/todo/AGENTS.md — 実装指示

## 目的
- ToDoアプリ例を **Clean Architecture** で再現する

## ルール
- レイヤー: Domain / Application / Infrastructure / Interface
- 依存方向: 外 → 内 のみ
- 命名規約: `*UseCase` / `*Entity` / `*Repository` / `*DTO`
- TypeScriptは `any` 禁止（暗黙含む）
- コメント/テスト名は日本語
