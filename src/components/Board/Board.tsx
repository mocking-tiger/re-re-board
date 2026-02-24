import './Board.css';
import List from '../List/List';
import { useState } from 'react';
import { Board as BoardType, Card as CardType } from '../../types/types';
import { getBoard, initialBoard, saveBoard } from '../../utils/storage';
import { generateId, getNextDisplayOrder } from '../../utils/helpers';

const Board = () => {
  const [board, setBoard] = useState<BoardType | null>(() => getBoard() || initialBoard());

  const addCard = (listId: string) => {
    if (!board) return;

    const newCard: CardType = {
      id: generateId(),
      title: '새 카드',
      description: '내용을 입력하세요',
      displayOrder: getNextDisplayOrder(
        board.lists.find((list) => list.id === listId)?.cards || []
      ),
      createdAt: new Date(),
      listId,
    };

    const newBoard = {
      ...board,
      lists: board.lists.map((list) =>
        list.id === listId ? { ...list, cards: [...list.cards, newCard] } : list
      ),
    };
    setBoard(newBoard);
    saveBoard(newBoard);
  };

  const deleteCard = (listId: string, cardId: string) => {
    if (!board) return;

    const newBoard = {
      ...board,
      lists: board.lists.map((list) =>
        list.id === listId
          ? { ...list, cards: list.cards.filter((card) => card.id !== cardId) }
          : list
      ),
    };
    setBoard(newBoard);
    saveBoard(newBoard);
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
