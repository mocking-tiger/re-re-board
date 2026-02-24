import { useEffect, useReducer } from 'react';
import { boardReducer } from '../reducers/boardReducer';
import { getBoard, initialBoard, saveBoard } from '../utils/storage';

export const useBoard = () => {
  // 상태 관리
  const [board, dispatch] = useReducer(boardReducer, getBoard() || initialBoard());

  // 자동 저장
  useEffect(() => {
    saveBoard(board);
  }, [board]);

  // 액션 함수들
  const addList = () => {
    dispatch({ type: 'ADD_LIST' });
  };

  const deleteList = (listId: string) => {
    dispatch({ type: 'DELETE_LIST', payload: { listId } });
  };

  const addCard = (listId: string) => {
    dispatch({ type: 'ADD_CARD', payload: { listId } });
  };

  const deleteCard = (listId: string, cardId: string) => {
    dispatch({ type: 'DELETE_CARD', payload: { listId, cardId } });
  };

  return { board, addList, deleteList, addCard, deleteCard };
};
