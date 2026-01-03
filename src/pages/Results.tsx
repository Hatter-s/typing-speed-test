import iconCompleted from '@/assets/images/icon-completed.svg';
import undoIcon from '@/assets/images/icon-undo.svg';
import patternStar1 from '@/assets/images/pattern-star-1.svg';
import patternStar2 from '@/assets/images/pattern-star-2.svg';

export default function Results() {
  return (
    <>
      <img
        src={patternStar2}
        alt="pattern-start-2"
        className="fixed top-[124.5px] left-4.5 md:top-48.75 md:left-12 lg:top-62.75 lg:left-27.25"
      />
      <img
        src={patternStar1}
        alt="pattern-start-1"
        className="fixed top-183.25 right-7.25 md:top-155.75 md:right-8 lg:top-130.25 lg:right-27.5"
      />
      <section className="custom-container flex flex-col items-center justify-center gap-400 pt-400 md:pt-1000 lg:pt-800">
        <img src={iconCompleted} alt="icon-completed" className="w-600 md:w-800" />
        <div className="title">
          <p>This is results page</p>
        </div>
        <div className="result-display flex flex-col gap-200 py-200 md:flex-row md:justify-center md:gap-250 md:py-400">
          <p>Results display</p>
        </div>
        <button className="button-secondary">
          Go again <img src={undoIcon} className="logo react" alt="React logo" />
        </button>
      </section>
      <div id="confetti" className="hidden"></div>
    </>
  );
}
