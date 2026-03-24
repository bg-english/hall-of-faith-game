interface GameHeaderProps {
  currentRound: number;
  totalRounds: number;
  scores: { A: number; B: number };
}

export default function GameHeader({
  currentRound,
  totalRounds,
  scores,
}: GameHeaderProps) {
  return (
    <div className="relative z-20 bg-gradient-to-r from-purple-900/80 to-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0">
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              God's Hall of Faith
            </h1>
            <p className="text-sm text-gray-300">
              Round {currentRound} of {totalRounds} · English Grammar & Personal
              Growth
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
              <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider">
                Team A
              </p>
              <p className="text-4xl font-bold text-blue-300 mt-2">
                {scores.A}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
              <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider">
                Team B
              </p>
              <p className="text-4xl font-bold text-pink-300 mt-2">
                {scores.B}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
