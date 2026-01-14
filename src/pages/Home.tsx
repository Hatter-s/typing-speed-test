import ConfigsWarper from '@/features/config/components/ConfigsWarper';
import InfoContainer from '@/features/info/components/InfoContainer';
import RestartBtn from '@/features/word/components/RestartBtn';
import WordContainer from '@/features/word/components/WordContainer';

export default function Home() {
  return (
    <>
      <section className="custom-container flex flex-col gap-400 py-400 md:py-500 lg:py-800">
        <div
          id="info-config-bar"
          className="flex flex-col gap-y-200 lg:flex-row lg:justify-between"
        >
          <InfoContainer />
          <ConfigsWarper />
        </div>
        <WordContainer />
      </section>
      <section className="custom-container flex flex-col flex-nowrap items-center gap-300 lg:gap-400">
        <hr className="w-full border-neutral-700" />
        <RestartBtn />
      </section>
    </>
  );
}
