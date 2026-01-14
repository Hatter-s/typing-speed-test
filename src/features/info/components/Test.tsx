import { useAppDispatch } from '@/app/store/hooks';
import { setHighestWPM } from '../infoSlice';
export default function Test() {
  const dispatch = useAppDispatch();
  return (
    <button className="button-primary" onClick={() => dispatch(setHighestWPM(92))}>
      Change Highest WPM
    </button>
  );
}
