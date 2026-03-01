import './Card.css';
import Button from '../UI/Button/Button';
import { memo } from 'react';
import { formatDate } from '../../utils/helpers';
import { Card as CardType } from '../../types/types';

const Card = memo(
  ({
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
        <Button className="card-delete-button" onClick={() => onDeleteCard(card.listId, card.id)}>
          x
        </Button>
      </div>
    );
  }
);

export default Card;
