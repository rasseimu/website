'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 実際の実装では、ここでAPIエンドポイントにデータを送信します
    // 今回はデモ用にタイマーでシミュレートします
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            研究室についてのご質問、見学希望、共同研究のご相談など、
            お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              お問い合わせフォーム
            </h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                お問い合わせを送信しました。ありがとうございます。
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                送信に失敗しました。もう一度お試しください。
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  所属・組織
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="○○大学 ○○学部"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  件名 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="研究室見学">研究室見学</option>
                  <option value="共同研究">共同研究</option>
                  <option value="学生募集">学生募集</option>
                  <option value="論文・発表">論文・発表</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="お問い合わせ内容を詳しくお書きください。"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                連絡先情報
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-3 mt-1">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">住所</h3>
                    <p className="text-gray-600">
                      〒000-0000<br />
                      東京都○○区○○ 1-1-1<br />
                      ○○大学 ○○学部 ○○棟 3階
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-3 mt-1">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">メール</h3>
                    <a
                      href="mailto:lab@example.ac.jp"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      lab@example.ac.jp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-3 mt-1">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">電話</h3>
                    <a
                      href="tel:+81-3-1234-5678"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      03-1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-3 mt-1">🕒</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">受付時間</h3>
                    <p className="text-gray-600">
                      平日 9:00-17:00<br />
                      （土日祝日・年末年始を除く）
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                よくある質問
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Q: 研究室見学は可能ですか？
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A: はい、事前にご連絡いただければ見学可能です。研究内容や設備について詳しくご説明いたします。
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Q: 共同研究の相談はできますか？
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A: 企業や他大学との共同研究を歓迎しています。研究分野やプロジェクトについてご相談ください。
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Q: 学生の募集は行っていますか？
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A: 意欲的な学生を常時募集しています。研究に興味のある方はお気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                アクセス
              </h2>
              <p className="text-blue-800 mb-4">
                最寄り駅からのアクセス方法をご案内します。
              </p>
              <div className="space-y-2 text-blue-800 text-sm">
                <p><strong>電車:</strong> ○○線 ○○駅から徒歩10分</p>
                <p><strong>バス:</strong> ○○バス停から徒歩5分</p>
                <p><strong>車:</strong> ○○ICから車で15分</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 