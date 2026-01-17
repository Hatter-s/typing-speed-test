import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { resetWordData, fetchTypingText } from '../wordSlice';

export const useGetText = () => {
  const dispatch = useAppDispatch();
  const { difficulty, mode } = useAppSelector(state => state.config.data);
  const activeStatus = useAppSelector(state => state.word.data.activeStatus);

  const handleGetText = useCallback(() => {
    if (difficulty || mode)
      //* just for add dependence mode
      dispatch(resetWordData());
    dispatch(fetchTypingText(difficulty));
  }, [dispatch, difficulty, mode]);

  return { handleGetText, activeStatus };
};
