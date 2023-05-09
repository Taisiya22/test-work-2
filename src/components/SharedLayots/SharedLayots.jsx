import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import logo from 'images/logo.png';

import css from './SharedLayots.module.css';

const SharedLayots = () => {
  return (
    <div>
      <header className={css.navBar}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/tweets">
            Tweets
          </NavLink>
        </nav>
        <img src={logo} alt="logo" />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayots;
