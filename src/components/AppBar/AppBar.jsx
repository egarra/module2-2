import { Outlet, NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/friends">Friends</NavLink>
          </li>
          <li>
            <NavLink to="/trandingMovies">Tranding Movies</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Search Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
