import './List.css';
import Card from '../Card/Card';
import Button from '../UI/Button/Button';
import { List as ListType } from '../../types/types';
import { memo } from 'react';

const List = memo(
  ({
    list,
    boardId,
    onDeleteList,
    onAddCard,
    onDeleteCard,
  }: {
    list: ListType;
    boardId: string;
    onDeleteList: (boardId: string, listId: string) => void;
    onAddCard: (boardId: string, listId: string) => void;
    onDeleteCard: (listId: string, cardId: string) => void;
  }) => {
    return (
      <div className="list">
        <h1 className="list-title">
          {list.title} ({list.cards.length})
        </h1>
        <Button className="list-delete-button" onClick={() => onDeleteList(boardId, list.id)}>
          x
        </Button>

        <div className="list-cards">
          {list.cards.map((card) => (
            <Card key={card.id} card={card} onDeleteCard={onDeleteCard} />
          ))}
        </div>
        <Button className="card-add-button" onClick={() => onAddCard(boardId, list.id)}>
          +
        </Button>
      </div>
    );
  }
);

export default List;
