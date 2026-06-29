import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function SectionPage({
  title,
  tagline,
  description,
  highlights = [],
  cards = [],
  accent = "from-blue-600 to-cyan-500",
}) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur`}>
              <Sparkles size={16} className="text-cyan-300" />
              {tagline}
            </div>

            <h1 className="heading-font mt-6 text-4xl font-bold leading-tight md:text-5xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                className={`inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${accent} px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform duration-300 hover:scale-[1.02]`}
              >
                Explore the home experience
                <ArrowRight size={18} />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-slate-100 backdrop-blur transition-colors duration-300 hover:bg-white/20"
              >
                Book a discovery call
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
            <div className={`rounded-2xl bg-gradient-to-r ${accent} p-6`}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Lighthouse highlights
              </p>
              <ul className="mt-4 space-y-3 text-sm text-blue-50">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/90" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {cards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default SectionPage;
