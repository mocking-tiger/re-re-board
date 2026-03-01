import { BoardsState, Board, Card, List } from '../types/types';
import { generateId, getNextDisplayOrder } from '../utils/helpers';

export type BoardsAction =
  | { type: 'ADD_BOARD' }
  | { type: 'SELECT_BOARD'; payload: { boardId: string } }
  | { type: 'DELETE_BOARD'; payload: { boardId: string } }
  | { type: 'ADD_LIST'; payload: { boardId: string } }
  | { type: 'DELETE_LIST'; payload: { boardId: string; listId: string } }
  | { type: 'ADD_CARD'; payload: { boardId: string; listId: string } }
  | { type: 'DELETE_CARD'; payload: { boardId: string; listId: string; cardId: string } };

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

    case 'ADD_LIST': {
      const selectedBoard: Board | undefined = state.boards.find(
        (board) => board.id === action.payload.boardId
      );
      if (!selectedBoard) return state;

      const newList: List = {
        id: generateId(),
        title: '새 리스트',
        cards: [],
        displayOrder: getNextDisplayOrder(selectedBoard.lists),
        boardId: selectedBoard.id,
      };
      return {
        ...state,
        boards: state.boards.map((board: Board) =>
          board.id === selectedBoard.id
            ? { ...selectedBoard, lists: [...selectedBoard.lists, newList] }
            : board
        ),
      };
    }

    case 'DELETE_LIST': {
      const selectedBoard: Board | undefined = state.boards.find(
        (board) => board.id === action.payload.boardId
      );
      if (!selectedBoard) return state;

      return {
        ...state,
        boards: state.boards.map((board: Board) =>
          board.id === selectedBoard.id
            ? {
                ...selectedBoard,
                lists: selectedBoard.lists.filter(
                  (list: List) => list.id !== action.payload.listId
                ),
              }
            : board
        ),
      };
    }

    case 'ADD_CARD': {
      const selectedBoard: Board | undefined = state.boards.find(
        (board) => board.id === action.payload.boardId
      );
      if (!selectedBoard) return state;

      const selectedList: List | undefined = selectedBoard.lists.find(
        (list) => list.id === action.payload.listId
      );
      if (!selectedList) return state;

      const newCard: Card = {
        id: generateId(),
        title: '새 카드',
        description: '내용을 입력하세요',
        displayOrder: getNextDisplayOrder(selectedList.cards),
        createdAt: new Date(),
        listId: selectedList.id,
      };
      return {
        ...state,
        boards: state.boards.map((board: Board) =>
          board.id === selectedBoard.id
            ? {
                ...selectedBoard,
                lists: selectedBoard.lists.map((list: List) =>
                  list.id === selectedList.id ? { ...list, cards: [...list.cards, newCard] } : list
                ),
              }
            : board
        ),
      };
    }

    case 'DELETE_CARD': {
      const selectedBoard: Board | undefined = state.boards.find(
        (board) => board.id === action.payload.boardId
      );
      if (!selectedBoard) return state;

      const selectedList: List | undefined = selectedBoard.lists.find(
        (list) => list.id === action.payload.listId
      );
      if (!selectedList) return state;

      const selectedCard: Card | undefined = selectedList.cards.find(
        (card) => card.id === action.payload.cardId
      );
      if (!selectedCard) return state;

      return {
        ...state,
        boards: state.boards.map((board) =>
          board.id === selectedBoard.id
            ? {
                ...selectedBoard,
                lists: board.lists.map((list) =>
                  list.id === selectedList.id
                    ? {
                        ...list,
                        cards: list.cards.filter((card) => card.id !== selectedCard.id),
                      }
                    : list
                ),
              }
            : board
        ),
      };
    }
    default:
      return state;
  }
};
