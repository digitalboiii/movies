import { Box } from '@mui/material';
import { MoviesCard } from './movies-card/MoviesCard';

import styles from './MoviesList.module.css';
import { useMovies } from 'services/index';

export const MoviesList = () => {
  const movies = useMovies();

  return (
    <Box className={styles.movies_list}>
      {movies.length !== 0 &&
        movies.results.map(movie => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
    </Box>
  );
};
