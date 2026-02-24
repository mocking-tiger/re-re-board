import './Board.css';
import List from '../List/List';
import Button from '../UI/Button/Button';
import { useState } from 'react';
import { generateId, getNextDisplayOrder } from '../../utils/helpers';
import { getBoard, initialBoard, saveBoard } from '../../utils/storage';
import { Board as BoardType, List as ListType, Card as CardType } from '../../types/types';

const Board = () => {
  const [board, setBoard] = useState<BoardType | null>(() => getBoard() || initialBoard());

  const addList = () => {
    if (!board) return;

    const newList: ListType = {
      id: generateId(),
      title: '새 리스트',
      cards: [],
      displayOrder: getNextDisplayOrder(board.lists),
      boardId: board.id,
    };

    const newBoard = {
      ...board,
      lists: [...board.lists, newList],
    };
    setBoard(newBoard);
    saveBoard(newBoard);
  };

  const deleteList = (listId: string) => {
    if (!board) return;

    const newBoard = {
      ...board,
      lists: board.lists.filter((list) => list.id !== listId),
    };
    setBoard(newBoard);
    saveBoard(newBoard);
  };

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
          <List
            key={list.id}
            list={list}
            onDeleteList={deleteList}
            onAddCard={addCard}
            onDeleteCard={deleteCard}
          />
        ))}
        <Button className="board-add-list-button" onClick={addList}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Board;
