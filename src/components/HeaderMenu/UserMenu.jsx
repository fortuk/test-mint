import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
//import defaultAvatar from './default-avatar.png';

import s from './HeaderMenu.module.css';
import b from '../Button/Button.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      {/* <img src={avatar} alt="" width="32" className={s.avatar} /> */}
      <span className={s.name}>Welcome, {name}</span>

      <button
        className={b.btn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </button>
    </div>
  );
}
