import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { typeChar, deleteChar, activateTyping, deactivateTyping } from '../wordSlice';
import { useGetText } from './useGetText';

export const useWord = () => {
  const dispatch = useAppDispatch();
  const { targetText, isActive, cursorIndex, charsStatus } = useAppSelector(
    state => state.word.data,
  );
  const activeCharRef = useRef<HTMLSpanElement>(null);
  const { handleGetText } = useGetText();

  const usedText = targetText?.split(' ').map((word, id, arr) => {
    if (arr.length - 1 === id) {
      return word;
    }

    return word + ' ';
  });

  const handleActivateTying = () => {
    dispatch(activateTyping());
  };

  const handleDeactivateTying = () => {
    dispatch(deactivateTyping());
  };

  useEffect(() => {
    handleGetText();
  }, [handleGetText]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // 1. GLOBAL GUARD: If test is finished, ignore input
      if (!isActive) return;

      const { key } = event;

      // 2. HANDLE ENTER (Deactivate)
      if (key === 'Enter') {
        event.preventDefault(); // Stop form submission or new lines
        return; // Do nothing else
      }

      // 3. HANDLE BACKSPACE
      if (key === 'Backspace') {
        dispatch(deleteChar());
        return;
      }

      // 4. HANDLE PRINTABLE CHARACTERS (Letters, Numbers, Symbols, Space)
      // Logic: If the key name is 1 character long, it's printable.
      // Logic: If it is "F1", "Tab", "Shift", "CapsLock", length is > 1, so we ignore.

      if (key.length === 1) {
        // Filter out keyboard shortcuts (Ctrl+C, Cmd+V, Alt+Tab)
        if (event.ctrlKey || event.metaKey || event.altKey) {
          return; // Let browser handle shortcuts
        }

        // Prevent Spacebar from scrolling the page down
        if (key === ' ') {
          event.preventDefault();
        }

        // Dispatch the character (Shift+a automatically becomes "A")
        dispatch(typeChar(key));
      }

      // 5. FUNCTION KEYS (F1, Tab, Escape, etc.)
      // Since we didn't catch them above, they fall through here.
      // We do NOTHING, so the browser default behavior happens (e.g., F5 refreshes).
    };

    globalThis.addEventListener('keydown', handleKeyDown);
    return () => globalThis.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, isActive]);

  useEffect(() => {
    if (activeCharRef.current) {
      // "scrollIntoView" is a native browser API
      activeCharRef.current.scrollIntoView({
        behavior: 'smooth', // 'auto' for instant, 'smooth' for animation
        block: 'center', // 'center' keeps the cursor in the middle of the box
        inline: 'nearest',
      });
    }
  }, [charsStatus.length]); // Dependency: Run this every time user types

  return {
    cursorIndex,
    isActive,
    charsStatus,
    usedText,
    activeCharRef,
    handleActivateTying,
    handleDeactivateTying,
  };
};
