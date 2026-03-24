import { useState, useEffect } from "react";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { characters } from "@/data/characters";
import { Button } from "@/components/ui/button";
import GameHeader from "@/components/GameHeader";
import ClueCard from "@/components/ClueCard";
import InteractionBox from "@/components/InteractionBox";
import RevealCard from "@/components/RevealCard";
import GrammarSummary from "@/components/GrammarSummary";
import FinalScreen from "@/components/FinalScreen";
import ReviewMode from "@/components/ReviewMode";

export default function Game() {
  const gameLogic = useGameLogic();
  const sounds = useSoundEffects();
  const [answerInput, setAnswerInput] = useState("");
  const [showReveal, setShowReveal] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const currentChar = characters[gameLogic.gameState.currentCharIndex];
  const currentPts = gameLogic.pts();

  // Reproducir sonido al revelar pista
  useEffect(() => {
    if (gameLogic.gameState.phase === "select") {
      sounds.playReveal();
    }
  }, [gameLogic.gameState.phase]);

  const handleShowClue = () => {
    sounds.playClick();
    gameLogic.showClue();
  };

  const handleSelectTeam = (team: "A" | "B") => {
    sounds.playClick();
    gameLogic.selectTeam(team);
  };

  const handleSubmitAnswer = () => {
    if (!answerInput.trim()) return;

    const result = gameLogic.submitAnswer(answerInput);
    setAnswerInput("");

    if (result.correct) {
      sounds.playSuccess();
      setTimeout(() => {
        setShowReveal(true);
        sounds.playReveal();
      }, 500);
    } else {
      sounds.playError();
    }
  };

  const handleNextCharacter = () => {
    sounds.playClick();
    setShowReveal(false);
    gameLogic.nextCharacter();
  };

  const handleSkipClue = () => {
    sounds.playClick();
    gameLogic.skipNextClue();
  };

  const handleResetGame = () => {
    sounds.playClick();
    setAnswerInput("");
    setShowReveal(false);
    gameLogic.resetGame();
  };

  if (isReviewMode) {
    return <ReviewMode onClose={() => setIsReviewMode(false)} />;
  }

  if ((gameLogic.gameState.phase as string) === "final") {
    return (
      <FinalScreen
        scores={gameLogic.gameState.scores}
        onReset={handleResetGame}
        onReview={() => setIsReviewMode(true)}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663467192176/W4UFCYMKDoGwu2E9JjnetJ/hero-faith-journey-5zTjbhKiDR4zZVWumanxhX.webp')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <GameHeader
          currentRound={gameLogic.gameState.currentCharIndex + 1}
          totalRounds={characters.length}
          scores={gameLogic.gameState.scores}
        />

        <main className="container mx-auto px-4 py-8 max-w-3xl">
          {/* Review Button */}
          <div className="flex justify-end mb-4">
            <Button
              onClick={() => setIsReviewMode(true)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-2 px-4 rounded-lg transition-all"
            >
              📚 Study Review
            </Button>
          </div>

          {/* Dots Progress */}
          <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {characters.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i < gameLogic.gameState.currentCharIndex
                    ? "bg-emerald-400"
                    : i === gameLogic.gameState.currentCharIndex
                      ? "bg-purple-400 scale-125"
                      : "bg-gray-600"
                }`}
                title={characters[i].name}
              />
            ))}
          </div>

          {/* Character Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-6 shadow-2xl animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg ${
                  gameLogic.gameState.phase === "reveal" ||
                  gameLogic.gameState.phase === "correct"
                    ? "animate-bounce-in"
                    : ""
                }`}
                style={{ backgroundColor: currentChar.bg }}
              >
                {gameLogic.gameState.phase === "reveal" ||
                gameLogic.gameState.phase === "correct"
                  ? currentChar.av
                  : "?"}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  Round {gameLogic.gameState.currentCharIndex + 1} of{" "}
                  {characters.length}
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Who is this Bible character?
                </h2>
              </div>
              {gameLogic.gameState.phase !== "show_clue" && (
                <div className="text-center bg-white/10 rounded-lg p-3 border border-white/20">
                  <p className="text-xs text-gray-300">Worth</p>
                  <p className="text-3xl font-bold text-yellow-300">
                    {currentPts}
                  </p>
                  <p className="text-xs text-gray-300">pts</p>
                </div>
              )}
            </div>

            {/* Clues */}
            <div className="space-y-3">
              {currentChar.clues.map((clue, idx) => (
                <ClueCard
                  key={idx}
                  clueNumber={idx + 1}
                  points={4 - idx}
                  backgroundColor={clue.b}
                  visible={idx <= gameLogic.gameState.clueIndex}
                  text={clue.t}
                />
              ))}
            </div>
          </div>

          {/* Interaction Box */}
          <InteractionBox
            phase={gameLogic.gameState.phase}
            currentPts={currentPts}
            failedTeam={gameLogic.gameState.failedTeam}
            activeTeam={gameLogic.gameState.activeTeam}
            answerInput={answerInput}
            onAnswerChange={setAnswerInput}
            onShowClue={handleShowClue}
            onSelectTeam={handleSelectTeam}
            onSubmitAnswer={handleSubmitAnswer}
            onGoBack={gameLogic.goBack}
            onSkipClue={handleSkipClue}
            onNextCharacter={handleNextCharacter}
            clueIndex={gameLogic.gameState.clueIndex}
            showReveal={showReveal}
          />

          {/* Reveal Card */}
          {(gameLogic.gameState.phase === "reveal" ||
            gameLogic.gameState.phase === "correct" ||
            showReveal) && (
            <RevealCard character={currentChar} />
          )}
        </main>

        {/* Grammar Summary */}
        {gameLogic.gameState.phase === "final" && <GrammarSummary />}
      </div>
    </div>
  );
}
