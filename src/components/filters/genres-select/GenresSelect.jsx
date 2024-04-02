import { Autocomplete, Box, TextField } from '@mui/material';

export const GenresSelect = ({ options }) => {
  return (
    <Box>
      <Autocomplete
        multiple
        options={options}
        getOptionKey={option => option.id}
        getOptionLabel={option => option.name}
        renderInput={params => (
          <TextField {...params} label="Жанры" placeholder="Поиск" />
        )}
      />
    </Box>
  );
};
