export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-white font-bold text-xl">Demo App</div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">プライバシー</a>
          <a href="#" className="hover:text-white transition">利用規約</a>
          <a href="#" className="hover:text-white transition">お問い合わせ</a>
        </div>
        <p className="text-xs">© 2026 Demo App. All rights reserved.</p>
      </div>
    </footer>
  );
}
