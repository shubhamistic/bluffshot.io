export type Screen = 'menu' | 'game'

export interface GameState {
  screen: Screen
  score: number
  level: number
}