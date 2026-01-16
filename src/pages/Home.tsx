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
          className="flex flex-col gap-y-200 xl:flex-row xl:justify-between"
        >
          <InfoContainer />
          <ConfigsWarper />
        </div>
        <WordContainer />
      </section>
      <section className="custom-container mb-300 flex flex-col flex-nowrap items-center gap-300 md:mb-500 lg:gap-400">
        <hr className="w-full border-neutral-700" />
        <RestartBtn />
      </section>
    </>
  );
}
