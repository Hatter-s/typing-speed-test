export default function InputRadio() {
  return (
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
  );
}
