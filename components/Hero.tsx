export default function Hero() {
  return (
    <section className="relative bg-[#080808] text-white min-h-screen flex items-center px-6 overflow-hidden">
      {/* 背景の装飾ライン */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A84C]/10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#C9A84C]/5" />
      </div>

      <div className="relative max-w-5xl mx-auto w-full pt-32 pb-40">
        <p className="text-[#C9A84C] text-xs font-light tracking-[0.3em] uppercase mb-8">
          Next.js Demo
        </p>
        <h1 className="text-6xl sm:text-8xl font-thin leading-[1.05] tracking-tight text-white mb-8">
          Think Different.
          <br />
          <span className="text-[#C9A84C]">Build Better.</span>
        </h1>
        <p className="text-white/40 text-lg font-light max-w-lg leading-relaxed mb-14 tracking-wide">
          シンプルさの中に、すべてがある。
          <br />
          洗練されたプロダクトで、あなたのビジョンを現実に。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#features"
            className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] font-light text-sm tracking-[0.15em] px-8 py-4 hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
          >
            探索する
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 border border-white/20 text-white/60 font-light text-sm tracking-[0.15em] px-8 py-4 hover:border-white/60 hover:text-white transition-all duration-300"
          >
            始める
          </a>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs tracking-[0.2em] font-light">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
