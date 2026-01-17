import { cn } from '@/utils/cn';
import { useWord } from '../hooks/useWord';

export default function WordContainer() {
  let cId = -1;
  const { cursorIndex, charsStatus, usedText, activeCharRef, handleActivateTying, activeStatus } =
    useWord();

  if (!usedText) return;

  return (
    <div className="relative flex flex-row flex-wrap border-t border-neutral-700 pt-400 pb-400 select-none md:pb-500 lg:pb-800">
      {activeStatus === 'inactive' && (
        <button
          type="button"
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-250 backdrop-blur-sm"
          onClick={handleActivateTying}
        >
          <span className="button-primary">Start Typing Text</span>
          <p className="cus-text-3-semi-bold">Or click the text and start typing</p>
        </button>
      )}

      {usedText.map((word, wId) => (
        <p key={`${wId}-${word}`} className="cus-text-1-regular">
          {word.split('').map(char => {
            cId++;
            return (
              <span
                id={`char-${cId}`}
                key={`char-${cId}`}
                ref={activeStatus === 'active' && cursorIndex === cId ? activeCharRef : null}
                className={cn('cus-text-1-regular inline-block text-neutral-400', {
                  'border-b-[3px] border-red-500 text-red-500': charsStatus[cId] === 0,
                  'text-green-500': charsStatus[cId] === 1,
                  'bg-neutral-0/20 rounded-4': cursorIndex === cId,
                  'w-125 text-transparent': char === ' ',
                })}
              >
                {char === ' ' ? 'k' : char}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}
