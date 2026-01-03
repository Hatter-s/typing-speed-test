import { Outlet, NavLink } from 'react-router-dom';
import logoLarge from '@/assets/images/logo-large.svg';
import logoSmall from '@/assets/images/logo-small.svg';
import iconPersonalBest from '@/assets/images/icon-personal-best.svg';

export default function Layout() {
  return (
    <>
      <nav className="custom-container flex items-center justify-between bg-neutral-900 pt-200 md:pt-400">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-neutral-900' : 'text-neutral-700')}
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={logoLarge} />
            <img src={logoSmall} alt="logo" />
          </picture>
        </NavLink>
        <div className="flex flex-row flex-nowrap gap-125">
          <img src={iconPersonalBest} alt="icon-personal-best" className="h-200 md:h-4.5" />
          <p className="text-preset-4 hidden text-neutral-400 md:block">
            Personal best: <span className="text-neutral-0">92 WPM</span>
          </p>
          <p className="text-preset-3 block text-neutral-400 md:hidden">
            Best: <span className="text-neutral-0">92 WPM</span>
          </p>
        </div>
      </nav>

      <main className="text-neutral-0 bg-neutral-900">
        <Outlet />
      </main>
    </>
  );
}
