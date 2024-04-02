import { Autocomplete, Box, TextField } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { getRequest, useDispatchMovies } from 'services/index';

export const SortSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const dispatch = useDispatchMovies();

  useEffect(() => {
    const getMoviesData = async () => {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzQwOGM3ZGZhNmNmODQ4YWIzYWE2NGM2NmQ2NzMxOSIsInN1YiI6IjY1ZjE3YjVlOTkyNTljMDE4NjVlMTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r4SPZ5flN6luDVxqK3Gh-drLZowg-woeutbhi_hiPqw';
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(`${selectedOption.url}=1`, options);
        if (response.status <= 200) {
          dispatch({
            type: 'set_movies',
            movies: response.data,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    getMoviesData();
  }, [selectedOption]);

  return (
    <Box>
      <Autocomplete
        options={options}
        value={selectedOption}
        isOptionEqualToValue={(e, value) => e.label === value.label}
        renderInput={params => (
          <TextField {...params} label="Сортировать по:" placeholder="Поиск" />
        )}
        onChange={(event, newValue) => setSelectedOption(newValue)}
      />
    </Box>
  );
};
