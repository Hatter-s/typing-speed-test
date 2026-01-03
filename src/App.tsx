import undoIcon from '@/assets/images/icon-undo.svg';
import '@/App.css';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout />
      <div className="container mx-auto flex items-center gap-300 bg-neutral-900 p-20">
        <button className="button-primary">Primary Button</button>
        <button className="button-secondary">
          Secondary Button
          <img src={undoIcon} className="logo react" alt="React logo" />
        </button>
        <button className="button-select">Button</button>
        <fieldset className="flex flex-col gap-4">
          <legend className="text-neutral-0 mb-2 text-lg font-bold">Choose one of these</legend>
          <div className="flex flex-col gap-2">
            <label className="group flex cursor-pointer items-center gap-3 select-none">
              <input
                type="radio"
                name="sample"
                value={1}
                className="peer sr-only" // Hidden, but accessible
              />

              {/* THE CUSTOM RADIO CIRCLE */}
              <div
                className={`/* 1. Base Shape & Border */ border-neutral-0 /* 2. Hover State (from parent .group) */ group-hover:border-neutral-0 /* 3. Checked State (from sibling .peer) */ /* 4. Focus State */ peer-focus:outline-button /* 5. The Trick for the Dot: Control Text Color */ flex h-200 w-200 items-center justify-center rounded-full border bg-transparent text-transparent peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-neutral-900 group-hover:peer-checked:border-blue-400`}
              >
                {/* The Dot: Inherits color from parent. 
            If unchecked -> text is transparent -> dot is invisible.
            If checked -> text is neutral-900 -> dot is visible. 
        */}
                <div className="h-75 w-75 rounded-full bg-current" />
              </div>

              <span className="text-neutral-0 text-preset-5">Option 1</span>
            </label>
            <label className="group flex cursor-pointer items-center gap-3 select-none">
              <input
                type="radio"
                name="sample"
                value={2}
                className="peer sr-only" // Hidden, but accessible
              />

              {/* THE CUSTOM RADIO CIRCLE */}
              <div
                className={`/* 1. Base Shape & Border */ border-neutral-0 /* 2. Hover State (from parent .group) */ group-hover:border-neutral-0 /* 3. Checked State (from sibling .peer) */ /* 4. Focus State */ peer-focus:outline-button /* 5. The Trick for the Dot: Control Text Color */ flex h-200 w-200 items-center justify-center rounded-full border bg-transparent text-transparent peer-checked:border-blue-400 peer-checked:bg-blue-400 peer-checked:text-neutral-900 group-hover:peer-checked:border-blue-400`}
              >
                {/* The Dot: Inherits color from parent. 
            If unchecked -> text is transparent -> dot is invisible.
            If checked -> text is neutral-900 -> dot is visible. 
        */}
                <div className="h-75 w-75 rounded-full bg-current" />
              </div>

              <span className="text-neutral-0 text-preset-5">Option 2</span>
            </label>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default App;
