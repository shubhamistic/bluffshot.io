import { useEffect, useState, useRef } from "react";
import type { GameScreen } from "@/types/GameScreen";
import type { Breakpoint } from "@/types/Breakpoint";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useViewport } from "@/hooks/useViewport";
import { useGame } from "@/hooks/useProvideGame";
import * as constants from "@/constants/constants";

export function useGameScreen(): GameScreen {
  // hooks ---------------------------------------------------------------------
  const game = useGame();
  const breakpoint = useBreakpoint();
  const { width, height } = useViewport();

  // states --------------------------------------------------------------------
  const [playerCardOverlapOffset, setPlayerCardOverlapOffset] = useState<GameScreen["playerCardOverlapOffset"]>({
    ps: 0,
    pw: 0,
    pn: 0,
    pe: 0
  });

  // refs ----------------------------------------------------------------------
  const northSouthCardsContainerRef = useRef<HTMLDivElement | null>(null);
  const eastWestCardsContainerRef = useRef<HTMLDivElement | null>(null)

  const calculatePlayerCardOverlapOffset = (breakpoint: Breakpoint): GameScreen["playerCardOverlapOffset"] => {
    // northSouthCardsContainerDimensions
    const nsDims =
      northSouthCardsContainerRef.current
        ? (() => {
          const { width, height } =
            northSouthCardsContainerRef.current.getBoundingClientRect();
          return { width, height };
        })()
        : null;

    // eastWestCardsContainerDimensions
    const ewDims =
      eastWestCardsContainerRef.current
        ? (() => {
          const { width, height } =
            eastWestCardsContainerRef.current.getBoundingClientRect();
          return { width, height };
        })()
        : null;

    if (!nsDims || !ewDims) {
      return {
        ps: 0,
        pw: 0,
        pn: 0,
        pe: 0
      };
    }

    let cardDims = constants.cardSizeDesktop

    if (breakpoint === "mobile") {
      cardDims = constants.cardSizeMobile // [height, width]
    }

    if (breakpoint === "tablet") {
      cardDims = constants.cardSizeTablet // [height, width]
    }

    if (breakpoint === "laptop") {
      cardDims = constants.cardSizeLaptop // [height, width]
    }

    if (breakpoint === "desktop") {
      cardDims = constants.cardSizeDesktop // [height, width]
    }

    if (breakpoint === "largeDesktop") {
      cardDims = constants.cardSizeXlDesktop // [height, width]
    }

    return {
      ps: -(cardDims[1] - ((nsDims.width - cardDims[1]) / (game.hands.ps.length - 1))),
      pw: -(cardDims[1] - ((ewDims.height - cardDims[1]) / (game.hands.pw.length - 1))),
      pn: -(cardDims[1] - ((nsDims.width - cardDims[1]) / (game.hands.pn.length - 1))),
      pe: -(cardDims[1] - ((ewDims.height - cardDims[1]) / (game.hands.pe.length - 1))),
    };
  }

  useEffect(() => {
    // console.log("Viewport changed", width, height, breakpoint);

    setPlayerCardOverlapOffset(calculatePlayerCardOverlapOffset(breakpoint));
  }, [width, height, breakpoint, game.hands]);

  return {
    // states
    playerCardOverlapOffset,
    setPlayerCardOverlapOffset,

    // refs
    northSouthCardsContainerRef,
    eastWestCardsContainerRef
  }
}