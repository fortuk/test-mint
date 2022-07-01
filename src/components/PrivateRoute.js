import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/auth/token-selectors';

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged ? children : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
