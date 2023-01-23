import { NavLink } from 'react-router-dom';
import { fetchLogOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ul>
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
      <button type="button" onClick={() => dispatch(fetchLogOut())}>
        LogOut
      </button>
    </>
  );
};
