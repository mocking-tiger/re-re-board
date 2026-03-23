import './App.css';
import Board from './components/Board/Board';
import { clearBoards } from './utils/storage';
import { useBoards } from './hooks/useBoards';
import { Board as BoardType } from './types/types';
import BoardTabs from './components/BoardTabs/BoardTabs';

const App = () => {
  const {
    boardsState,
    addBoard,
    selectBoard,
    deleteBoard,
    addList,
    deleteList,
    addCard,
    deleteCard,
  } = useBoards();
  const selectedBoard: BoardType | undefined = boardsState.boards.find(
    (board) => board.id === boardsState.selectedBoardId
  );

  // 보드가 선택되지 않았을 경우 첫 번째 보드를 선택
  if (!selectedBoard) {
    selectBoard(boardsState.boards[0].id);
    return;
  }

  return (
    <div className="App">
      <BoardTabs
        boards={boardsState.boards}
        selectedBoardId={boardsState.selectedBoardId}
        onAddBoard={addBoard}
        onSelectBoard={selectBoard}
        onDeleteBoard={deleteBoard}
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
