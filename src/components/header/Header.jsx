import { AppBar, Box, IconButton, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <AppBar position="static">
      <Box className={styles.header}>
        <Typography variant="h4">Фильмы</Typography>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Box>
    </AppBar>
  );
};
