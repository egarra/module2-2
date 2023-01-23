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
import { RestrictedRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/gallery" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/gallery" component={<Login />} />
          }
        />
        <Route
          path="/gallery"
          element={
            <PrivateRoute redirectTo="/login" component={<Gallery />} />
          }
        />
        <Route
          path="/todos"
          element={
            <PrivateRoute redirectTo="/login" component={<Todos />} />
          }
        />
        <Route
          path="/counter"
          element={
            <PrivateRoute redirectTo="/login" component={<Counter />} />
          }
        />
        <Route
          path="/friends"
          element={
            <PrivateRoute redirectTo="/login" component={<Friends />} />
          }
        />
       <Route
          path="/trandingMovies"
          element={
            <PrivateRoute redirectTo="/login" component={<TrandingMovies />} />
          }
        />
        <Route
          path="movies"
          element={
            <PrivateRoute redirectTo="/login" component={<SearchMovies />} />
          }
        />
        <Route
          path="movies/:idMovie"
          element={
            <PrivateRoute redirectTo="/login" component={<MovieDetails />} />         }
        />    
        
       
      </Route>
    </Routes>
  );
};
