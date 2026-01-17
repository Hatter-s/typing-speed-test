import iconRestart from '@/assets/images/icon-restart.svg';
import { useGetText } from '../hooks/useGetText';

export default function RestartBtn() {
  const { handleGetText, activeStatus } = useGetText();
  if (activeStatus !== 'active') {
    return;
  }

  return (
    <section className="custom-container mb-300 flex flex-col flex-nowrap items-center gap-300 md:mb-500 lg:gap-400">
      <hr className="w-full border-neutral-700" />
      <button className="button-restart w-fit" onClick={handleGetText}>
        Restart Test <img src={iconRestart} alt="icon-restart" />
      </button>
    </section>
  );
}
