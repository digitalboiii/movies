import { Box, Slider } from '@mui/material';
import { useState } from 'react';

import styles from './RangeSlider.module.css';

export const RangeSlider = () => {
  const [years, setYears] = useState([1900, 2023]);

  return (
    <Box className={styles.range_slider}>
      <Slider
        valueLabelDisplay="auto"
        value={years}
        min={1900}
        max={2023}
        onChange={e => setYears(e.target.value)}
      />
    </Box>
  );
};
