import { Outlet, NavLink } from 'react-router-dom';
import { isLoggined } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { NavMenu } from 'components/NavMenu/NavMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const userLogIn = useSelector(isLoggined);
  return (
    <>
      <nav>{userLogIn ? <UserMenu /> : <NavMenu />}</nav>
      <Outlet />
    </>
  );
};
