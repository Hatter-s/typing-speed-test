import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setWPM, setAcc, setStartTime, resetInfoData, setHighestWPM } from '../infoSlice';
import { setActiveStatus } from '@/features/word/wordSlice';

export const useInfo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    cursorIndex,
    mistake: mis,
    targetText,
    activeStatus,
  } = useAppSelector(state => state.word.data);
  const mode = useAppSelector(state => state.config.data.mode);
  const { wpm, accuracy, startTime } = useAppSelector(state => state.info.data);
  const [curTime, setCurTime] = useState(0);

  const TIME_LIMIT = 60;

  //* Handle start and stop logic
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (activeStatus === 'active') {
      dispatch(setStartTime(Date.now()));
    } else {
      timeoutId = setTimeout(() => setCurTime(0), 0);

      if (activeStatus === 'finish') {
        dispatch(setHighestWPM());
        navigate('results');
      } else {
        dispatch(resetInfoData());
      }
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeStatus, dispatch, navigate]);

  //* Timer
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    if (activeStatus === 'active' && startTime) {
      intervalId = setInterval(() => {
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - startTime) / 1000);

        if (elapsedSeconds >= TIME_LIMIT && mode === 'timed') {
          dispatch(setActiveStatus('finish'));
          setCurTime(0);
          clearInterval(intervalId);
        } else {
          setCurTime(elapsedSeconds);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [dispatch, activeStatus, startTime, mode]);

  //* Stats calculation
  useEffect(() => {
    if (curTime > 0 && cursorIndex > 0 && activeStatus === 'active') {
      dispatch(setWPM({ chars: cursorIndex, mis, time: curTime }));
      dispatch(setAcc({ chars: cursorIndex, correct: cursorIndex - mis }));
    }

    if (cursorIndex === targetText.length) {
      dispatch(setActiveStatus('finish'));
    }
  }, [dispatch, activeStatus, curTime, cursorIndex, mis, targetText.length]);

  return { curTime, wpm, accuracy, activeStatus, mode };
};
