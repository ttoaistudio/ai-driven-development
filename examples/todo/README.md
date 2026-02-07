# ToDo Example (Clean Architecture)

このフォルダ単体で **実行・テストが完結**するサンプルです。

## 目的
- Clean Architecture + TypeScript + Unit Test の最小実装を示す
- このリポジトリのプロセスを再現できる基準例にする

## 構成
```
examples/todo/
  src/
    domain/ application/ infrastructure/ interface/ shared/
  tests/
  package.json
  tsconfig.json
```

## セットアップ
```bash
cd examples/todo
npm install
```

## 起動
```bash
npm run dev
```

## テスト
```bash
npm test
```

## API（抜粋）
- POST /auth/signup
- POST /auth/login
- GET /users/me
- POST /tasks
- GET /tasks
- GET /tasks/:id
- POST /notifications/due-soon
- POST /notifications/due-daily

## 注意
- In‑memory リポジトリ（永続化なし）
- 通知は console 出力
