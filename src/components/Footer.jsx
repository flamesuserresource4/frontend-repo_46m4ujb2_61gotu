export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-500 to-blue-500" />
            <span className="text-white font-semibold">GentleBirth Learning</span>
          </div>
          <p className="text-slate-400">
            Evidence-based education for pregnancy, birth and beyond.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-slate-300">
            <li><a className="hover:text-white" href="#catalog">Courses</a></li>
            <li><a className="hover:text-white" href="#ebooks">eBooks</a></li>
            <li><a className="hover:text-white" href="#about">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-slate-300">hello@gentlebirth.example</p>
          <p className="text-slate-400 mt-1">© {new Date().getFullYear()} GentleBirth Learning</p>
        </div>
      </div>
    </footer>
  );
}
