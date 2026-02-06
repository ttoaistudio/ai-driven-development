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
