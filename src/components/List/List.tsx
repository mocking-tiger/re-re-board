import './List.css';
import Card from '../Card/Card';
import { List as ListType } from '../../types/types';

const List = ({
  list,
  onAddCard,
  onDeleteCard,
}: {
  list: ListType;
  onAddCard: (listId: string) => void;
  onDeleteCard: (listId: string, cardId: string) => void;
}) => {
  return (
    <div className="list">
      <h1 className="list-title">{list.title}</h1>
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
