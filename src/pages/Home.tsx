import iconRestart from '@/assets/images/icon-restart.svg';

export default function Home() {
  return (
    <>
      <section className="custom-container flex flex-col gap-400 py-400 md:py-500 lg:py-800">
        <div id="info-config-bar">
          <p>Config bar</p>
        </div>
        <div>
          <h1>This is Home page</h1>
        </div>
      </section>
      <section className="custom-container flex flex-col flex-nowrap items-center gap-300 lg:gap-400">
        <hr className="w-full border-neutral-700" />
        <button className="button-restart w-fit">
          Restart Test <img src={iconRestart} alt="icon-restart" />
        </button>
      </section>
    </>
  );
}
