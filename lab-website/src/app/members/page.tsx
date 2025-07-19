export default function MembersPage() {
  const faculty = [
    {
      name: "田中 教授",
      title: "教授",
      research: "AI・機械学習、データサイエンス",
      email: "tanaka@example.ac.jp",
      image: "/api/placeholder/200/200",
      description: "人工知能と機械学習の専門家。20年以上の研究経験を持ち、数多くの国際会議で発表実績があります。"
    },
    {
      name: "佐藤 准教授",
      title: "准教授", 
      research: "ソフトウェア工学、ヒューマンコンピュータインタラクション",
      email: "sato@example.ac.jp",
      image: "/api/placeholder/200/200",
      description: "ソフトウェア開発手法とユーザビリティの研究を行っています。"
    }
  ];

  const students = [
    {
      name: "山田 太郎",
      title: "博士課程3年",
      research: "深層学習による画像認識",
      email: "yamada@example.ac.jp",
      image: "/api/placeholder/200/200",
      description: "コンピュータビジョンと深層学習の研究に取り組んでいます。"
    },
    {
      name: "鈴木 花子",
      title: "修士課程2年",
      research: "自然言語処理",
      email: "suzuki@example.ac.jp",
      image: "/api/placeholder/200/200",
      description: "自然言語処理技術を用いた対話システムの開発を行っています。"
    },
    {
      name: "高橋 次郎",
      title: "修士課程1年",
      research: "IoT・組込みシステム",
      email: "takahashi@example.ac.jp",
      image: "/api/placeholder/200/200",
      description: "IoTデバイスとクラウド連携システムの研究に取り組んでいます。"
    },
    {
      name: "伊藤 三郎",
      title: "学部4年",
      research: "データ可視化",
      email: "ito@example.ac.jp",
      image: "/api/placeholder/200/200",
      description: "ビッグデータの可視化技術について研究しています。"
    },
    {
      name: "渡辺 四郎",
      title: "学部4年",
      research: "ネットワークセキュリティ",
      email: "watanabe@example.ac.jp",
      image: "/api/placeholder/200/200",
      description: "次世代ネットワークのセキュリティ技術を研究しています。"
    },
    {
      name: "中村 五郎",
      title: "学部4年",
      research: "モバイルアプリケーション",
      email: "nakamura@example.ac.jp",
      image: "/api/placeholder/200/200",
      description: "スマートフォンアプリケーションの開発とユーザビリティの研究を行っています。"
    }
  ];

  const alumni = [
    {
      name: "小林 六郎",
      title: "2023年度修了",
      current: "大手IT企業",
      research: "機械学習による予測システム"
    },
    {
      name: "加藤 七郎",
      title: "2022年度修了", 
      current: "スタートアップ企業",
      research: "ブロックチェーン技術"
    },
    {
      name: "吉田 八郎",
      title: "2021年度修了",
      current: "研究機関",
      research: "量子コンピューティング"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            メンバー紹介
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            研究室で活躍する教員と学生をご紹介します。
          </p>
        </div>

        {/* Faculty Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            教員
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.research}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.description}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Students Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            学生
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mx-auto mb-3">
                    {student.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {student.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{student.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{student.research}</p>
                  <p className="text-gray-600 text-xs mb-3">{student.description}</p>
                  <a
                    href={`mailto:${student.email}`}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                  >
                    {student.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            卒業生・修了生
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumni.map((alumnus, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {alumnus.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{alumnus.title}</p>
                  <p className="text-gray-600 text-sm mb-2">現在: {alumnus.current}</p>
                  <p className="text-gray-600 text-sm">{alumnus.research}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            一緒に研究しませんか？
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            私たちの研究室では、意欲的な学生を歓迎しています。
            研究に興味のある方は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              研究室について詳しく
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 