import './List.css';
import Card from '../Card/Card';
import { List as ListType } from '../../types/types';
import { useState } from 'react';

const List = ({
  list,
  onDeleteList,
  onAddCard,
  onDeleteCard,
}: {
  list: ListType;
  onDeleteList: (listId: string) => void;
  onAddCard: (listId: string) => void;
  onDeleteCard: (listId: string, cardId: string) => void;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="list"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h1 className="list-title">{list.title}</h1>
      <button
        className="list-delete-button"
        onClick={() => onDeleteList(list.id)}
        style={{ display: isHovering ? 'block' : 'none' }}
      >
        x
      </button>
      <div className="list-cards">
        {list.cards.map((card) => (
          <Card key={card.id} card={card} onDeleteCard={onDeleteCard} />
        ))}
      </div>
      <button className="list-add-card-button" onClick={() => onAddCard(list.id)}>
        +
      </button>
    </div>
  );
};

export default List;
