import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.25),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-300 ring-1 ring-pink-500/30">
          Midwifery • Pregnancy • Birth
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Evidence-based learning for every stage of pregnancy and birth
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          Trusted resources created by certified midwives. Explore bite-sized courses, ebooks, and practical guides designed to support parents and professionals.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#catalog" className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-400 text-white font-semibold transition">
            Browse learning
          </a>
          <a href="#about" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition">
            About our approach
          </a>
        </div>
      </div>
    </section>
  );
}
