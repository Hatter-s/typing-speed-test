import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setWPM, setAcc, setStartTime, resetInfo, setHighestWPM } from '../infoSlice';
import { deactivateTyping } from '@/features/word/wordSlice';

export const useInfo = () => {
  const dispatch = useAppDispatch();
  const {
    isActive,
    cursorIndex,
    mistake: mis,
    targetText,
  } = useAppSelector(state => state.word.data);
  const { wpm, accuracy, startTime } = useAppSelector(state => state.info.data);
  const TIME_LIMIT = 60;

  const [curTime, setCurTime] = useState(0);
  //* Handle start and stop logic
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (isActive) {
      dispatch(setStartTime(Date.now()));
    } else {
      timeoutId = setTimeout(() => setCurTime(0), 0);
      dispatch(resetInfo());
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isActive, dispatch]);

  //* Timer
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    if (isActive && startTime) {
      intervalId = setInterval(() => {
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - startTime) / 1000);

        if (elapsedSeconds >= TIME_LIMIT) {
          dispatch(deactivateTyping());
          dispatch(setHighestWPM());
          setCurTime(0);
          clearInterval(intervalId);
        } else {
          setCurTime(elapsedSeconds);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [dispatch, isActive, startTime]);

  //* Stats calculation
  useEffect(() => {
    if (curTime > 0 && cursorIndex > 0 && isActive) {
      dispatch(setWPM({ chars: cursorIndex, mis, time: curTime }));
      dispatch(setAcc({ chars: cursorIndex, correct: cursorIndex - mis }));
    }

    if (cursorIndex === targetText.length) {
      dispatch(setHighestWPM());
    }
  }, [dispatch, isActive, curTime, cursorIndex, mis, targetText.length]);

  return { curTime, wpm, accuracy, isActive };
};
