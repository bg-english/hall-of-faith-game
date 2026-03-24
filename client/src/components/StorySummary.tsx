import { useState } from "react";
import { characters } from "@/data/characters";

// Each clue has a consistent grammar pattern across all characters
const grammarMeta = [
  {
    label: "Present Simple · Present Perfect",
    tag: "PP",
    desc: "State & identity — who they are now",
    color: "#AFA9EC",
    border: "border-l-[#AFA9EC]",
    bg: "bg-[#AFA9EC]/10",
    tagBg: "bg-[#AFA9EC]/20 text-[#C8C4F0] border-[#AFA9EC]/40",
  },
  {
    label: "Past Perfect · Past Perfect Continuous",
    tag: "PPC",
    desc: "Background — what had happened before",
    color: "#5DCAA5",
    border: "border-l-[#5DCAA5]",
    bg: "bg-[#5DCAA5]/10",
    tagBg: "bg-[#5DCAA5]/20 text-[#7EDFC0] border-[#5DCAA5]/40",
  },
  {
    label: "Phrasal Verbs · Pres. Perfect Continuous",
    tag: "PV",
    desc: "Journey — ongoing struggle & perseverance",
    color: "#EF9F27",
    border: "border-l-[#EF9F27]",
    bg: "bg-[#EF9F27]/10",
    tagBg: "bg-[#EF9F27]/20 text-[#F5BF6A] border-[#EF9F27]/40",
  },
  {
    label: "Present Perfect (Achievement)",
    tag: "PPA",
    desc: "Legacy — what they have accomplished",
    color: "#ED93B1",
    border: "border-l-[#ED93B1]",
    bg: "bg-[#ED93B1]/10",
    tagBg: "bg-[#ED93B1]/20 text-[#F2B3CA] border-[#ED93B1]/40",
  },
];

