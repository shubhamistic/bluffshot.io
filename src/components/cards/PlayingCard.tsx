import type { Rank, Suit, Card } from '@/types/Cards'
import '@/styles/cards/PlayingCard.scss'

interface PlayingCardProps {
  card: Card
  isFaceDown?: boolean,
  orientation?: 'vertical' | 'horizontal',
  onCardClick?: (card: Card) => void
}

const suitSymbolMap: Record<Suit, string> = {
  Hearts: '♥',
  Diamonds: '♦',
  Clubs: '♣',
  Spades: '♠'
}

const rankDisplayMap: Record<Rank, string> = {
  Ace: 'A',
  King: 'K',
  Queen: 'Q',
  Jack: 'J',
  '10': '10',
  '9': '9',
  '8': '8',
  '7': '7',
  '6': '6',
  '5': '5',
  '4': '4',
  '3': '3',
  '2': '2'
}

const redSuits: Suit[] = ['Hearts', 'Diamonds']

export const PlayingCard = ({
  card,
  isFaceDown = false,
  orientation = 'vertical',
  onCardClick
}: PlayingCardProps) => {
  // Card Flipped (face down)
  if (isFaceDown) {
    return (
      <div className={`playing-card playing-card-back ${orientation}`}>
        <div className="playing-card-back-pattern" />
      </div>
    )
  }

  const [rank, suit] = card.split(' of ') as [Rank, Suit]
  const isRed = redSuits.includes(suit);
  const displayRank = rankDisplayMap[rank];

  const handleClick = () => {
    if (onCardClick) {
      onCardClick(card)
    }
  }

  return (
    <button
      className={`playing-card ${isRed ? 'red' : 'black'}`}
      onClick={handleClick}
    >
      <div className="playing-card-corner top">
        <span>{displayRank}</span>
        <span>{suitSymbolMap[suit]}</span>
      </div>

      <div className="playing-card-corner bottom">
        <span>{displayRank}</span>
        <span>{suitSymbolMap[suit]}</span>
      </div>
    </button>
  )
}