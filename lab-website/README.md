# 研究室ウェブサイト

Next.jsで構築された研究室のウェブサイトです。研究室の活動、メンバー、研究成果を紹介するプロトタイプです。

## 機能

- **ホームページ**: 研究室の概要と最新情報
- **研究室について**: 理念、歴史、設備の紹介
- **メンバー紹介**: 教員、学生、卒業生の紹介
- **研究内容**: 研究分野とプロジェクトの詳細
- **業績・論文**: 論文、受賞、特許の一覧
- **お問い合わせ**: 問い合わせフォームと連絡先情報

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Geist (Google Fonts)

## セットアップ

### 前提条件

- Node.js 18.0以上
- npm

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### ビルド

```bash
# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start
```

## プロジェクト構造

```
src/
├── app/                    # App Router ページ
│   ├── page.tsx           # ホームページ
│   ├── about/             # 研究室について
│   ├── members/           # メンバー紹介
│   ├── research/          # 研究内容
│   ├── publications/      # 業績・論文
│   └── contact/           # お問い合わせ
├── components/            # 再利用可能なコンポーネント
│   ├── Navigation.tsx     # ナビゲーション
│   └── Footer.tsx         # フッター
└── globals.css           # グローバルスタイル
```

## カスタマイズ

### 研究室情報の更新

各ページのコンテンツは、対応するファイルを編集することで更新できます：

- 研究室情報: `src/app/about/page.tsx`
- メンバー情報: `src/app/members/page.tsx`
- 研究内容: `src/app/research/page.tsx`
- 業績・論文: `src/app/publications/page.tsx`

### スタイルの変更

Tailwind CSSを使用しているため、クラス名を変更することでスタイルを調整できます。また、`src/app/globals.css`でカスタムスタイルを追加することも可能です。

### お問い合わせフォーム

現在はデモ用の実装になっています。実際のメール送信機能を実装するには、以下のような方法があります：

1. **API Routes**: Next.jsのAPI Routesを使用
2. **外部サービス**: SendGrid、Mailgunなどのメールサービス
3. **フォームサービス**: Formspree、Netlify Formsなど

## デプロイ

### Vercel（推奨）

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

### その他のプラットフォーム

- **Netlify**: `npm run build`でビルド後、`out`ディレクトリをデプロイ
- **AWS Amplify**: GitHubリポジトリと連携して自動デプロイ
- **自前サーバー**: `npm run build`でビルド後、静的ファイルをサーバーに配置

## 今後の拡張予定

- [ ] ブログ機能の追加
- [ ] 研究プロジェクトの詳細ページ
- [ ] 画像ギャラリー
- [ ] 多言語対応
- [ ] SEO最適化
- [ ] パフォーマンス改善

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## お問い合わせ

プロジェクトについてのご質問やご提案がございましたら、お気軽にお問い合わせください。
