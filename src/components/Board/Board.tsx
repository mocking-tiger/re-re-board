import './Board.css';
import List from '../List/List';
import Button from '../UI/Button/Button';
import { useBoard } from '../../hooks/useBoard';

const Board = () => {
  // 로직은 커스텀 훅에서 관리
  const { board, addList, deleteList, addCard, deleteCard } = useBoard();

  // UI에만 집중
  return (
    <div className="board">
      <h1 className="board-title">{board.title}</h1>
      <div className="board-lists">
        {board.lists.map((list) => (
          <List
            key={list.id}
            list={list}
            onDeleteList={deleteList}
            onAddCard={addCard}
            onDeleteCard={deleteCard}
          />
        ))}
        <Button className="list-add-button" onClick={addList}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Board;
