interface ClueCardProps {
  clueNumber: number;
  points: number;
  backgroundColor: string;
  visible: boolean;
  text: string;
}

export default function ClueCard({
  clueNumber,
  points,
  backgroundColor,
  visible,
  text,
}: ClueCardProps) {
  return (
    <div
      className={`p-4 rounded-lg border-l-4 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 bg-white/5 backdrop-blur border-white/20"
          : "opacity-0 translate-y-2 bg-white/0 border-transparent"
      }`}
      style={{
        borderLeftColor: visible ? backgroundColor : "transparent",
      }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-xs font-bold text-gray-300 mb-2">
            Clue {clueNumber} — {points} pts
          </p>
          <div
            className="text-sm text-gray-100 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </div>
  );
}
