# 20_design — 理想実装（クリーンアーキテクチャ）

## レイヤー
- **Domain**：Entity / ValueObject / Domain Service
- **Application**：UseCase / DTO / Port (Interface)
- **Infrastructure**：Repository実装 / 外部API / DB
- **Interface**：Controller / Presenter / Routing

## 依存方向
- Interface → Application → Domain
- Infrastructure → Application → Domain
- Domainはどこにも依存しない

## 固定すべき構成
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

## なぜこの設計が「ベスト」か
- 変更点の影響範囲が明確
- 依存方向が固定され、実装がブレない
- AI生成でも再現性が高い

## Skill（awesome‑agent‑skillsより）
- AIに「レシピカード」を渡す概念
- **本リポジトリはSkill化できる設計ドキュメント**として機能
