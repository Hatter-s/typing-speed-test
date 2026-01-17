import ConfigsWarper from '@/features/config/components/ConfigsWarper';
import InfoContainer from '@/features/info/components/InfoContainer';
import RestartBtn from '@/features/word/components/RestartBtn';
import WordContainer from '@/features/word/components/WordContainer';

export default function Home() {
  return (
    <>
      <section className="custom-container flex flex-col gap-250 py-400 md:py-500 lg:py-800">
        <div
          id="info-config-bar"
          className="flex flex-col gap-y-200 xl:flex-row xl:justify-between"
        >
          <InfoContainer />
          <ConfigsWarper />
        </div>
        <WordContainer />
      </section>

      <RestartBtn />
    </>
  );
}
