import './Board.css';
import List from '../List/List';
import { useState } from 'react';
import { Board as BoardType } from '../../types/types';
import { getBoard, initialBoard } from '../../utils/storage';

const Board = () => {
  const [board, setBoard] = useState<BoardType | null>(() => getBoard() || initialBoard());

  const addCard = (listId: string, title: string) => {};

  const deleteCard = (listId: string, cardId: string) => {
    if (!board) return;

    setBoard({
      ...board,
      lists: board.lists.map((list) =>
        list.id === listId
          ? { ...list, cards: list.cards.filter((card) => card.id !== cardId) }
          : list
      ),
    });
  };

  if (!board) {
    return <div>보드를 불러오는 중...</div>;
  }
  console.log(board);
  return (
    <div className="board">
      <h1 className="board-title">{board.title}</h1>
      <div className="board-lists">
        {board.lists.map((list) => (
          <List key={list.id} list={list} onAddCard={addCard} onDeleteCard={deleteCard} />
        ))}
      </div>
    </div>
  );
};

export default Board;
