import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { GamePhase } from "@/hooks/useGameLogic";

interface InteractionBoxProps {
  phase: GamePhase;
  currentPts: number;
  failedTeam: "A" | "B" | null;
  activeTeam: "A" | "B" | null;
  answerInput: string;
  onAnswerChange: (value: string) => void;
  onShowClue: () => void;
  onSelectTeam: (team: "A" | "B") => void;
  onSubmitAnswer: () => void;
  onGoBack: () => void;
  onSkipClue: () => void;
  onNextCharacter: () => void;
  clueIndex: number;
  showReveal: boolean;
}

export default function InteractionBox({
  phase,
  currentPts,
  failedTeam,
  activeTeam,
  answerInput,
  onAnswerChange,
  onShowClue,
  onSelectTeam,
  onSubmitAnswer,
  onGoBack,
  onSkipClue,
  onNextCharacter,
  clueIndex,
  showReveal,
}: InteractionBoxProps) {
  if (phase === "show_clue") {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
        <Button
          onClick={onShowClue}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition-all"
        >
          Show Clue {clueIndex + 1}
        </Button>
      </div>
    );
  }

  if (phase === "select") {
    const nextClueLabel =
      clueIndex < 3
        ? `Nobody knows → Next Clue (${currentPts - 1} pt${currentPts - 1 !== 1 ? "s" : ""})`
        : "Nobody knows → Reveal Answer";

    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
        <p className="text-white font-semibold mb-4">
          Which team is answering? — worth{" "}
          <span className="text-yellow-300 font-bold">{currentPts}</span> pt
          {currentPts !== 1 ? "s" : ""}
        </p>
        <div className="flex gap-3 flex-wrap">
          <Button
            onClick={() => onSelectTeam("A")}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all"
          >
            Team A
          </Button>
          <Button
            onClick={() => onSelectTeam("B")}
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition-all"
          >
            Team B
          </Button>
          <Button
            onClick={onSkipClue}
            variant="outline"
            className="flex-1 bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold py-3 rounded-lg transition-all"
          >
            {nextClueLabel}
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "answering") {
    const failMessage =
      failedTeam !== null
        ? `✗ Team ${failedTeam} answered incorrectly — Team ${activeTeam}, your turn. Still worth ${currentPts} pt${currentPts !== 1 ? "s" : ""}.`
        : null;

    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
        {failMessage && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg mb-4 text-sm">
            {failMessage}
          </div>
        )}
        <p className="text-white font-semibold mb-4">
          Team {activeTeam}, enter your answer:
        </p>
        <div className="flex gap-3">
          <Input
            type="text"
            value={answerInput}
            onChange={(e) => onAnswerChange(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSubmitAnswer()}
            placeholder="Type the character's name..."
            className="flex-1 bg-white/10 border-white/30 text-white placeholder-gray-400 rounded-lg"
            autoFocus
          />
          <Button
            onClick={onSubmitAnswer}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 rounded-lg transition-all"
          >
            Submit
          </Button>
        </div>
        {failedTeam === null && (
          <Button
            onClick={onGoBack}
            variant="outline"
            className="w-full mt-3 bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold py-2 rounded-lg transition-all"
          >
            ← Change team
          </Button>
        )}
      </div>
    );
  }

  if (phase === "correct" && showReveal) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
        <div className="text-center mb-6">
          <p className="text-green-300 font-bold text-lg">✓ Correct!</p>
          <p className="text-yellow-300 text-2xl font-bold mt-2">
            +{currentPts} points
          </p>
        </div>
        <Button
          onClick={onNextCharacter}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition-all"
        >
          Next Character →
        </Button>
      </div>
    );
  }

  if (phase === "both_wrong") {
    const hasMoreClues = clueIndex < 4;
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
        <p className="text-orange-300 font-bold mb-4">
          Both teams answered incorrectly.{" "}
          {hasMoreClues
            ? `Here comes clue ${clueIndex + 1}...`
            : "The answer will now be revealed."}
        </p>
        <Button
          onClick={hasMoreClues ? onShowClue : onNextCharacter}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition-all"
        >
          {hasMoreClues ? `Show Clue ${clueIndex + 1} →` : "Reveal Answer →"}
        </Button>
      </div>
    );
  }

  if (phase === "reveal") {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
        <Button
          onClick={onNextCharacter}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition-all"
        >
          Next Character →
        </Button>
      </div>
    );
  }

  return null;
}
