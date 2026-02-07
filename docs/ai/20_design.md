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

---

## 設計 → 仕様
| 設計のInput | 仕様のOutput | 意図 |
|---|---|---|
| レイヤー責務 | API/機能仕様 | 実装が一致する |
| 依存方向 | モジュール境界 | 変更影響を限定 |

---

## Value（LP）デザイン指針
- 1ページ完結のLP構成
- セクション順: Hero → Features → Demo → How → Proof/Benefits → Pricing → FAQ → CTA → Footer
- CTAは「登録」に統一（GoogleログインUI）
- デモは「質問 → 生成 → 市場価値」の流れを可視化
- プレミアム感のあるブラック系、アクセントは淡いブルー
- テーマ切替はUIで表現（任意）
