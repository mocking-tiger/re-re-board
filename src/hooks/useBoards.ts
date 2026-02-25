import { useCallback, useEffect, useReducer } from 'react';
import { getBoards, initialBoards, saveBoards } from '../utils/storage';
import { boardsReducer } from '../reducers/boardsReducer';

export const useBoards = () => {
  const [boardsState, dispatch] = useReducer(boardsReducer, getBoards() || initialBoards());

  useEffect(() => {
    console.log('boardsState', boardsState);
    saveBoards(boardsState);
  }, [boardsState]);

  const addCard = useCallback((boardId: string, listId: string) => {
    dispatch({ type: 'ADD_CARD', payload: { boardId, listId } });
  }, []);

  return { boardsState, addCard };
};
