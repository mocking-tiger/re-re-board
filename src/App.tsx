import './App.css';
import Board from './components/Board/Board';
import { clearBoards } from './utils/storage';
import { useBoards } from './hooks/useBoards';
import { Board as BoardType } from './types/types';
import BoardTabs from './components/BoardTabs/BoardTabs';

const App = () => {
  const { boardsState, addBoard, selectBoard, addList, deleteList, addCard, deleteCard } =
    useBoards();
  const selectedBoard: BoardType | undefined = boardsState.boards.find(
    (board) => board.id === boardsState.selectedBoardId
  );
  if (boardsState.boards.length === 0 || !selectedBoard) {
    return <div>보드 데이터 로드 실패</div>;
  }
  return (
    <div className="App">
      <BoardTabs
        boards={boardsState.boards}
        selectedBoardId={boardsState.selectedBoardId}
        onAddBoard={addBoard}
        onSelectBoard={selectBoard}
      />
      <Board
        board={selectedBoard}
        onAddList={addList}
        onDeleteList={deleteList}
        onAddCard={addCard}
        onDeleteCard={deleteCard}
      />
      <button className="reset-button" onClick={clearBoards}>
        보드 초기화
      </button>
    </div>
  );
};

export default App;
