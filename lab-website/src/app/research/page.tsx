export default function ResearchPage() {
  const researchAreas = [
    {
      title: "AI・機械学習",
      description: "人工知能と機械学習の最新技術を研究し、実用的なアプリケーションの開発を行っています。",
      projects: [
        {
          name: "深層学習による画像認識システム",
          description: "CNNとTransformerを組み合わせた高精度な画像認識システムの開発",
          status: "進行中",
          members: ["田中教授", "山田太郎", "鈴木花子"]
        },
        {
          name: "自然言語処理による対話システム",
          description: "大規模言語モデルを用いた自然な対話システムの構築",
          status: "進行中",
          members: ["佐藤准教授", "鈴木花子"]
        },
        {
          name: "強化学習による制御システム",
          description: "ロボット制御への強化学習の応用研究",
          status: "計画中",
          members: ["田中教授", "高橋次郎"]
        }
      ]
    },
    {
      title: "データサイエンス",
      description: "ビッグデータの分析と可視化技術を研究し、データ駆動型の意思決定を支援します。",
      projects: [
        {
          name: "ビッグデータ可視化システム",
          description: "大規模データセットのインタラクティブな可視化ツールの開発",
          status: "進行中",
          members: ["佐藤准教授", "伊藤三郎"]
        },
        {
          name: "時系列データ分析",
          description: "センサーデータの時系列分析による異常検知システム",
          status: "進行中",
          members: ["田中教授", "渡辺四郎"]
        }
      ]
    },
    {
      title: "ソフトウェア工学",
      description: "高品質なソフトウェア開発手法とツールの研究を行っています。",
      projects: [
        {
          name: "自動テスト生成ツール",
          description: "AIを活用した自動テストケース生成システムの開発",
          status: "進行中",
          members: ["佐藤准教授", "中村五郎"]
        },
        {
          name: "コード品質分析ツール",
          description: "静的解析によるコード品質の自動評価システム",
          status: "計画中",
          members: ["佐藤准教授"]
        }
      ]
    },
    {
      title: "ネットワーク・セキュリティ",
      description: "次世代ネットワーク技術とセキュリティの研究を推進しています。",
      projects: [
        {
          name: "5G/6Gネットワーク最適化",
          description: "次世代移動通信ネットワークの性能最適化",
          status: "進行中",
          members: ["田中教授", "渡辺四郎"]
        },
        {
          name: "ブロックチェーンセキュリティ",
          description: "ブロックチェーン技術のセキュリティ強化手法の研究",
          status: "計画中",
          members: ["佐藤准教授"]
        }
      ]
    },
    {
      title: "ヒューマンコンピュータインタラクション",
      description: "人とコンピュータの自然なインタラクションを実現する技術を研究しています。",
      projects: [
        {
          name: "VR/ARインターフェース",
          description: "仮想現実・拡張現実技術を用いた直感的なインターフェース",
          status: "進行中",
          members: ["佐藤准教授", "中村五郎"]
        },
        {
          name: "音声対話システム",
          description: "自然な音声対話を実現するシステムの開発",
          status: "計画中",
          members: ["田中教授", "鈴木花子"]
        }
      ]
    },
    {
      title: "IoT・組込みシステム",
      description: "モノのインターネットと組込みシステムの研究開発を行っています。",
      projects: [
        {
          name: "スマートホームシステム",
          description: "IoTデバイスを活用した自動化された住宅システム",
          status: "進行中",
          members: ["田中教授", "高橋次郎"]
        },
        {
          name: "産業用IoTプラットフォーム",
          description: "製造業向けのIoTデータ収集・分析プラットフォーム",
          status: "計画中",
          members: ["佐藤准教授", "伊藤三郎"]
        }
      ]
    }
  ];

  const publications = [
    {
      title: "Deep Learning for Image Recognition: A Comprehensive Survey",
      authors: "田中教授, 山田太郎",
      conference: "International Conference on Computer Vision (ICCV)",
      year: "2023",
      status: "採録済み"
    },
    {
      title: "Natural Language Processing in Dialogue Systems",
      authors: "佐藤准教授, 鈴木花子",
      conference: "Annual Meeting of the Association for Computational Linguistics (ACL)",
      year: "2023",
      status: "採録済み"
    },
    {
      title: "Big Data Visualization Techniques for Scientific Discovery",
      authors: "佐藤准教授, 伊藤三郎",
      conference: "IEEE Visualization Conference (VIS)",
      year: "2023",
      status: "投稿中"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            研究内容
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちの研究室で取り組んでいる研究分野とプロジェクトをご紹介します。
          </p>
        </div>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            研究分野
          </h2>
          <div className="space-y-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">プロジェクト</h4>
                  {area.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-gray-900">{project.name}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === '進行中' ? 'bg-green-100 text-green-800' :
                          project.status === '計画中' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                      <p className="text-gray-500 text-xs">
                        メンバー: {project.members.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            主要な論文・発表
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>著者:</strong> {pub.authors}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>会議:</strong> {pub.conference}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm">
                      <strong>年:</strong> {pub.year}
                    </p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      pub.status === '採録済み' ? 'bg-green-100 text-green-800' :
                      pub.status === '投稿中' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/publications"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                すべての論文を見る →
              </a>
            </div>
          </div>
        </section>

        {/* Research Environment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            研究環境
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">高性能計算環境</h3>
              <p className="text-gray-600">
                GPUクラスターと高性能ワークステーションを完備し、
                大規模な機械学習実験が可能です。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">実験設備</h3>
              <p className="text-gray-600">
                IoTデバイス、センサー、VR/AR機器など、
                様々な実験設備を利用できます。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">クラウド環境</h3>
              <p className="text-gray-600">
                AWS、Google Cloudなどのクラウドサービスを活用し、
                スケーラブルな研究環境を提供しています。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">データベース</h3>
              <p className="text-gray-600">
                研究用の大規模データセットとデータベースを整備し、
                様々な研究に活用できます。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">産学連携</h3>
              <p className="text-gray-600">
                企業との共同研究プロジェクトを通じて、
                実践的な研究開発を行っています。
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">国際交流</h3>
              <p className="text-gray-600">
                海外の研究機関との共同研究や、
                国際会議での発表機会を提供しています。
              </p>
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            共同研究・協力機関
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            私たちは様々な企業や研究機関と連携して研究を進めています。
            共同研究にご興味のある方はお気軽にお問い合わせください。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">大手IT企業</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">スタートアップ</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">研究機関</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">政府機関</p>
            </div>
          </div>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            共同研究についてお問い合わせ
          </a>
        </section>
      </div>
    </div>
  );
} 