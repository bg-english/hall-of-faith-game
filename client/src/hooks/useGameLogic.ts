import { useState, useCallback } from "react";
import { characters } from "@/data/characters";

export type GamePhase =
  | "show_clue"
  | "select"
  | "answering"
  | "correct"
  | "both_wrong"
  | "reveal"
  | "final";

export interface GameState {
  currentCharIndex: number;
  clueIndex: number;
  phase: GamePhase;
  activeTeam: "A" | "B" | null;
  failedTeam: "A" | "B" | null;
  scores: { A: number; B: number };
  lastPts: number;
}

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentCharIndex: 0,
    clueIndex: 0,
    phase: "show_clue",
    activeTeam: null,
    failedTeam: null,
    scores: { A: 0, B: 0 },
    lastPts: 0,
  });

  const pts = useCallback(() => 4 - gameState.clueIndex, [gameState.clueIndex]);

  const other = useCallback((team: "A" | "B") => (team === "A" ? "B" : "A"), []);

  const showClue = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      phase: "select",
      failedTeam: null,
      activeTeam: null,
    }));
  }, []);

  const skipNextClue = useCallback(() => {
    if (gameState.clueIndex < 3) {
      setGameState((prev) => ({
        ...prev,
        clueIndex: prev.clueIndex + 1,
        phase: "show_clue",
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        phase: "reveal",
      }));
    }
  }, [gameState.clueIndex]);

  const selectTeam = useCallback((team: "A" | "B") => {
    setGameState((prev) => ({
      ...prev,
      activeTeam: team,
      phase: "answering",
    }));
  }, []);

  const goBack = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      activeTeam: null,
      phase: "select",
    }));
  }, []);

  const submitAnswer = useCallback(
    (answer: string) => {
      const correct = characters[gameState.currentCharIndex].name.toLowerCase();
      const userAnswer = answer.trim().toLowerCase();

      if (userAnswer === correct) {
        const pointsEarned = pts();
        setGameState((prev) => ({
          ...prev,
          scores: {
            ...prev.scores,
            [prev.activeTeam!]: prev.scores[prev.activeTeam!] + pointsEarned,
          },
          lastPts: pointsEarned,
          phase: "correct",
        }));
        return { correct: true, points: pointsEarned };
      } else {
        if (gameState.failedTeam === null) {
          setGameState((prev) => ({
            ...prev,
            failedTeam: prev.activeTeam,
            activeTeam: other(prev.activeTeam!),
            phase: "answering",
          }));
        } else {
          if (gameState.clueIndex < 3) {
            setGameState((prev) => ({
              ...prev,
              clueIndex: prev.clueIndex + 1,
              phase: "both_wrong",
            }));
          } else {
            setGameState((prev) => ({
              ...prev,
              phase: "reveal",
            }));
          }
        }
        return { correct: false };
      }
    },
    [gameState.currentCharIndex, gameState.failedTeam, pts, other]
  );

  const nextCharacter = useCallback(() => {
    if (gameState.currentCharIndex < characters.length - 1) {
      setGameState((prev) => ({
        ...prev,
        currentCharIndex: prev.currentCharIndex + 1,
        clueIndex: 0,
        phase: "show_clue",
        activeTeam: null,
        failedTeam: null,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        phase: "final",
      }));
    }
  }, [gameState.currentCharIndex]);

  const resetGame = useCallback(() => {
    setGameState({
      currentCharIndex: 0,
      clueIndex: 0,
      phase: "show_clue",
      activeTeam: null,
      failedTeam: null,
      scores: { A: 0, B: 0 },
      lastPts: 0,
    });
  }, []);

  return {
    gameState,
    pts,
    other,
    showClue,
    skipNextClue,
    selectTeam,
    goBack,
    submitAnswer,
    nextCharacter,
    resetGame,
  };
};
