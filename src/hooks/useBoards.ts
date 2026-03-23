import { boardsReducer } from '../reducers/boardsReducer';
import { useCallback, useEffect, useReducer } from 'react';
import { getBoards, initialBoards, saveBoards } from '../utils/storage';

export const useBoards = () => {
  const [boardsState, dispatch] = useReducer(boardsReducer, getBoards() || initialBoards());

  useEffect(() => {
    saveBoards(boardsState);
  }, [boardsState]);

  const addBoard = useCallback(() => {
    dispatch({ type: 'ADD_BOARD' });
  }, []);

  const selectBoard = useCallback((boardId: string) => {
    dispatch({ type: 'SELECT_BOARD', payload: { boardId } });
  }, []);

  const deleteBoard = useCallback(
    (boardId: string) => {
      if (boardsState.boards.length === 1) {
        alert('보드는 최소 1개 이상 유지되어야 합니다.');
        return;
      }
      dispatch({ type: 'DELETE_BOARD', payload: { boardId } });
    },
    [boardsState.boards.length]
  );

  const addList = useCallback((boardId: string) => {
    dispatch({ type: 'ADD_LIST', payload: { boardId } });
  }, []);

  const deleteList = useCallback((boardId: string, listId: string) => {
    dispatch({ type: 'DELETE_LIST', payload: { boardId, listId } });
  }, []);

  const addCard = useCallback((boardId: string, listId: string) => {
    dispatch({ type: 'ADD_CARD', payload: { boardId, listId } });
  }, []);

  const deleteCard = useCallback((boardId: string, listId: string, cardId: string) => {
    dispatch({ type: 'DELETE_CARD', payload: { boardId, listId, cardId } });
  }, []);

  return {
    boardsState,
    addBoard,
    selectBoard,
    deleteBoard,
    addList,
    deleteList,
    addCard,
    deleteCard,
  };
};
