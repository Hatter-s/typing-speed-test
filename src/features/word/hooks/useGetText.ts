import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { resetInfo, fetchTypingText } from '../wordSlice';

export const useGetText = () => {
  const dispatch = useAppDispatch();
  const { difficulty } = useAppSelector(state => state.config.data);

  const handleGetText = useCallback(() => {
    dispatch(resetInfo());
    dispatch(fetchTypingText(difficulty));
  }, [dispatch, difficulty]);

  return { handleGetText };
};
