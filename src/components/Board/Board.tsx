import './Board.css';
import List from '../List/List';
import Button from '../UI/Button/Button';
import BoardStats from './_components/BoardStats/BoardStats';
import { Board as BoardType, List as ListType } from '../../types/types';
import { memo, useCallback } from 'react';

const Board = memo(
  ({
    board,
    onAddList,
    onDeleteList,
    onAddCard,
  }: {
    board: BoardType;
    onAddList: (boardId: string) => void;
    onDeleteList: (boardId: string, listId: string) => void;
    onAddCard: (boardId: string, listId: string) => void;
  }) => {
    const tempFn = useCallback(() => {
      console.log('tempFn');
    }, []);
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
              boardId={board.id}
              list={list}
              onDeleteList={onDeleteList}
              onAddCard={onAddCard}
              onDeleteCard={tempFn}
            />
          ))}
          <Button className="list-add-button" onClick={() => onAddList(board.id)}>
            +
          </Button>
        </div>
      </div>
    );
  }
);

export default Board;
