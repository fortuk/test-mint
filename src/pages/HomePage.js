import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getIsLogged,
  getUserEmail,
  getUserName,
} from 'redux/auth/token-selectors';
import Container from 'components/Container/Container';

const HomePage = () => {
  const isLogged = useSelector(getIsLogged);
  const userEmail = useSelector(getUserEmail);
  const userName = useSelector(getUserName);
  return (
    <Container>
      <>
        {isLogged ? (
          <p> Hello {userName}! We glad to see you!</p>
        ) : (
          <p>
            Hello! Please choose the next step:{' '}
            <Link to="/register"> register </Link>
            or
            <Link to="/login"> login </Link>
            if you have already had an account on our website.
          </p>
        )}
      </>
    </Container>
  );
};

export default HomePage;
