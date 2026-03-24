import { Button } from "@/components/ui/button";
import GrammarSummary from "./GrammarSummary";

interface FinalScreenProps {
  scores: { A: number; B: number };
  onReset: () => void;
  onReview?: () => void;
}

export default function FinalScreen({ scores, onReset, onReview }: FinalScreenProps) {
  const winner =
    scores.A > scores.B ? "A" : scores.B > scores.A ? "B" : null;
  const maxScore = Math.max(scores.A, scores.B);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663467192176/W4UFCYMKDoGwu2E9JjnetJ/success-celebration-HbzsCmcGpErS5An7nLLVmX.webp')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Game Complete!
          </h1>
          <p className="text-xl text-gray-300">
            You've explored the Hall of Faith
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mb-12">
          <div
            className={`bg-white/10 backdrop-blur-md border-2 rounded-2xl p-8 text-center transition-all ${
              winner === "A"
                ? "border-blue-400 shadow-2xl shadow-blue-500/50"
                : "border-white/20"
            }`}
          >
            <p className="text-blue-300 font-bold text-lg mb-2">Team A</p>
            <p className="text-6xl font-bold text-white mb-4">{scores.A}</p>
            {winner === "A" && (
              <p className="text-yellow-300 font-bold text-lg">🏆 Winner!</p>
            )}
          </div>

          <div
            className={`bg-white/10 backdrop-blur-md border-2 rounded-2xl p-8 text-center transition-all ${
              winner === "B"
                ? "border-pink-400 shadow-2xl shadow-pink-500/50"
                : "border-white/20"
            }`}
          >
            <p className="text-pink-300 font-bold text-lg mb-2">Team B</p>
            <p className="text-6xl font-bold text-white mb-4">{scores.B}</p>
            {winner === "B" && (
              <p className="text-yellow-300 font-bold text-lg">🏆 Winner!</p>
            )}
          </div>
        </div>

        {winner === null && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-12 text-center max-w-md">
            <p className="text-yellow-300 font-bold text-lg">It's a Tie! 🤝</p>
            <p className="text-gray-200 mt-2">Both teams showed great faith!</p>
          </div>
        )}

        <div className="flex gap-4 flex-wrap justify-center mb-12">
          <Button
            onClick={onReset}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all text-lg"
          >
            Play Again
          </Button>
          {onReview && (
            <Button
              onClick={onReview}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-8 rounded-lg transition-all text-lg"
            >
              📚 Study Review
            </Button>
          )}
        </div>
      </div>

      <div className="relative z-10 px-4 py-8">
        <div className="container mx-auto max-w-3xl">
          <GrammarSummary />
        </div>
      </div>

      <footer className="relative z-10 text-center py-6 text-gray-400 text-sm">
        <p>God's Hall of Faith · English Grammar & Personal Growth</p>
      </footer>
    </div>
  );
}
