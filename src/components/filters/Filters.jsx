import { Box, Pagination, Paper } from '@mui/material';
import { FiltersHeader } from './filters-header/FiltersHeader';
import { SortSelect } from './sort-select/SortSelect';
import { GenresSelect } from './genres-select/GenresSelect';
import { RangeSlider } from './slider/RangeSlider';
import { SORT_SELECT_OPTIONS } from 'store/index';
import { useState } from 'react';

import styles from './Filters.module.css';

export const Filters = () => {
  const [isReset, setIsReset] = useState(false);

  return (
    <Box key={isReset}>
      <Paper className={styles.filters}>
        <FiltersHeader onReset={() => setIsReset(!isReset)} />
        <SortSelect options={SORT_SELECT_OPTIONS} />
        <RangeSlider />
        <GenresSelect options={[{ id: 0, name: 'вестерн' }]} />
        <Pagination className={styles.filters_pagination} />
      </Paper>
    </Box>
  );
};
