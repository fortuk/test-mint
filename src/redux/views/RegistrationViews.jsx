import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../auth/auth-operations';

import s from './Views.module.css';
import b from '../../Components/Button/Button.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Ragistration form</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter name..."
            value={name}
            onChange={handleChange}
          />
        </label>

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
          Passwords:
          <input
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        {/* <label className={s.label}>
          Confirm passwords:
          <input
            type="password"
            name="password"
             placeholder="********"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label> */}

        <button className={b.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
