import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-slate-900/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-blue-500" />
          <span className="text-white font-semibold">GentleBirth Learning</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          <a href="#catalog" className="hover:text-white">Catalog</a>
          <a href="#ebooks" className="hover:text-white">eBooks</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <button className="md:hidden text-slate-200" aria-label="Open Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
