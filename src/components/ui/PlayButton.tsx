import "@/styles/ui/PlayButton.scss";

export default function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="play-button"
      onClick={onClick}
    >
      <div className="c1"></div>

      <div className="c2">
        <div className="r1"></div>

        <div className="r2">
          <p>PLAY</p>
        </div>

        <div className="r3"></div>
      </div>

      <div className="c3"></div>
    </button>
  );
}