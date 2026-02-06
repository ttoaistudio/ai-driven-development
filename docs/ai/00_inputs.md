# 00_inputs — 下流（理想実装）から逆算した必要Input

## 目的
「**同じ構成・同じ命名・同じクラス/メソッド**」で再現できる実装を実現するため、
**理想実装（下流）から必要Inputを逆算**して固定する。

## 理想実装（ゴール）
- **クリーンアーキテクチャ**を基盤とする
- レイヤー固定：**Domain / Application / Infrastructure / Interface**
- 依存方向：外側 → 内側のみ
- ToDoの基本機能を過不足なく表現

## 必要Input（逆算）
### 1. 構成Input（必須）
- リポジトリ構成（固定）：
  - `src/domain`, `src/application`, `src/infrastructure`, `src/interface`
- モジュール境界：
  - `task`, `user`, `auth`, `notification`
- 命名規約：
  - UseCase = `*UseCase`
  - Repository = `*Repository`
  - Entity = `*Entity`
  - DTO = `*DTO`

### 2. 責務Input（必須）
- **Domain**：Entity / ValueObject / Domain Service
- **Application**：UseCase / DTO / Port(Interface)
- **Infrastructure**：DB実装 / External API実装
- **Interface**：HTTP Controller / Presenter

### 3. 依存Input（必須）
- 依存は外→内のみ
- Domainは他層に依存しない
- ApplicationはDomainにのみ依存

### 4. 機能Input（必須）
- User: signup/login/profile
- Task: CRUD/status/due/tags/notes
- Notification: daily + near-due

---

このInputsにより、**誰が実装しても同じ構成/命名/実装粒度**になる。
