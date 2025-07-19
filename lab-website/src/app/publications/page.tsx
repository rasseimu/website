export default function PublicationsPage() {
  const publications = [
    {
      year: "2024",
      papers: [
        {
          title: "Advanced Deep Learning Techniques for Computer Vision",
          authors: "田中教授, 山田太郎, 鈴木花子",
          journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
          volume: "46",
          issue: "3",
          pages: "1234-1245",
          doi: "10.1109/TPAMI.2024.123456",
          status: "採録済み"
        },
        {
          title: "Natural Language Processing in Modern Dialogue Systems",
          authors: "佐藤准教授, 鈴木花子",
          journal: "Computational Linguistics",
          volume: "50",
          issue: "1",
          pages: "67-89",
          doi: "10.1162/CL_a_00456",
          status: "採録済み"
        }
      ]
    },
    {
      year: "2023",
      papers: [
        {
          title: "Deep Learning for Image Recognition: A Comprehensive Survey",
          authors: "田中教授, 山田太郎",
          conference: "International Conference on Computer Vision (ICCV)",
          pages: "2345-2356",
          doi: "10.1109/ICCV.2023.123456",
          status: "採録済み"
        },
        {
          title: "Natural Language Processing in Dialogue Systems",
          authors: "佐藤准教授, 鈴木花子",
          conference: "Annual Meeting of the Association for Computational Linguistics (ACL)",
          pages: "789-801",
          doi: "10.18653/v1/2023.acl-long.123",
          status: "採録済み"
        },
        {
          title: "Big Data Visualization Techniques for Scientific Discovery",
          authors: "佐藤准教授, 伊藤三郎",
          conference: "IEEE Visualization Conference (VIS)",
          pages: "456-467",
          doi: "10.1109/VIS.2023.123456",
          status: "採録済み"
        },
        {
          title: "IoT Security: Challenges and Solutions",
          authors: "田中教授, 渡辺四郎",
          journal: "IEEE Internet of Things Journal",
          volume: "10",
          issue: "8",
          pages: "6789-6801",
          doi: "10.1109/JIOT.2023.123456",
          status: "採録済み"
        }
      ]
    },
    {
      year: "2022",
      papers: [
        {
          title: "Machine Learning Applications in Software Engineering",
          authors: "佐藤准教授, 中村五郎",
          journal: "IEEE Transactions on Software Engineering",
          volume: "48",
          issue: "5",
          pages: "1234-1245",
          doi: "10.1109/TSE.2022.123456",
          status: "採録済み"
        },
        {
          title: "Human-Computer Interaction in Virtual Reality",
          authors: "佐藤准教授, 中村五郎",
          conference: "ACM CHI Conference on Human Factors in Computing Systems",
          pages: "234-245",
          doi: "10.1145/3491102.123456",
          status: "採録済み"
        }
      ]
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Best Paper Award",
      conference: "International Conference on Computer Vision (ICCV)",
      authors: "田中教授, 山田太郎"
    },
    {
      year: "2023",
      title: "Outstanding Research Award",
      organization: "情報処理学会",
      authors: "佐藤准教授"
    },
    {
      year: "2022",
      title: "Young Researcher Award",
      organization: "人工知能学会",
      authors: "山田太郎"
    }
  ];

  const patents = [
    {
      title: "画像認識システム及びその方法",
      inventors: "田中教授, 山田太郎",
      patentNumber: "特許第1234567号",
      filingDate: "2023年3月15日",
      publicationDate: "2024年1月20日",
      status: "登録済み"
    },
    {
      title: "自然言語処理装置",
      inventors: "佐藤准教授, 鈴木花子",
      patentNumber: "特許第1234568号",
      filingDate: "2023年6月10日",
      publicationDate: "2024年2月15日",
      status: "出願中"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            業績・論文
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            研究室の研究成果を論文、受賞、特許の形でご紹介します。
          </p>
        </div>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            論文・発表
          </h2>
          <div className="space-y-8">
            {publications.map((yearGroup, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">{yearGroup.year}年</h3>
                <div className="space-y-6">
                  {yearGroup.papers.map((paper, paperIndex) => (
                    <div key={paperIndex} className="border-l-4 border-blue-600 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {paper.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        <strong>著者:</strong> {paper.authors}
                      </p>
                      {paper.journal ? (
                        <p className="text-gray-600 text-sm mb-2">
                          <strong>ジャーナル:</strong> {paper.journal}, Vol.{paper.volume}, No.{paper.issue}, pp.{paper.pages}
                        </p>
                      ) : (
                        <p className="text-gray-600 text-sm mb-2">
                          <strong>会議:</strong> {paper.conference}, pp.{paper.pages}
                        </p>
                      )}
                      <p className="text-gray-600 text-sm mb-2">
                        <strong>DOI:</strong> <a href={`https://doi.org/${paper.doi}`} className="text-blue-600 hover:text-blue-800">{paper.doi}</a>
                      </p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        paper.status === '採録済み' ? 'bg-green-100 text-green-800' :
                        paper.status === '投稿中' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {paper.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            受賞・表彰
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {award.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        <strong>授与機関:</strong> {award.conference || award.organization}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        <strong>受賞者:</strong> {award.authors}
                      </p>
                    </div>
                    <span className="text-blue-600 font-bold text-lg">
                      {award.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            特許
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-6">
              {patents.map((patent, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {patent.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">
                        <strong>発明者:</strong> {patent.inventors}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <strong>特許番号:</strong> {patent.patentNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">
                        <strong>出願日:</strong> {patent.filingDate}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <strong>公開日:</strong> {patent.publicationDate}
                      </p>
                    </div>
                  </div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                    patent.status === '登録済み' ? 'bg-green-100 text-green-800' :
                    patent.status === '出願中' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {patent.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            研究インパクト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">論文数</h3>
              <p className="text-gray-600 text-sm">
                国際会議・ジャーナルでの発表論文数
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">被引用数</h3>
              <p className="text-gray-600 text-sm">
                論文の総被引用数
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">受賞数</h3>
              <p className="text-gray-600 text-sm">
                学会・会議での受賞数
              </p>
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            共同研究・論文執筆
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            私たちは国内外の研究者や企業と共同で研究を行い、
            高品質な論文を発表しています。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">国内大学</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">海外大学</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">研究機関</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold">企業</p>
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