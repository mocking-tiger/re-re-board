import { useEffect, useReducer } from 'react';
import { getBoards, initialBoards, saveBoards } from '../utils/storage';
import { boardsReducer } from '../reducers/boardsReducer';

export const useBoards = () => {
  const [boardsState] = useReducer(boardsReducer, getBoards() || initialBoards());

  useEffect(() => {
    saveBoards(boardsState);
  }, [boardsState]);

  return { boards: boardsState };
};
