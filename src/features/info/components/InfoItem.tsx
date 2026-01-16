import { cn } from '@/utils/cn';
import type { ClassValue } from 'clsx';
import type { ReactNode } from 'react';

interface InfoItemProps {
  title: string;
  value: number;
  before?: ReactNode;
  after?: ReactNode;
  classStyle?: ClassValue;
}

export default function InfoItem({
  title,
  value,
  before,
  after,
  classStyle,
}: Readonly<InfoItemProps>) {
  return (
    <div className="flex min-w-21.75 flex-col items-center gap-x-150 gap-y-100 md:flex-row">
      <p className="cus-text-3 mx-auto text-neutral-400 capitalize">{title}:</p>
      <p className={cn('cus-text-2 mx-auto', classStyle)}>
        {before}
        {value}
        {after}
      </p>
    </div>
  );
}
