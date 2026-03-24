import { useState } from "react";
import { Button } from "@/components/ui/button";
import GrammarSummary from "./GrammarSummary";
import StorySummary from "./StorySummary";

interface FinalScreenProps {
  scores: { A: number; B: number };
  onReset: () => void;
  onReview?: () => void;
}

type ActiveTab = "results" | "stories" | "grammar";

export default function FinalScreen({ scores, onReset, onReview }: FinalScreenProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("results");

  const winner =
    scores.A > scores.B ? "A" : scores.B > scores.A ? "B" : null;

  const tabs: { id: ActiveTab; label: string; icon: string }[] = [
    { id: "results", label: "Results", icon: "🏆" },
    { id: "stories", label: "Story Summary", icon: "📖" },
    { id: "grammar", label: "Grammar", icon: "✍️" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663467192176/W4UFCYMKDoGwu2E9JjnetJ/success-celebration-HbzsCmcGpErS5An7nLLVmX.webp')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      {/* Sticky Tab Header */}
      <div className="relative z-20 sticky top-0 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Tab buttons */}
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white border-white/40 shadow-lg"
                      : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-gray-200"
                  }`}
                >
                  <span className="mr-1.5">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <Button
                onClick={onReset}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-all text-sm"
              >
                ↺ Play Again
              </Button>
              {onReview && (
                <Button
                  onClick={onReview}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold py-2 px-4 rounded-lg transition-all text-sm"
                >
                  📚 Study
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1">
        <div className="container mx-auto px-4 py-10 max-w-4xl">

          {/* ── TAB: RESULTS ── */}
          {activeTab === "results" && (
            <div className="flex flex-col items-center">
              {/* Title */}
              <div className="text-center mb-12">
                <p className="text-yellow-300 text-5xl mb-4">🎉</p>
                <h1
                  className="text-5xl md:text-6xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Game Complete!
                </h1>
                <p className="text-xl text-gray-300">
                  You've explored the Hall of Faith
                </p>
              </div>

              {/* Score Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full mb-10">
                <div
                  className={`bg-white/10 backdrop-blur-md border-2 rounded-2xl p-8 text-center transition-all ${
                    winner === "A"
                      ? "border-blue-400 shadow-2xl shadow-blue-500/40 scale-105"
                      : "border-white/20"
                  }`}
                >
                  <p className="text-blue-300 font-bold text-lg mb-2">Team A</p>
                  <p className="text-7xl font-bold text-white mb-4">{scores.A}</p>
                  {winner === "A" && (
                    <p className="text-yellow-300 font-bold text-lg">🏆 Winner!</p>
                  )}
                </div>

                <div
                  className={`bg-white/10 backdrop-blur-md border-2 rounded-2xl p-8 text-center transition-all ${
                    winner === "B"
                      ? "border-pink-400 shadow-2xl shadow-pink-500/40 scale-105"
                      : "border-white/20"
                  }`}
                >
                  <p className="text-pink-300 font-bold text-lg mb-2">Team B</p>
                  <p className="text-7xl font-bold text-white mb-4">{scores.B}</p>
                  {winner === "B" && (
                    <p className="text-yellow-300 font-bold text-lg">🏆 Winner!</p>
                  )}
                </div>
              </div>

              {winner === null && (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8 text-center max-w-md">
                  <p className="text-yellow-300 font-bold text-xl">It's a Tie! 🤝</p>
                  <p className="text-gray-200 mt-2">Both teams showed great faith!</p>
                </div>
              )}

              {/* Navigation hint */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={() => setActiveTab("stories")}
                  className="group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl px-6 py-4 text-left transition-all w-full sm:w-auto"
                >
                  <p className="text-white font-bold">📖 Story Summary →</p>
                  <p className="text-gray-400 text-sm mt-1">Review all characters & grammar</p>
                </button>
                <button
                  onClick={() => setActiveTab("grammar")}
                  className="group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl px-6 py-4 text-left transition-all w-full sm:w-auto"
                >
                  <p className="text-white font-bold">✍️ Grammar Reference →</p>
                  <p className="text-gray-400 text-sm mt-1">Quick structures overview</p>
                </button>
              </div>
            </div>
          )}

          {/* ── TAB: STORY SUMMARY ── */}
          {activeTab === "stories" && <StorySummary />}

          {/* ── TAB: GRAMMAR ── */}
          {activeTab === "grammar" && (
            <div>
              <div className="text-center mb-8">
                <h2
                  className="text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Grammar Reference
                </h2>
                <p className="text-gray-400">Structures used throughout the game</p>
              </div>
              <GrammarSummary />
            </div>
          )}
        </div>
      </div>

      <footer className="relative z-10 text-center py-6 text-gray-500 text-sm border-t border-white/10">
        <p>God's Hall of Faith · English Grammar & Personal Growth</p>
      </footer>
    </div>
  );
}
