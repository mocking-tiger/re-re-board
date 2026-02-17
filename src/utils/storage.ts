//db 대용

import { Board, Card, List } from '../types/types';

const STORAGE_KEY = 'happy-2026';

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
      card.createdAt = new Date();
    });
  });
  return JSON.parse(board);
};

export const clearBoard = () => {
  localStorage.removeItem(STORAGE_KEY);
};
