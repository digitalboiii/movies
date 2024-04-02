import Home from 'pages/home/Home';
import MovieDetails from 'pages/movie-details/MovieDetails';
import NotFoundPage from 'pages/not-found-page/NotFoundPage';
import { ThemeProvider, createTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components';
import { MoviesProvider } from './services';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
      paper: '#242424',
    },
  },
});

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFoundPage /> },
  { path: '/details/:id', element: <MovieDetails /> },
]);

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <MoviesProvider>
          <RouterProvider router={router} />
        </MoviesProvider>
      </ThemeProvider>
    </>
  );
}
