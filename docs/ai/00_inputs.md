# 00_inputs — 下流（理想実装）から逆算した必要Input

## 目的
「**同じ構成・同じ命名・同じクラス/メソッド**」で再現できる実装を実現するため、
**理想実装（下流）から必要Inputを逆算**して固定する。

---

## 理想実装（ゴール）
- **クリーンアーキテクチャ**を基盤とする
- レイヤー固定：**Domain / Application / Infrastructure / Interface**
- 依存方向：外側 → 内側のみ
- ToDoの基本機能を過不足なく表現

---

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
- Notification: daily + near‑due

---

## Input/Output 逆算表

### A. 実装 → 設計書
| 実装のInput | 設計書のOutput | 意図 |
|---|---|---|
| Clean Architecture遵守 | レイヤー/依存/命名規約の明文化 | 実装が必然化される |

### B. 設計書 → 仕様書
| 設計書のInput | 仕様書のOutput | 意図 |
|---|---|---|
| レイヤー責務/構成 | 必要な機能定義 | 実装がブレない |

### C. 仕様書 → 要件定義
| 仕様書のInput | 要件定義のOutput | 意図 |
|---|---|---|
| 機能要件/非機能要件 | 制約/優先/非目標 | 過剰設計を防ぐ |

### D. 要件定義 → ヒアリングInput
| 要件定義のInput | ヒアリングInput | 意図 |
|---|---|---|
| 制約/優先/非目標 | ヒアリング項目一覧 | 逆算を成立させる |

---

このInputsにより、**誰が実装しても同じ構成/命名/実装粒度**になる。
