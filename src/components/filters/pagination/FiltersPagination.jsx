import { Box, Pagination } from '@mui/material';

export const FiltersPagination = ({ onChange, count }) => {
  return (
    <Box>
      <Pagination count={count} onChange={onChange} />
    </Box>
  );
};
