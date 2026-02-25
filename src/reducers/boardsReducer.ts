import { BoardsState, Board } from '../types/types';
import { generateId, getNextDisplayOrder } from '../utils/helpers';

export type BoardsAction =
  | { type: 'ADD_BOARD' }
  | { type: 'SELECT_BOARD'; payload: { boardId: string } }
  | { type: 'DELETE_BOARD'; payload: { boardId: string } };

export const boardsReducer = (state: BoardsState, action: BoardsAction) => {
  switch (action.type) {
    case 'ADD_BOARD':
      const newBoard: Board = {
        id: generateId(),
        title: '새 보드',
        displayOrder: getNextDisplayOrder(state.boards),
        lists: [],
      };
      return {
        ...state,
        boards: [...state.boards, newBoard],
      };
    case 'SELECT_BOARD':
      return { ...state, selectedBoardId: action.payload.boardId };
    case 'DELETE_BOARD':
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== action.payload.boardId),
      };
  }
};
