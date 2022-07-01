import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from 'components/Button/Button';
import s from './Navigation.module.css';
import { getIsLogged } from 'redux/auth/token-selectors';

const Navigation = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <>
      <nav className={s.wrapper}>
        <Link to="/" className={s.current}>
          HOME
        </Link>
        {isLogged ? (
          <>
            <Link to="/phonebook" className={s.current}>
              Phonebook
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className={s.current}>
              Register
            </Link>
            <Link to="/login" className={s.current}>
              Login
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Navigation;
