import './BoardTabs.css';
import { Board as BoardType } from '../../types/types';
import Button from '../UI/Button/Button';

const BoardTabs = ({
  boards,
  selectedBoardId,
  onAddBoard,
  onSelectBoard,
  onDeleteBoard,
}: {
  boards: BoardType[];
  selectedBoardId: string;
  onAddBoard: () => void;
  onSelectBoard: (boardId: string) => void;
  onDeleteBoard: (boardId: string) => void;
}) => {
  return (
    <div className="board-tabs">
      {boards.map((board) => (
        <div
          key={board.id}
          className={`board-tab ${selectedBoardId === board.id ? 'selected' : ''}`}
          onClick={() => onSelectBoard(board.id)}
        >
          {board.title}
          <Button className="board-tab-delete" onClick={() => onDeleteBoard(board.id)}>
            x
          </Button>
        </div>
      ))}
      <button className="board-tab-add" onClick={onAddBoard}>
        +
      </button>
    </div>
  );
};

export default BoardTabs;
