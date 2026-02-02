import type { GameContextType } from "@/types/GameContextType";
import type { GameScreen } from "@/types/GameScreen";
import { PlayingCard } from "@/components/cards/PlayingCard";
import { useGameScreen } from "@/hooks/useGameScreen";
import ExitGameSvg from "@/assets/exit-game.svg";
import "@/styles/ui/GameScreen.scss";

export default function GameScreen({ game }: { game: GameContextType }) {
  const gameScreen = useGameScreen();

  return (
    <div className="game-screen">
      {/* -------------------- Player North -------------------- */}
      <div className="player-north">
        <div className={`pn-left ${gameScreen.viewportAspectRatio < 1 ? "pn-minimize" : ""}`}>
          <button className="exit-game-button">
            <img
              src={ExitGameSvg}
              alt="Exit Game"
            />
            <div className="p-exit-game-container">
              <p className="p-exit">EXIT</p>
              <p className="p-game">GAME</p>
            </div>
          </button>
        </div>

        <div className="cards" ref={gameScreen.northSouthCardsContainerRef}>
          {game.hands?.pn.map(card => (
            <div
              className="card"
              key={card}
              style={{ "marginLeft": gameScreen.playerCardOverlapOffset.pn }}
            >
              <PlayingCard card={card} playerId="pn" isFaceDown />
            </div>
          ))}
        </div>

        <div className={`pn-right ${gameScreen.viewportAspectRatio < 1 ? "pn-minimize" : ""}`}>

        </div>
      </div>
      {/* ******************** Player North ******************** */}

      <div className="table-row">
        {/* -------------------- Player West -------------------- */}
        <div className="player-west">
          <div className={`pw-top ${gameScreen.viewportAspectRatio < 1 ? "pw-maximize" : ""}`}>

          </div>

          <div className="cards" ref={gameScreen.eastWestCardsContainerRef}>
            {game.hands?.pw.map(card => (
              <div
                className="card"
                key={card}
                style={{ "marginTop": gameScreen.playerCardOverlapOffset.pw }}
              >
                <PlayingCard card={card} playerId="pw" isFaceDown orientation="horizontal" />
              </div>
            ))}
          </div>

          <div className={`pw-bottom ${gameScreen.viewportAspectRatio < 1 ? "pw-maximize" : ""}`}>

          </div>
        </div>
        {/* ******************** Player West ******************** */}

        {/* -------------------- Table Center -------------------- */}
        <div className="table-center">
          {/* Played cards / pile goes here */}
        </div>
        {/* ******************** Table Center ******************** */}

        {/* -------------------- Player East -------------------- */}
        <div className="player-east">
          <div className={`pe-top ${gameScreen.viewportAspectRatio < 1 ? "pe-maximize" : ""}`}>

          </div>

          <div className="cards">
            {game.hands?.pe.map(card => (
              <div
                className="card"
                key={card}
                style={{ "marginTop": gameScreen.playerCardOverlapOffset.pe }}
              >
                <PlayingCard card={card} playerId="pe" isFaceDown orientation="horizontal" />
              </div>
            ))}
          </div>

          <div className={`pe-bottom ${gameScreen.viewportAspectRatio < 1 ? "pe-maximize" : ""}`}>

          </div>
        </div>
        {/* ******************** Player East ******************** */}
      </div>

      {/* -------------------- Player South -------------------- */}
      <div className="player-south">
        <div className={`ps-left ${gameScreen.viewportAspectRatio < 1 ? "ps-minimize" : ""}`}>

        </div>

        <div className="cards">
          {game.hands?.ps.map(card => (
            <div
              className="card"
              key={card}
              style={{ "marginLeft": gameScreen.playerCardOverlapOffset.ps }}
            >
              <PlayingCard card={card} playerId="ps" />
            </div>
          ))}
        </div>

        <div className={`ps-right ${gameScreen.viewportAspectRatio < 1 ? "ps-minimize" : ""}`}>

        </div>
      </div>
      {/* ******************** Player South ******************** */}
    </div>
  )
}