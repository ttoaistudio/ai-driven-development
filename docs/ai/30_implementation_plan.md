# 30_implementation_plan — 再現性のための実装計画

## Step 1: ひな形を固定
- ディレクトリ構成を作成
- 命名規約を明文化

## Step 2: Domain
- Entity / ValueObject を作る
- Domain Service（必要最小限）

## Step 3: Application
- UseCase を作る
- DTO を定義する
- Repository Port（Interface）を定義

## Step 4: Infrastructure
- Repository実装（DB）
- Notification実装

## Step 5: Interface
- HTTP Controller
- Presenter

## Step 6: バリデーション
- 依存方向が崩れていないか確認
- 命名規約と構成の一致を確認

---

## 実装 → テスト
| 実装のInput | テストのOutput | 意図 |
|---|---|---|
| UseCase | 成功/失敗/境界のテスト | 仕様の再現性 |
| Controller | 入力バリデーション | I/Oの正当性 |
| DTO | 変換テスト | 型/命名の一致 |
