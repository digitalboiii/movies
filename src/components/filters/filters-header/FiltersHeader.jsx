import { Box, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

import styles from './FiltersHeader.module.css';

export const FiltersHeader = ({ onReset }) => {
  return (
    <Box className={styles.filters_header}>
      <Typography variant="h5">Фильтры</Typography>
      <IconButton onClick={onReset}>
        <Close />
      </IconButton>
    </Box>
  );
};
