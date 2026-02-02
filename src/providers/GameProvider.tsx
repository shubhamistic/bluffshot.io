import GameContext from "./GameContext";
import { useProvideGame } from "@/hooks/useProvideGame";
import type { GameContextType } from "@/types/GameContextType";

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const game: GameContextType = useProvideGame();

  return (
    <GameContext.Provider
      value={game}
    >
      {children}
    </GameContext.Provider>
  );
};