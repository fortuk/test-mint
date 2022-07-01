import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../auth/auth-operations';

import s from './Views.module.css';
import b from '../../Components/Button/Button.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login form</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter email..."
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <button className={b.btn} type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}
