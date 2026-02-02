import type { Dispatch, SetStateAction, RefObject } from "react";
import type { PlayerId } from '@/types/Player';

type PlayerCardOverlapOffset = Record<PlayerId, number>

export interface GameScreen {
  playerCardOverlapOffset: PlayerCardOverlapOffset
  setPlayerCardOverlapOffset: Dispatch<SetStateAction<PlayerCardOverlapOffset>>

  viewportAspectRatio: number
  setViewportAspectRatio: Dispatch<SetStateAction<number>>

  northSouthCardsContainerRef: RefObject<HTMLDivElement | null>;
  eastWestCardsContainerRef: RefObject<HTMLDivElement | null>;
}