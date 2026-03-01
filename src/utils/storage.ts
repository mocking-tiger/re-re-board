//db 대용

import { generateId } from './helpers';
import { Board, BoardsState, Card, List } from '../types/types';

const BOARDS_STORAGE_KEY = 'happy-2026-boards';

export const initialBoard = () => {
  const boardId = generateId();
  const listId = generateId();
  const cardId = generateId();
  const newBoard: Board = {
    id: boardId,
    title: '나의 첫 보드',
    displayOrder: 1,
    lists: [
      {
        id: listId,
        title: '할 일',
        cards: [
          {
            id: cardId,
            title: '환영합니다!',
            description: '카드를 추가하고 목록을 관리해보세요.',
            displayOrder: 1,
            createdAt: new Date(),
            listId,
          },
        ],
        displayOrder: 1,
        boardId,
      },
    ],
  };

  return newBoard;
};

export const initialBoards = () => {
  const newBoard = initialBoard();
  return {
    boards: [newBoard],
    selectedBoardId: newBoard.id,
  };
};

export const saveBoards = (boards: BoardsState) => {
  localStorage.setItem(BOARDS_STORAGE_KEY, JSON.stringify(boards));
};

export const getBoards = () => {
  const boardsData = localStorage.getItem(BOARDS_STORAGE_KEY);
  if (!boardsData) {
    return null;
  }
  const boards = JSON.parse(boardsData);

  // 로컬스토리지에는 문자열로 저장되니까 다시 Date객체로 변환
  boards.boards.forEach((board: Board) => {
    board.lists.forEach((list: List) => {
      list.cards.forEach((card: Card) => {
        card.createdAt = new Date(card.createdAt);
      });
    });
  });
  return boards;
};

export const clearBoards = () => {
  localStorage.removeItem(BOARDS_STORAGE_KEY);
  window.location.reload();
};
