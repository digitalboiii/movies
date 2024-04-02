import { Box, Container } from '@mui/material';
import { Filters, MoviesList } from 'components/index';

import styles from './Home.module.css';

export default function Home() {
  return (
    <Container maxWidth={'sx'}>
      <Box className={styles.home_page}>
        <Filters className={styles.filters} />
        <MoviesList className={styles.movies_list} />
      </Box>
    </Container>
  );
}
