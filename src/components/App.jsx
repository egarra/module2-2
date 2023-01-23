import { Friends } from 'pages/Friends/Friends';
import { Counter } from 'pages/Counter/Counter';
import 'react-tabs/style/react-tabs.css';
import { Gallery } from 'pages/Gallery/Gallery';
import { Todos } from 'pages/Todos/Todos';
import { TrandingMovies } from 'pages/TrandingMovies/TrandingMovies';
import { SearchMovies } from 'pages/SearchMovies/SearchMovies';
import { Home } from 'pages/Home/Home';
import { AppBar } from './AppBar/AppBar';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="todos" element={<Todos />} />
        <Route path="counter" element={<Counter />} />
        <Route path="friends" element={<Friends />} />
        <Route path="trandingMovies" element={<TrandingMovies />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:idMovie" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
