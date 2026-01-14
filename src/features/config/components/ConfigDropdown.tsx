import iconDownArrow from '@/assets/images/icon-down-arrow.svg';
import { setDifficulty, setMode } from '../configSlice';
import { useDropdown } from '@/features/config/hooks/useDropdown';

import type { ModeType, DifficultyType, Config } from '@/type';

interface DiffDropdownProps {
  difficulty: Config<DifficultyType>[];
}

interface ModeDropdownProps {
  mode: Config<ModeType>[];
}

export const DiffDropdown = ({ difficulty }: DiffDropdownProps) => {
  const { dispatch, detailsRef, curDifficulty } = useDropdown();

  return (
    <details ref={detailsRef} className="config-dropdown">
      <summary>
        <p className="capitalize">{curDifficulty}</p>
        <img src={iconDownArrow} alt="icon-down-arrow" />
      </summary>

      <div className="dropdown-content">
        <fieldset className="flex flex-col">
          {difficulty.map(d => (
            <label
              key={d.id}
              className="group flex cursor-pointer items-center gap-3 border-b border-neutral-700 px-125 py-100 select-none first:pt-125 last:border-b-0 last:pb-125"
            >
              <input
                type="radio"
                name="difficulty"
                value={d.id}
                className="peer sr-only" // Hidden, but accessible
                onClick={() => {
                  dispatch(setDifficulty(d.id));
                  detailsRef.current?.removeAttribute('open');
                }}
                checked={d.id === curDifficulty}
              />

              {/* THE CUSTOM RADIO CIRCLE */}
              <div
                className={`border-neutral-0 group-hover:border-neutral-0 flex h-200 w-200 items-center justify-center rounded-full border bg-transparent text-transparent peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-neutral-900 group-hover:peer-checked:border-blue-400`}
              >
                <div className="h-75 w-75 rounded-full bg-current" />
              </div>

              <span className="text-neutral-0 cus-text-5 capitalize">{d.title}</span>
            </label>
          ))}
        </fieldset>
      </div>
    </details>
  );
};

export const ModeDropdown = ({ mode }: ModeDropdownProps) => {
  const { dispatch, detailsRef, curMode } = useDropdown();

  return (
    <details ref={detailsRef} className="config-dropdown">
      <summary>
        <p>{curMode == 'timed' ? 'Timed (60s)' : 'Passage'}</p>
        <img src={iconDownArrow} alt="icon-down-arrow" />
      </summary>

      <div className="dropdown-content">
        <fieldset className="flex flex-col">
          {mode.map(m => (
            <label
              key={m.id}
              className="group flex cursor-pointer items-center gap-3 border-b border-neutral-700 px-125 py-100 select-none first:pt-125 last:border-b-0 last:pb-125"
            >
              <input
                type="radio"
                name="mode"
                value={m.id}
                className="peer sr-only" // Hidden, but accessible
                onClick={() => {
                  dispatch(setMode(m.id));
                  detailsRef.current?.removeAttribute('open');
                }}
                checked={m.id === curMode}
              />

              {/* THE CUSTOM RADIO CIRCLE */}
              <div
                className={`border-neutral-0 group-hover:border-neutral-0 flex h-200 w-200 items-center justify-center rounded-full border bg-transparent text-transparent peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-neutral-900 group-hover:peer-checked:border-blue-400`}
              >
                <div className="h-75 w-75 rounded-full bg-current" />
              </div>

              <span className="text-neutral-0 cus-text-5 capitalize">{m.title}</span>
            </label>
          ))}
        </fieldset>
      </div>
    </details>
  );
};
