import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authSelectors from '../../redux/auth/auth-selectors';

import s from './HeaderMenu.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Phone book
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
