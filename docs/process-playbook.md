# Process Playbook — ヒアリング→要件→仕様→設計→実装→テスト

## 目的
新しいプロダクト例（例: portfolio）を追加する際に、**同じプロセスで再現可能に**実行する。

---

## 1. ヒアリング
**Input**: プロダクトの目的/制約/非目標
**Output**: `docs/ai/40_hearing_inputs.md` に整理

質問例:
- 目的は？
- 期限/チーム規模は？
- 非目標は？
- 主要な品質特性は？

---

## 2. 要件定義
**Input**: ヒアリング結果
**Output**: `docs/ai/10_requirements.md` に反映

---

## 3. 仕様定義
**Input**: 要件定義
**Output**: `docs/ai/20_design.md` の仕様部分

---

## 4. 設計
**Input**: 仕様定義
**Output**: `docs/ai/20_design.md` / `docs/implementation/monolith.md`

---

## 5. 実装
**Input**: 設計
**Output**: `examples/<name>/` に実装

---

## 6. 単体テスト
**Input**: 実装
**Output**: `examples/<name>/tests/` に追加

---

## 運用
- 例ごとに `examples/<name>/` を作成
- 全ての段階で Input/Output を明記
