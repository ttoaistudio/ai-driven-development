# モノリス実装ガイド（クリーンアーキテクチャ版）

## 目的
誰が実装しても**同じ構成・同じ命名・同じクラス/メソッド**になること。

## ルール
- レイヤー固定：Domain / Application / Infrastructure / Interface
- 依存方向：外 → 内 のみ

## 構成（固定）
```
src/
  domain/
    task/  user/  auth/  notification/
  application/
    task/  user/  auth/  notification/
  infrastructure/
    persistence/  notification/
  interface/
    http/  presenter/
```

## 命名規約（固定）
- UseCase: `*UseCase`
- Entity: `*Entity`
- Repository: `*Repository`
- DTO: `*DTO`

## 例：Task作成
- Domain: `TaskEntity`
- Application: `CreateTaskUseCase`
- Port: `TaskRepository`
- Infrastructure: `PostgresTaskRepository`
- Interface: `CreateTaskController`

## これがベストな理由
- 再現性が最大
- 設計思想が明確
- AI実装でもブレない
