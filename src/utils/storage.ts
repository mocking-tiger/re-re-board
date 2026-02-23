//db 대용

import { Board, Card, List } from '../types/types';
import { generateId } from './helpers';

const STORAGE_KEY = 'happy-2026';

export const initialBoard = () => {
  const boardId = generateId();
  const listId = generateId();
  const cardId = generateId();
  return {
    id: boardId,
    title: '나의 첫 보드',
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
};

export const saveBoard = (board: Board) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
};

export const getBoard = () => {
  const boardData = localStorage.getItem(STORAGE_KEY);
  if (!boardData) {
    return null;
  }

  const board = JSON.parse(boardData);

  // 로컬스토리지에는 문자열로 저장되니까 다시 Date객체로 변환
  board.lists.forEach((list: List) => {
    list.cards.forEach((card: Card) => {
      card.createdAt = new Date(card.createdAt);
    });
  });

  return board;
};

export const clearBoard = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};
