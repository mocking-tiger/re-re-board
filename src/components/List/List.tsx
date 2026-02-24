import './List.css';
import Card from '../Card/Card';
import Button from '../UI/Button/Button';
import { List as ListType } from '../../types/types';

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
  return (
    <div className="list">
      <h1 className="list-title">{list.title}</h1>
      <Button className="list-delete-button" onClick={() => onDeleteList(list.id)}>
        x
      </Button>

      <div className="list-cards">
        {list.cards.map((card) => (
          <Card key={card.id} card={card} onDeleteCard={onDeleteCard} />
        ))}
      </div>
      <Button className="list-add-button" onClick={() => onAddCard(list.id)}>
        +
      </Button>
    </div>
  );
};

export default List;
