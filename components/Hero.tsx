export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-wide">
          Next.js Demo
        </span>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          アイデアを、<br className="hidden sm:block" />
          世界へ届けよう
        </h1>
        <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
          シンプルで美しいプロダクトで、あなたのビジネスを次のステージへ。
          今すぐ始めて、可能性を広げましょう。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition"
          >
            機能を見る
          </a>
          <a
            href="#cta"
            className="border border-white/60 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
          >
            無料で始める
          </a>
        </div>
      </div>
    </section>
  );
}
