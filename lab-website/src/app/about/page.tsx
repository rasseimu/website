export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            研究室について
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちの研究室の理念、歴史、そして目指す未来についてご紹介します。
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                研究室の理念
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                私たちの研究室は、「技術を通じて人々の生活を豊かにする」という理念のもと、
                最先端の研究開発に取り組んでいます。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                学生と教員が一体となって、新しい技術の創造と実用化を目指し、
                社会に貢献できる人材の育成を行っています。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-600 text-2xl mr-3">🎯</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">革新的な研究</h3>
                    <p className="text-gray-600">既存の枠にとらわれない新しいアプローチ</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 text-2xl mr-3">🤝</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">協働学習</h3>
                    <p className="text-gray-600">学生と教員が互いに学び合う環境</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 text-2xl mr-3">🌱</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">人材育成</h3>
                    <p className="text-gray-600">次世代を担う優秀な人材の育成</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">研究室の特徴</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">少人数制の指導体制</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">企業との共同研究プロジェクト</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">国際会議での発表機会</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">最新の研究設備と環境</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">産学連携による実践的な研究</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            研究室の歴史
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-8 relative z-10">
                  2020
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">研究室設立</h3>
                  <p className="text-gray-600">
                    新しい研究分野の開拓を目指して研究室を設立しました。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-8 relative z-10">
                  2021
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">初の国際会議発表</h3>
                  <p className="text-gray-600">
                    研究室の研究成果が国際会議で発表され、高い評価を受けました。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-8 relative z-10">
                  2022
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">企業との共同研究開始</h3>
                  <p className="text-gray-600">
                    大手IT企業との共同研究プロジェクトが開始されました。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-8 relative z-10">
                  2023
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">研究設備の拡充</h3>
                  <p className="text-gray-600">
                    最新の研究設備を導入し、研究環境を大幅に改善しました。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-8 relative z-10">
                  2024
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">新たな研究分野の開拓</h3>
                  <p className="text-gray-600">
                    AI・機械学習分野での新たな研究プロジェクトを開始しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            研究設備・環境
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">高性能コンピュータ</h3>
              <p className="text-gray-600">
                最新のGPUを搭載した高性能ワークステーションを完備し、
                大規模な計算処理や機械学習の実験が可能です。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">実験設備</h3>
              <p className="text-gray-600">
                各種センサーやIoTデバイス、実験用のハードウェアを完備し、
                実践的な研究開発が行えます。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">図書・資料</h3>
              <p className="text-gray-600">
                最新の研究論文や技術書を豊富に所蔵し、
                研究に必要な情報にいつでもアクセスできます。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">研究スペース</h3>
              <p className="text-gray-600">
                広々とした研究スペースで、学生が快適に研究に集中できる環境を提供しています。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">☕</div>
              <h3 className="text-xl font-semibold mb-3">休憩スペース</h3>
              <p className="text-gray-600">
                リラックスできる休憩スペースで、研究の合間に一息つくことができます。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">ネットワーク環境</h3>
              <p className="text-gray-600">
                高速インターネット接続とセキュアなネットワーク環境を整備しています。
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            研究室へのお問い合わせ
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            研究室について詳しく知りたい方、見学希望の方、
            研究に興味のある方はお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              お問い合わせフォーム
            </a>
            <a
              href="mailto:lab@example.ac.jp"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              メールでお問い合わせ
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 