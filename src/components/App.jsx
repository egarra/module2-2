import { Friends } from 'pages/Friends/Friends';
import { Counter } from 'pages/Counter/Counter';
import 'react-tabs/style/react-tabs.css';
import { Gallery } from 'pages/Gallery/Gallery';
import { Todos } from 'pages/Todos/Todos';
import { TrandingMovies } from 'pages/TrandingMovies/TrandingMovies';
import { SearchMovies } from 'pages/SearchMovies/SearchMovies';
import { Home } from 'pages/Home/Home';
import { AppBar } from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todos" element={<Todos />} />
        <Route path="counter" element={<Counter />} />
        <Route path="friends" element={<Friends />} />
        <Route path="trandingMovies" element={<TrandingMovies />} />
        <Route path="searchMovies" element={<SearchMovies />} />
      </Route>
    </Routes>
  );
};
