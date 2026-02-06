# 10_requirements — 逆算要件（再現性重視）

## 機能要件
- User: signup / login / profile
- Task: CRUD / status / due / tags / notes
- Notification: daily + near‑due

## 実装再現性の要件（重要）
- **同じディレクトリ構成**で必ず実装する
- **同じ命名規約**を必ず使う
- **同じ層分割**（Domain/App/Infra/Interface）を必ず守る
- **依存方向**を必ず守る（外→内）

## 非機能要件
- 単一アプリ / 単一DB
- 説明可能性（AIが判断できる材料が揃う）

## スコープ外
- マイクロサービス化
- 分散トレーシングなどの重い運用
