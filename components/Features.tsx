const features = [
  {
    number: "01",
    title: "高速パフォーマンス",
    description: "Next.js の最適化により、超高速なページ読み込みを実現。ユーザー体験を損ないません。",
  },
  {
    number: "02",
    title: "美しいデザイン",
    description: "細部まで磨き上げられた UI。どんなデバイスでも完璧に表示されます。",
  },
  {
    number: "03",
    title: "セキュア",
    description: "最新のセキュリティ標準に準拠。大切なデータを確実に守ります。",
  },
  {
    number: "04",
    title: "レスポンシブ対応",
    description: "スマートフォンからデスクトップまで、あらゆる画面サイズに対応しています。",
  },
  {
    number: "05",
    title: "簡単デプロイ",
    description: "ワンクリックで本番環境へ。エンジニアの時間をより価値ある作業に。",
  },
  {
    number: "06",
    title: "カスタマイズ自在",
    description: "柔軟な設計で、あなたのニーズに合わせて自由に拡張できます。",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#080808] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <p className="text-[#C9A84C] text-xs font-light tracking-[0.3em] uppercase mb-4">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-thin text-white tracking-tight">
            選ばれる理由
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((f) => (
            <div
              key={f.number}
              className="bg-[#080808] p-8 group hover:bg-[#0f0f0f] transition-colors duration-300"
            >
              <p className="text-[#C9A84C]/40 text-xs font-light tracking-[0.3em] mb-6 group-hover:text-[#C9A84C]/80 transition-colors">
                {f.number}
              </p>
              <h3 className="text-white font-light text-lg mb-3 tracking-wide">
                {f.title}
              </h3>
              <p className="text-white/30 text-sm font-light leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
