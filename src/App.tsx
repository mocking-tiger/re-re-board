import './App.css';
import Board from './components/Board/Board';
import { clearBoards } from './utils/storage';
import { useBoards } from './hooks/useBoards';
import { Board as BoardType } from './types/types';

const App = () => {
  const { boardsState, addList, deleteList, addCard } = useBoards();
  console.log({ boardsState });
  const selectedBoard = boardsState.boards.find(
    (board) => board.id === boardsState.selectedBoardId
  );
  if (boardsState.boards.length === 0 || !selectedBoard) {
    return <div>보드 데이터 로드 실패</div>;
  }
  return (
    <div className="App">
      <Board
        board={selectedBoard as BoardType}
        onAddList={addList}
        onDeleteList={deleteList}
        onAddCard={addCard}
      />
      <button className="reset-button" onClick={clearBoards}>
        보드 초기화
      </button>
    </div>
  );
};

export default App;
