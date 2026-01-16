import iconCompleted from '@/assets/images/icon-completed.svg';
import undoIcon from '@/assets/images/icon-undo.svg';
import iconNewPB from '@/assets/images/icon-new-pb.svg';
import patternStar1 from '@/assets/images/pattern-star-1.svg';
import patternStar2 from '@/assets/images/pattern-star-2.svg';
import patternConfetti from '@/assets/images/pattern-confetti.svg';

import { Navigate, Link } from 'react-router-dom';

import { useResults } from '@/features/results/hooks/useResults';

export default function Results() {
  const { wpm, accuracy, correct, mis, activeStatus, resultStatus, handleGoBack } = useResults();

  if (activeStatus !== 'finish') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {resultStatus !== 'high-score' && (
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
        </>
      )}
      <section className="custom-container flex flex-col items-center justify-center gap-400 bg-neutral-900 pt-400 md:pt-1000 lg:pt-800">
        {resultStatus === 'high-score' && (
          <img src={iconNewPB} alt="icon-completed" className="w-600 md:w-800" />
        )}
        {resultStatus !== 'high-score' && (
          <div className="relative flex w-600 items-center justify-center rounded-full shadow-[0_0_0_7.5px_hsla(140,63%,57%,0.2),0_0_0_15px_hsla(140,63%,57%,0.1)] md:w-800 md:shadow-[0_0_0_16px_hsla(140,63%,57%,0.2),0_0_0_32px_hsla(140,63%,57%,0.1)]">
            <img src={iconCompleted} alt="icon-completed" className="w-600 md:w-800" />
          </div>
        )}
        <div className="title-container flex flex-col items-center justify-center gap-125">
          <p className="title cus-text-1 pt-100 md:pt-300 lg:pt-0">
            {resultStatus === 'normal' && 'Test Complete!'}
            {resultStatus === 'high-score' && 'High Score Smashed!'}
            {resultStatus === 'first' && 'Baseline Established!'}
          </p>
          <p className="subtitle cus-text-5 md:cus-text-3">
            {resultStatus === 'normal' && 'Solid run. Keep pushing to beat your high score.'}
            {resultStatus === 'high-score' && 'You’re getting faster. That was incredible typing.'}
            {resultStatus === 'first' &&
              'You’ve set the bar. Now the real challenge begins—time to beat it.'}
          </p>
        </div>
        <div className="result-info-container">
          <div className="result-info-item">
            <p className="title">WPM:</p>
            <p className="content">{wpm}</p>
          </div>
          <div className="result-info-item">
            <p className="title">Accuracy:</p>
            <p className="content text-red-500">{accuracy}</p>
          </div>
          <div className="result-info-item">
            <p className="title">Characters:</p>
            <p className="content">
              <span className="text-green-500">{correct}</span>
              <span className="text-neutral-400">/</span>
              <span className="text-red-500">{mis}</span>
            </p>
          </div>
        </div>
        <Link className="button-secondary" to={'/'} onClick={handleGoBack}>
          {resultStatus === 'normal' ? 'Go Again' : 'Beat This Score'}
          <img src={undoIcon} className="logo react" alt="React logo" />
        </Link>
      </section>
      {resultStatus === 'high-score' && (
        <div
          id="confetti"
          className="relative left-1/2 w-[120vw] -translate-x-1/2 bg-neutral-900 md:w-screen md:pt-1200"
        >
          <img
            src={patternConfetti}
            alt=""
            className="w-full"
            style={{ shapeRendering: 'crispEdges' }}
          />
        </div>
      )}
    </>
  );
}
