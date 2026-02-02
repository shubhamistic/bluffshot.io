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
        <div className="left-container">
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
              style={{
                "marginLeft": gameScreen.playerCardOverlapOffset.pn
              }}
            >
              <PlayingCard
                card={card}
                isFaceDown
              />
            </div>
          ))}
        </div>

        <div className="right-container">

        </div>
      </div>
      {/* ******************** Player North ******************** */}

      <div className="table-row">
        {/* -------------------- Player West -------------------- */}
        <div className="player-west">
          <div className="cards" ref={gameScreen.eastWestCardsContainerRef}>
            {game.hands?.pw.map(card => (
              <div
                className="card"
                key={card}
                style={{
                  "marginTop": gameScreen.playerCardOverlapOffset.pw
                }}
              >
                <PlayingCard
                  card={card}
                  isFaceDown
                  orientation="horizontal"
                />
              </div>
            ))}
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
          <div className="cards">
            {game.hands?.pe.map(card => (
              <div
                className="card"
                key={card}
                style={{
                  "marginTop": gameScreen.playerCardOverlapOffset.pe
                }}
              >
                <PlayingCard
                  card={card}
                  isFaceDown
                  orientation="horizontal"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ******************** Player East ******************** */}
      </div>

      {/* -------------------- Player South -------------------- */}
      <div className="player-south">
        <div className="left-container">

        </div>

        <div className="cards">
          {game.hands?.ps.map(card => (
            <div
              className="card"
              key={card}
              style={{
                "marginLeft": gameScreen.playerCardOverlapOffset.ps
              }}
            >
              <PlayingCard
                card={card}
              />
            </div>
          ))}
        </div>

        <div className="right-container">

        </div>
      </div>
      {/* ******************** Player South ******************** */}
    </div>
  )
}