export type Suit =
  | 'Hearts'
  | 'Diamonds'
  | 'Clubs'
  | 'Spades'

export type Rank =
  | '2' | '3' | '4' | '5' | '6' | '7'
  | '8' | '9' | '10'
  | 'Jack'
  | 'Queen'
  | 'King'
  | 'Ace'

export type Card = `${Rank} of ${Suit}`

export interface DealtHands {
  ps: Card[]
  pw: Card[]
  pn: Card[]
  pe: Card[]
}