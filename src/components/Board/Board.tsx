import './Board.css';
import List from '../List/List';
import { useState } from 'react';
import { generateId } from '../../utils/helpers';
import { Board as BoardType, lists } from '../../types/types';

const Board = () => {
  const [board] = useState<BoardType>({
    id: generateId(),
    title: '더미 보드',
    lists,
  });
  return (
    <div className="board">
      <h1 className="board-title">{board.title}</h1>
      <div className="board-lists">
        {board.lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default Board;
