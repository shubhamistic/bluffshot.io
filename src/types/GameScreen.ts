import type { Dispatch, SetStateAction, RefObject } from "react";
import type { PlayerId } from '@/types/Player';

type PlayerCardOverlapOffset = Record<PlayerId, number>

export interface GameScreen {
  playerCardOverlapOffset: PlayerCardOverlapOffset
  setPlayerCardOverlapOffset: Dispatch<SetStateAction<PlayerCardOverlapOffset>>

  northSouthCardsContainerRef: RefObject<HTMLDivElement | null>;
  eastWestCardsContainerRef: RefObject<HTMLDivElement | null>;
}