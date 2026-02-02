import type { Suit, Rank, Card, DealtHands } from '@/types/Cards'

/**
 * Creates a standard 52-card deck
 */
function createDeck(): Card[] {
  const suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
  const ranks: Rank[] = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'Jack', 'Queen', 'King', 'Ace'
  ]

  const deck: Card[] = []

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(`${rank} of ${suit}`)
    }
  }

  return deck
}

/**
 * Fisher–Yates shuffle (unbiased)
 */
function shuffle(deck: Card[]): Card[] {
  const shuffled = [...deck]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

/**
 * Deals 13 cards to 4 players
 */
function dealCards(): DealtHands {
  const deck = shuffle(createDeck())

  return {
    ps: deck.slice(0, 13),
    pw: deck.slice(13, 26),
    pn: deck.slice(26, 39),
    pe: deck.slice(39, 52)
  }
}

export { dealCards };