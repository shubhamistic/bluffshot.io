import { useGame } from "@/hooks/useProvideGame";
import {
  GameScreen,
  GameTitle,
  PlayButton
} from "@/components/ui";
import "@/styles/App.scss";

export default function App() {
  const game = useGame();

  return (
    <div className="app">
      {game.isPlaying ? (
        <div className="game-screen">
          <GameScreen game={game} />
        </div>
      ) : (
        <div className="main-menu-screen">
          <div className="game-title-container">
            <GameTitle />
          </div>

          <div className="play-button-container">
            <PlayButton
              onClick={game.handlePlayButtonPress}
            />
          </div>
        </div>
      )}
    </div>
  );
}