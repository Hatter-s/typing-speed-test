import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { setMode, setDifficulty } from '../configSlice';
import { cn } from '@/utils/cn';
import { DiffDropdown, ModeDropdown } from './ConfigDropdown';
import type { ModeType, DifficultyType, Config } from '@/type';

const difficulty: Config<DifficultyType>[] = [
  { title: 'easy', id: 'easy' },
  { title: 'medium', id: 'medium' },
  { title: 'hard', id: 'hard' },
];
const mode: Config<ModeType>[] = [
  { title: 'Timed (60s)', id: 'timed' },
  { title: 'passage', id: 'passage' },
];

export default function ConfigsWarper() {
  const dispatch = useAppDispatch();
  const { mode: curMode, difficulty: curDifficulty } = useAppSelector(state => state.config.data);

  return (
    <>
      <div className="hidden flex-row flex-nowrap gap-200 md:flex">
        <div className="config-warper">
          <p className="title">Difficulty:</p>
          {difficulty.map(d => (
            <button
              key={d.id}
              className={cn('button-select', {
                'button-selected': curDifficulty === d.id,
              })}
              onClick={() => dispatch(setDifficulty(d.id))}
            >
              {d.title}
            </button>
          ))}
        </div>
        <div className="border-r border-neutral-700"></div>
        <div className="config-warper">
          <p className="title">Mode:</p>
          {mode.map(m => (
            <button
              key={m.id}
              className={cn('button-select', {
                'button-selected': curMode === m.id,
              })}
              onClick={() => dispatch(setMode(m.id))}
            >
              {m.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-row flex-nowrap gap-125 md:hidden">
        <DiffDropdown difficulty={difficulty} />
        <ModeDropdown mode={mode} />
      </div>
    </>
  );
}
