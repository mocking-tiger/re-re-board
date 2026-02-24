import './Board.css';
import List from '../List/List';
import Button from '../UI/Button/Button';
import { useEffect, useReducer } from 'react';
import { getBoard, initialBoard, saveBoard } from '../../utils/storage';
import { boardReducer } from '../../reducers/boardReducer';

const Board = () => {
  const [board, dispatch] = useReducer(boardReducer, null, () => getBoard() || initialBoard());

  useEffect(() => {
    saveBoard(board);
  }, [board]);

  return (
    <div className="board">
      <h1 className="board-title">{board.title}</h1>
      <div className="board-lists">
        {board.lists.map((list) => (
          <List
            key={list.id}
            list={list}
            onDeleteList={() => dispatch({ type: 'DELETE_LIST', payload: { listId: list.id } })}
            onAddCard={() => dispatch({ type: 'ADD_CARD', payload: { listId: list.id } })}
            onDeleteCard={(listId, cardId) =>
              dispatch({ type: 'DELETE_CARD', payload: { listId, cardId } })
            }
          />
        ))}
        <Button className="board-add-list-button" onClick={() => dispatch({ type: 'ADD_LIST' })}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Board;
