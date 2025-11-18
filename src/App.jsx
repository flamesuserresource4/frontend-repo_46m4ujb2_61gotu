import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white">Our approach</h3>
              <p className="text-slate-300 mt-3">
                We create accessible, evidence-based learning designed with
                empathy. Our resources blend clinical accuracy with
                compassionate care, supporting both families and birth
                professionals.
              </p>
              <ul className="mt-4 space-y-2 text-slate-200 list-disc list-inside">
                <li>Created by certified midwives</li>
                <li>Reviewed by subject-matter experts</li>
                <li>Up-to-date with current guidelines</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/15 to-blue-500/15 border border-white/10">
              <h4 className="text-xl font-semibold text-white">Popular topics</h4>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {[
                  "Prenatal care",
                  "Labor & birth",
                  "Pain relief options",
                  "Postpartum recovery",
                  "Breastfeeding",
                  "Newborn care",
                ].map((t) => (
                  <div key={t} className="px-3 py-2 rounded-lg bg-white/10 text-white">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
