import './Card.css';
import { Card as CardType } from '../../types/types';
import { formatDate } from '../../utils/helpers';

const Card = ({ card }: { card: CardType }) => {
  console.log(card);

  return (
    <div className="card">
      <h1 className="card-title">{card.title}</h1>
      <p className="card-description">{card.description}</p>
      <span className="card-date">{formatDate(card.createdAt)}</span>
    </div>
  );
};

export default Card;
