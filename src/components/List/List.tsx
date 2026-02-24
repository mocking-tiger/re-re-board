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
    onDeleteList: (listId: string) => void;
    onAddCard: (listId: string) => void;
    onDeleteCard: (listId: string, cardId: string) => void;
  }) => {
    console.log('리스트', list.id, '렌더링');

    return (
      <div className="list">
        <h1 className="list-title">
          {list.title} ({list.cards.length})
        </h1>
        <Button className="list-delete-button" onClick={() => onDeleteList(list.id)}>
          x
        </Button>

        <div className="list-cards">
          {list.cards.map((card) => (
            <Card key={card.id} card={card} onDeleteCard={onDeleteCard} />
          ))}
        </div>
        <Button className="card-add-button" onClick={() => onAddCard(list.id)}>
          +
        </Button>
      </div>
    );
  }
);

export default List;
