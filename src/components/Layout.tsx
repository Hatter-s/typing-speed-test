import { Outlet, NavLink } from 'react-router-dom';
import logoLarge from '@/assets/images/logo-large.svg';
import logoSmall from '@/assets/images/logo-small.svg';
import HightestWPM from '@/features/info/components/HighestWPM';
import Attribution from './Attribution';

export default function Layout() {
  return (
    <>
      <nav className="custom-container flex items-center justify-between bg-neutral-900 pt-200 md:pt-400">
        <NavLink to="/">
          <picture>
            <source media="(min-width: 768px)" srcSet={logoLarge} />
            <img src={logoSmall} alt="logo" />
          </picture>
        </NavLink>
        <HightestWPM />
      </nav>

      <main className="text-neutral-0 flex flex-1 flex-col justify-between overflow-x-hidden bg-neutral-900">
        <Outlet />
        <Attribution />
      </main>
    </>
  );
}
