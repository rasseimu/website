import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              研究室
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              最先端の研究を通じて、未来を創造する
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                研究室について
              </Link>
              <Link
                href="/research"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                研究内容
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              研究室について
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちの研究室では、革新的な研究を通じて社会に貢献することを目指しています。
              学生と教員が一体となって、新しい技術と知識の創造に取り組んでいます。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">最先端研究</h3>
              <p className="text-gray-600">
                最新の技術と手法を用いて、革新的な研究を推進しています。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">チームワーク</h3>
              <p className="text-gray-600">
                学生と教員が協力し合い、互いに学び合える環境を提供しています。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">社会貢献</h3>
              <p className="text-gray-600">
                研究成果を社会に還元し、人々の生活向上に貢献することを目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              研究分野
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              多様な研究分野で活発に活動しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">AI・機械学習</h3>
              <p className="text-gray-600">
                人工知能と機械学習の最新技術を研究し、実用的なアプリケーションの開発を行っています。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">データサイエンス</h3>
              <p className="text-gray-600">
                ビッグデータの分析と可視化技術を研究し、データ駆動型の意思決定を支援します。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">ソフトウェア工学</h3>
              <p className="text-gray-600">
                高品質なソフトウェア開発手法とツールの研究を行っています。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">ネットワーク</h3>
              <p className="text-gray-600">
                次世代ネットワーク技術とセキュリティの研究を推進しています。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">ヒューマンコンピュータインタラクション</h3>
              <p className="text-gray-600">
                人とコンピュータの自然なインタラクションを実現する技術を研究しています。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">IoT・組込みシステム</h3>
              <p className="text-gray-600">
                モノのインターネットと組込みシステムの研究開発を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              最新情報
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-gray-500 mb-2">2024年1月15日</div>
              <h3 className="text-lg font-semibold mb-3">論文が国際会議で発表されました</h3>
              <p className="text-gray-600">
                研究室の研究成果が国際会議で発表され、高い評価を受けました。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-gray-500 mb-2">2024年1月10日</div>
              <h3 className="text-lg font-semibold mb-3">新年度の学生募集を開始しました</h3>
              <p className="text-gray-600">
                2024年度の研究室配属希望者の募集を開始しました。興味のある方はお気軽にお問い合わせください。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-gray-500 mb-2">2024年1月5日</div>
              <h3 className="text-lg font-semibold mb-3">企業との共同研究が始まりました</h3>
              <p className="text-gray-600">
                大手IT企業との共同研究プロジェクトが開始されました。
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              すべてのニュースを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            一緒に研究しませんか？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            私たちの研究室では、意欲的な学生を歓迎しています。
            研究に興味のある方は、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
