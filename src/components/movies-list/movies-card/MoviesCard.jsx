import { StarBorder } from '@mui/icons-material';
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './MoviesCard.module.css';

export const MoviesCard = ({ movie }) => {
  return (
    <Box className={styles.card}>
      <Paper variant="outlined">
        <Link key={movie.id} to={`/details/${movie.id}`}>
          <CardMedia
            component={'img'}
            image={`https://image.tmdb.org/t/p/w500/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title}
            className={styles.card_image}
          />
        </Link>
        <Box className={styles.card_description}>
          <CardContent className={styles.description}>
            <Typography variant="h6" className={styles.card_title}>
              {movie.title}
            </Typography>
            <Typography variant="p" component={'p'}>
              Рейтинг: {movie.vote_average.toFixed(1)}
            </Typography>
          </CardContent>
          <CardActions className={styles.icon}>
            <IconButton>
              <StarBorder />
            </IconButton>
          </CardActions>
        </Box>
      </Paper>
    </Box>
  );
};