export default function StorySummary() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState<"story" | "grammar" | "discuss">("story");

  return (
    <div className="mt-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/20 rounded-full px-6 py-2 mb-4">
          <span className="text-yellow-300 text-lg">✦</span>
          <span className="text-sm font-semibold text-gray-300 tracking-widest uppercase">Hall of Faith</span>
          <span className="text-yellow-300 text-lg">✦</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Full Story Summary
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Every character explored — their stories, grammar structures, and Christocentric connections
        </p>
      </div>

      {/* Grammar Key Legend */}
      <div className="bg-white/5 backdrop-blur border border-white/15 rounded-2xl p-6 mb-8">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Grammar Key — Clue Color Code</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {grammarMeta.map((g, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: g.color }} />
              <div>
                <p className="text-xs font-bold text-white leading-tight">{g.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Character Cards */}
      <div className="space-y-4">
        {characters.map((char, idx) => {
          const isOpen = expanded === idx;
          return (
            <div
              key={char.name}
              className={`bg-white/8 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? "border-white/30 shadow-2xl" : "border-white/15 hover:border-white/25"
              }`}
            >
              {/* Collapsed Header — always visible */}
              <button
                onClick={() => setExpanded(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center gap-5 group"
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                  style={{ backgroundColor: char.bg }}
                >
                  {char.av}
                </div>

                {/* Name + Verse */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-bold text-white">{char.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {char.qualities.slice(0, 3).map((q, qi) => (
                        <span
                          key={qi}
                          className="px-2 py-0.5 rounded-full text-xs font-semibold border"
                          style={{
                            backgroundColor: char.bg + "30",
                            borderColor: char.bg + "60",
                            color: char.bg,
                            filter: "brightness(1.4)",
                          }}
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-0.5 truncate italic">{char.verse}</p>
                </div>

                {/* Round Badge + Expand Icon */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="hidden md:block text-xs text-gray-500 font-mono">
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {isOpen && (
                <div className="px-6 pb-6">
                  {/* Divider */}
                  <div className="w-full h-px bg-white/10 mb-6" />

                  {/* Inner Tabs */}
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {(["story", "grammar", "discuss"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveSection(tab)}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                          activeSection === tab
                            ? "text-white border-white/40 bg-white/15"
                            : "text-gray-400 border-white/10 bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {tab === "story" && "📖 Story Clues"}
                        {tab === "grammar" && "✍️ Grammar Focus"}
                        {tab === "discuss" && "✝️ Discussion"}
                      </button>
                    ))}
                  </div>

                  {/* STORY TAB */}
                  {activeSection === "story" && (
                    <div className="space-y-3">
                      {char.clues.map((clue, ci) => {
                        const meta = grammarMeta[ci];
                        return (
                          <div
                            key={ci}
                            className={`border-l-4 rounded-lg p-4 ${meta.bg}`}
                            style={{ borderLeftColor: meta.color }}
                          >
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className="text-xs font-bold text-gray-400">Clue {ci + 1}</span>
                              <span className="text-xs text-gray-500">·</span>
                              <span className="text-yellow-400 text-xs font-bold">{4 - ci} pts</span>
                              <span
                                className={`ml-auto px-2 py-0.5 rounded-full text-xs font-bold border ${meta.tagBg}`}
                              >
                                {meta.tag}
                              </span>
                            </div>
                            <p
                              className="text-sm text-gray-100 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: clue.t }}
                            />
                          </div>
                        );
                      })}

                      {/* Reflection */}
                      <div className="mt-5 bg-white/5 border border-white/15 rounded-xl p-5">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Character Reflection</p>
                        <p className="text-sm text-gray-200 leading-relaxed">{char.reflection}</p>
                      </div>
                    </div>
                  )}

                  {/* GRAMMAR TAB */}
                  {activeSection === "grammar" && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-400 mb-4">
                        The four clues for <strong className="text-white">{char.name}</strong> each model a different grammar structure. Here's how they appear in context:
                      </p>
                      {char.clues.map((clue, ci) => {
                        const meta = grammarMeta[ci];
                        return (
                          <div key={ci} className={`border-l-4 rounded-xl p-5 ${meta.bg}`} style={{ borderLeftColor: meta.color }}>
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${meta.tagBg}`}>
                                Clue {ci + 1}
                              </span>
                              <span className="text-sm font-bold text-white">{meta.label}</span>
                            </div>
                            <p className="text-xs text-gray-400 italic mb-3">{meta.desc}</p>
                            <div className="bg-black/20 rounded-lg p-3">
                              <p
                                className="text-sm text-gray-100 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: clue.t }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* DISCUSSION TAB */}
                  {activeSection === "discuss" && (
                    <div className="space-y-4">
                      <div className="bg-yellow-500/15 border border-yellow-500/40 rounded-xl p-6">
                        <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">
                          ✝️ Christocentric Discussion Question
                        </p>
                        <p className="text-yellow-50 leading-relaxed">{char.disc}</p>
                      </div>
                      <div className="bg-white/5 border border-white/15 rounded-xl p-5">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Qualities</p>
                        <div className="flex flex-wrap gap-2">
                          {char.qualities.map((q, qi) => (
                            <span
                              key={qi}
                              className="px-3 py-1.5 rounded-full text-sm font-semibold border"
                              style={{
                                backgroundColor: char.bg + "25",
                                borderColor: char.bg + "50",
                                color: char.bg,
                                filter: "brightness(1.5)",
                              }}
                            >
                              {q}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/15 rounded-xl p-5">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Scripture Reference</p>
                        <p className="text-gray-200 italic">"{char.verse}"</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="mt-10 p-6 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-amber-500/15 border border-white/15 rounded-2xl text-center">
        <p className="text-2xl mb-2">🏆</p>
        <h3 className="text-lg font-bold text-white mb-1">
          {characters.length} Heroes of Faith — Explored
        </h3>
        <p className="text-sm text-gray-400">
          Each one pressed on. Each one points to Jesus — the Author and Perfecter of our faith.
        </p>
      </div>
    </div>
  );
}
