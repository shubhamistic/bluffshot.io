import { useState, useContext, useEffect } from "react";
import GameContext from "@/providers/GameContext";
import type { GameContextType } from "@/types/GameContextType";
import { dealCards } from "@/utils/cards/dealCards";

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error(
      "useGame must be used within GameProvider"
    );
  }
  return context;
};

export const useProvideGame = () => {
  // states --------------------------------------------------------------------
  const [isPlaying, setIsPlaying] = useState<GameContextType["isPlaying"]>(false);
  const [hands, setHands] = useState<GameContextType["hands"]>({
    ps: [],
    pw: [],
    pn: [],
    pe: []
  });

  // handlers ------------------------------------------------------------------
  const handlePlayButtonPress = () => {
    setIsPlaying(true);
  };

  // effects -------------------------------------------------------------------
  useEffect(() => {
    if (isPlaying) {
      setHands(dealCards());
    }
  }, [isPlaying]);

  useEffect(() => {
    console.log(hands);
  }, [hands]);

  // return --------------------------------------------------------------------
  return {
    // State & Setters
    isPlaying, setIsPlaying,
    hands, setHands,

    // Handlers
    handlePlayButtonPress
  };
};