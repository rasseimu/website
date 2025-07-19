export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">研究室</h3>
            <p className="text-gray-300 text-sm">
              最先端の研究を通じて、社会に貢献することを目指しています。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>〒000-0000</p>
              <p>東京都○○区○○ 1-1-1</p>
              <p>○○大学 ○○学部</p>
              <p>Email: lab@example.ac.jp</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <a href="/about" className="block hover:text-white transition-colors">
                研究室について
              </a>
              <a href="/members" className="block hover:text-white transition-colors">
                メンバー
              </a>
              <a href="/research" className="block hover:text-white transition-colors">
                研究内容
              </a>
              <a href="/publications" className="block hover:text-white transition-colors">
                業績・論文
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 研究室. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 