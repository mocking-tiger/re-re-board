import { boardsReducer } from '../reducers/boardsReducer';
import { useCallback, useEffect, useReducer } from 'react';
import { getBoards, initialBoards, saveBoards } from '../utils/storage';

export const useBoards = () => {
  const [boardsState, dispatch] = useReducer(boardsReducer, getBoards() || initialBoards());

  useEffect(() => {
    console.log('boardsState', boardsState);
    saveBoards(boardsState);
  }, [boardsState]);

  const addList = useCallback((boardId: string) => {
    dispatch({ type: 'ADD_LIST', payload: { boardId } });
  }, []);

  const deleteList = useCallback((boardId: string, listId: string) => {
    dispatch({ type: 'DELETE_LIST', payload: { boardId, listId } });
  }, []);

  const addCard = useCallback((boardId: string, listId: string) => {
    dispatch({ type: 'ADD_CARD', payload: { boardId, listId } });
  }, []);

  return { boardsState, addList, deleteList, addCard };
};
