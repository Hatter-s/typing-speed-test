import iconPersonalBest from '@/assets/images/icon-personal-best.svg';
import { useAppSelector } from '@/app/store/hooks';

export default function HightestWPM() {
  const highestWPM = useAppSelector(state => state.info.data?.highestWPM);

  return (
    <div className="flex flex-row flex-nowrap gap-125">
      <img src={iconPersonalBest} alt="icon-personal-best" className="h-200 md:h-4.5" />
      <p className="cus-text-4 flex flex-row flex-nowrap gap-50 text-neutral-400">
        <span className="block md:hidden">Best:</span>
        <span className="hidden md:block">Personal best:</span>
        <span className="text-neutral-0">{highestWPM ?? 0} WPM</span>
      </p>
    </div>
  );
}
