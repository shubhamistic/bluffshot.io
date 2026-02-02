import type { Dispatch, SetStateAction } from "react";
import type { Card } from '@/types/Cards';
import type { PlayerId } from '@/types/Player';

type PlayerHands = Record<PlayerId, Card[]>

export interface GameContextType {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;

  hands: PlayerHands
  setHands: Dispatch<SetStateAction<PlayerHands>>

  handlePlayButtonPress: () => void;
}