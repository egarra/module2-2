import { NavLink } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
};
