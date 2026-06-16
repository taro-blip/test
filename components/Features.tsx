const features = [
  {
    icon: "⚡",
    title: "高速パフォーマンス",
    description: "Next.js の最適化により、超高速なページ読み込みを実現。ユーザー体験を損ないません。",
  },
  {
    icon: "🎨",
    title: "美しいデザイン",
    description: "Tailwind CSS で構築された洗練された UI。どんなデバイスでも完璧に表示されます。",
  },
  {
    icon: "🔒",
    title: "セキュア",
    description: "最新のセキュリティ標準に準拠。大切なデータを安全に守ります。",
  },
  {
    icon: "📱",
    title: "レスポンシブ対応",
    description: "スマートフォンからデスクトップまで、あらゆる画面サイズに対応しています。",
  },
  {
    icon: "🚀",
    title: "簡単デプロイ",
    description: "Vercel との完璧な統合により、ワンクリックで本番環境へデプロイできます。",
  },
  {
    icon: "🛠",
    title: "カスタマイズ自在",
    description: "柔軟な設計で、あなたのニーズに合わせて自由にカスタマイズできます。",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">選ばれる理由</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            私たちのプロダクトが多くの開発者に選ばれる6つの理由をご紹介します。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
