import './Board.css';
import List from '../List/List';
import Button from '../UI/Button/Button';
// import { useBoard } from '../../hooks/useBoard';
import BoardStats from './_components/BoardStats/BoardStats';
import { Board as BoardType, List as ListType } from '../../types/types';

const Board = ({ board }: { board: BoardType }) => {
  // 로직은 커스텀 훅에서 관리
  // const { board, addList, deleteList, addCard, deleteCard } = useBoard();

  // UI에만 집중
  return (
    <div className="board">
      <div className="board-header">
        <h1 className="board-title">{board.title}</h1>
        <BoardStats board={board} />
      </div>
      <div className="board-lists">
        {board.lists.map((list: ListType) => (
          <List
            key={list.id}
            list={list}
            onDeleteList={() => {}}
            onAddCard={() => {}}
            onDeleteCard={() => {}}
          />
        ))}
        <Button className="list-add-button" onClick={() => {}}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Board;
