import './Card.css';
import { Card as CardType } from '../../types/types';
import { formatDate } from '../../utils/helpers';

const Card = ({
  card,
  onDeleteCard,
}: {
  card: CardType;
  onDeleteCard: (listId: string, cardId: string) => void;
}) => {
  return (
    <div className="card">
      <h1 className="card-title">{card.title}</h1>
      <p className="card-description">{card.description}</p>
      <span className="card-date">{formatDate(card.createdAt)}</span>
      <button className="card-delete-button" onClick={() => onDeleteCard(card.listId, card.id)}>
        삭제
      </button>
    </div>
  );
};

export default Card;
