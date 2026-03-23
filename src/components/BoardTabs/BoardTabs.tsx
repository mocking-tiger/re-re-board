import './BoardTabs.css';
import { Board as BoardType } from '../../types/types';

const BoardTabs = ({
  boards,
  selectedBoardId,
  onAddBoard,
  onSelectBoard,
}: {
  boards: BoardType[];
  selectedBoardId: string;
  onAddBoard: () => void;
  onSelectBoard: (boardId: string) => void;
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
        </div>
      ))}
      <button className="board-tab-add" onClick={onAddBoard}>
        +
      </button>
    </div>
  );
};

export default BoardTabs;
