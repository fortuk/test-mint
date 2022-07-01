import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/auth/token-selectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLogged = useSelector(getIsLogged);
  const shouldRedirect = isLogged && restricted;

  return (
    <>
      {shouldRedirect ? <Navigate to="/phonebook" replace={true} /> : children}
    </>
  );
};

export default PublicRoute;
