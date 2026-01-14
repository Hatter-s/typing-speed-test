import InfoItem from './InfoItem';
import { useInfo } from '../hooks/useInfo';

export default function InfoContainer() {
  const { curTime, wpm, accuracy, isActive } = useInfo();
  return (
    <div className="flex flex-row justify-center gap-x-250 md:justify-start md:gap-x-300">
      <InfoItem title="WPM" value={wpm} />
      <div className="w-px bg-neutral-700" />
      <InfoItem
        title="Accuracy"
        value={accuracy}
        after={'%'}
        classStyle={{
          'text-green-500': accuracy === 100 && isActive === true,
          'text-red-500': accuracy !== 100 && isActive === true,
        }}
      />
      <div className="w-px bg-neutral-700" />
      <InfoItem
        title="Time"
        value={60 - curTime}
        before={'0:'}
        classStyle={{
          'text-yellow-400': isActive === true,
        }}
      />
    </div>
  );
}
