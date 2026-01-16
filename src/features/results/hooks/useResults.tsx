import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

import { resetInfoData } from '@/features/info/infoSlice';
import { resetWordData } from '@/features/word/wordSlice';

export const useResults = () => {
  const dispatch = useAppDispatch();
  const { cursorIndex, mistake: mis, activeStatus } = useAppSelector(state => state.word.data);
  const { wpm, accuracy, resultStatus } = useAppSelector(state => state.info.data);
  const correct = useMemo(() => cursorIndex - mis, [cursorIndex, mis]);

  const handleGoBack = () => {
    dispatch(resetInfoData());
    dispatch(resetWordData());
  };

  return { wpm, accuracy, correct, mis, activeStatus, resultStatus, handleGoBack };
};
