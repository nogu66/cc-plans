# cc-plans

`cc-plans` は、プラン駆動のエージェント／テンプレート開発を下支えする CLI ライブラリのための TypeScript プロジェクト雛形です。`npx cc-plans@latest` のように実行できる CLI を前提としており、テンプレートやドキュメント、ワークフローファイルをまとめて配布できるように構成されています。

## セットアップ

```bash
npm install
npm run build
```

ビルド後は以下のようにローカルで CLI を試せます。

```bash
node dist/cli.js --help
```

## プロジェクト構成

- `.github/workflows/` — CI や公開関連のワークフローを置く場所
- `.kiro/specs/` — 設計仕様ドキュメントの置き場所
- `docs/` — ユーザードキュメントとガイド
- `templates/` — CLI が配布するテンプレート資産
- `src/` — TypeScript 製の CLI 実装
- `test/` — 実装をカバーするテストコード

## 次のステップ

- ワークフローやドキュメントの中身を具体化する
- CLI 機能を `src/` 以下に実装する
- テストを整備し、公開用の CI を構築する
# cc-plans
