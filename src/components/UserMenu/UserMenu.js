import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutUserMutation } from 'redux/auth/authApi';
import { loggedOut } from 'redux/auth/token-reduser';
import Button from 'components/Button/Button';
import {
  getIsLogged,
  getToken,
  getUserEmail,
} from 'redux/auth/token-selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const isLogged = useSelector(getIsLogged);
  const userEmail = useSelector(getUserEmail);
  const dispatchToken = useDispatch();
  const [
    logoutUser,
    { error: errorLogout, isError, isSuccess },
  ] = useLogoutUserMutation();

  const handleClickLogout = async () => {
    try {
      const data = await logoutUser().unwrap();
      dispatchToken(loggedOut());
    } catch (error) {
      console.log(error);
      toast.error(`Somthing wrong...`);
    }
  };
  return (
    <>
      {isLogged ? (
        <div className={s.wrapper}>
          <p className={s.text}>{userEmail}</p>
          <Button title="Logout" onClick={handleClickLogout} />
        </div>
      ) : (
        ''
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default UserMenu;
