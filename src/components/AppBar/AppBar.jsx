import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import UserMenu from './../UserMenu/UserMenu';

import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Container direction>
        <Navigation />
        <UserMenu />
      </Container>
    </header>
  );
};

export default AppBar;
