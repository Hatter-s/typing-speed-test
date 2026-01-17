import iconRestart from '@/assets/images/icon-restart.svg';
import { useGetText } from '../hooks/useGetText';

export default function RestartBtn() {
  const { handleGetText, activeStatus } = useGetText();
  if (activeStatus !== 'active') {
    return;
  }

  return (
    <button className="button-restart w-fit" onClick={handleGetText}>
      Restart Test <img src={iconRestart} alt="icon-restart" />
    </button>
  );
}
