import './List.css';
import Card from '../Card/Card';
import Button from '../UI/Button/Button';
import { List as ListType } from '../../types/types';
import { memo } from 'react';

const List = memo(
  ({
    list,
    onDeleteList,
    onAddCard,
    onDeleteCard,
  }: {
    list: ListType;
    onDeleteList: (boardId: string, listId: string) => void;
    onAddCard: (boardId: string, listId: string) => void;
    onDeleteCard: (boardId: string, listId: string, cardId: string) => void;
  }) => {
    const handleDeleteCard = (listId: string, cardId: string) => {
      onDeleteCard(list.boardId, listId, cardId);
    };

    return (
      <div className="list">
        <h1 className="list-title">
          {list.title} ({list.cards.length})
        </h1>
        <Button className="list-delete-button" onClick={() => onDeleteList(list.boardId, list.id)}>
          x
        </Button>

        <div className="list-cards">
          {list.cards.map((card) => (
            <Card key={card.id} card={card} onDeleteCard={handleDeleteCard} />
          ))}
        </div>
        <Button className="card-add-button" onClick={() => onAddCard(list.boardId, list.id)}>
          +
        </Button>
      </div>
    );
  }
);

export default List;
