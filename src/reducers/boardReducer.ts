import { Board, Card, List } from '../types/types';
import { generateId, getNextDisplayOrder } from '../utils/helpers';

export type BoardAction =
  | { type: 'ADD_LIST' }
  | { type: 'DELETE_LIST'; payload: { listId: string } }
  | { type: 'ADD_CARD'; payload: { listId: string } }
  | { type: 'DELETE_CARD'; payload: { listId: string; cardId: string } };

export const boardReducer = (state: Board, action: BoardAction) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'ADD_LIST':
      const newList: List = {
        id: generateId(),
        title: '새 리스트',
        cards: [],
        displayOrder: getNextDisplayOrder(state.lists),
        boardId: state.id,
      };
      return {
        ...state,
        lists: [...state.lists, newList],
      };

    case 'DELETE_LIST':
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload.listId),
      };

    case 'ADD_CARD':
      const list = state.lists.find((list) => list.id === action.payload.listId);

      if (!list) {
        return state;
      }

      const newCard: Card = {
        id: generateId(),
        title: '새 카드',
        description: '내용을 입력하세요',
        displayOrder: getNextDisplayOrder(list.cards),
        createdAt: new Date(),
        listId: action.payload.listId,
      };

      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: [...list.cards, newCard],
              }
            : list
        ),
      };

    case 'DELETE_CARD':
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? { ...list, cards: list.cards.filter((card) => card.id !== action.payload.cardId) }
            : list
        ),
      };
    default:
      return state;
  }
};
