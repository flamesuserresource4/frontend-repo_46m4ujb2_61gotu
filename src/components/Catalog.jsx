import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

function Card({ item, type }) {
  return (
    <div className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition">
      <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 mb-4 overflow-hidden">
        {item.image_url && (
          <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          {item.subtitle && <p className="text-slate-300 text-sm mt-1">{item.subtitle}</p>}
        </div>
        <div className="text-right">
          <div className="text-white font-bold">${item.price?.toFixed(2)}</div>
          {type === "course" && item.duration && (
            <div className="text-slate-400 text-xs">{item.duration}</div>
          )}
        </div>
      </div>
      {item.description && (
        <p className="text-slate-300 text-sm mt-3 line-clamp-3">{item.description}</p>
      )}
      <div className="mt-4 flex gap-3">
        <button className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-400 text-white text-sm font-semibold">
          Add to cart
        </button>
        <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default function Catalog() {
  const [courses, setCourses] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [cRes, eRes] = await Promise.all([
          fetch(`${API_BASE}/api/courses?published=true`).then(r => r.json()),
          fetch(`${API_BASE}/api/ebooks?published=true`).then(r => r.json()),
        ]);
        setCourses(cRes || []);
        setEbooks(eRes || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="catalog" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Courses</h2>
      <p className="text-slate-300 mt-1">Self-paced modules created by trusted midwives</p>
      {loading && <div className="text-slate-300 mt-6">Loading…</div>}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <Card key={`c-${i}`} item={c} type="course" />
        ))}
      </div>

      <div id="ebooks" className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white">eBooks & Guides</h2>
        <p className="text-slate-300 mt-1">Practical, evidence-based reading</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((b, i) => (
            <Card key={`b-${i}`} item={b} type="ebook" />
          ))}
        </div>
      </div>
    </section>
  );
}
