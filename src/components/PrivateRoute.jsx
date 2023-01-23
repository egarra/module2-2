import { Navigate } from 'react-router-dom';
import { isLoggined, getRefreshing } from 'redux/auth/selectors'; 
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(isLoggined);
    const isRefreshing = useSelector(getRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
