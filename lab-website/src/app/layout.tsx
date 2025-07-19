// Next.jsのメタデータ型をインポート
import type { Metadata } from "next";
// Google FontsからGeistフォントファミリーをインポート
import { Geist, Geist_Mono } from "next/font/google";
// グローバルCSSスタイルをインポート
import "./globals.css";
// ナビゲーションコンポーネントをインポート
import Navigation from "@/components/Navigation";
// フッターコンポーネントをインポート
import Footer from "@/components/Footer";

// Geist Sansフォントの設定
// variable: CSS変数名を指定
// subsets: 使用する文字セットを指定（ラテン文字）
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Monoフォントの設定（等幅フォント）
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ページのメタデータを定義
// SEOやブラウザタブに表示される情報を設定
export const metadata: Metadata = {
  title: "研究室ウェブサイト",
  description: "研究室の活動、メンバー、研究成果を紹介するウェブサイトです",
};

// ルートレイアウトコンポーネント
// すべてのページで共通して使用されるレイアウト構造を定義
export default function RootLayout({
  children, // 各ページのコンテンツがここに挿入される
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML要素の設定
    <html lang="ja">
      {/* body要素の設定 */}
      <body
        // フォント変数とアンチエイリアスを適用
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ナビゲーションバーを配置 */}
        <Navigation />
        {/* メインコンテンツエリア */}
        <main className="pt-16">
          {/* 各ページのコンテンツがここに表示される */}
          {children}
        </main>
        {/* フッターを配置 */}
        <Footer />
      </body>
    </html>
  );
}
