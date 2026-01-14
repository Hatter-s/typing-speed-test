import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

export const useDropdown = () => {
  const dispatch = useAppDispatch();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const { difficulty: curDifficulty, mode: curMode } = useAppSelector(state => state.config.data);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        // Remove the 'open' attribute to close it
        detailsRef.current.removeAttribute('open');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return { dispatch, detailsRef, curDifficulty, curMode };
};
