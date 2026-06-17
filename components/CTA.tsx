export default function CTA() {
  return (
    <section id="cta" className="bg-[#080808] py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="border border-[#C9A84C]/20 p-16 sm:p-24 text-center relative overflow-hidden">
          {/* 背景グロー */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent pointer-events-none" />

          <p className="text-[#C9A84C] text-xs font-light tracking-[0.3em] uppercase mb-6 relative">
            Get Started
          </p>
          <h2 className="text-4xl sm:text-6xl font-thin text-white tracking-tight mb-6 relative">
            今すぐ始めましょう
          </h2>
          <p className="text-white/30 font-light text-base max-w-md mx-auto mb-12 leading-relaxed relative">
            クレジットカード不要。14日間の無料トライアルで、
            すべての機能をお試しいただけます。
          </p>
          <a
            href="#"
            className="relative inline-flex items-center gap-3 bg-[#C9A84C] text-black font-light text-sm tracking-[0.15em] px-12 py-5 hover:bg-[#E8C97A] transition-all duration-300"
          >
            無料トライアルを始める
            <span className="text-black/60">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
