export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-[#C9A84C] font-thin text-lg tracking-[0.2em]">
          DEMO APP
        </div>
        <div className="flex gap-8 text-xs font-light tracking-[0.15em]">
          <a href="#" className="text-white/30 hover:text-[#C9A84C] transition-colors uppercase">プライバシー</a>
          <a href="#" className="text-white/30 hover:text-[#C9A84C] transition-colors uppercase">利用規約</a>
          <a href="#" className="text-white/30 hover:text-[#C9A84C] transition-colors uppercase">お問い合わせ</a>
        </div>
        <p className="text-white/15 text-xs font-light tracking-widest">
          © 2026 Demo App.
        </p>
      </div>
    </footer>
  );
}
