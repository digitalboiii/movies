import { createContext, useContext, useReducer } from 'react';
import { INITIAL_VALUES } from 'store/index';

const MoviesContext = createContext(INITIAL_VALUES.initialData);
const MoviesDispatchContext = createContext(INITIAL_VALUES.initialData);

export const MoviesProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(
    moviesReducer,
    INITIAL_VALUES.initialData
  );

  return (
    <MoviesContext.Provider value={movies}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesContext.Provider>
  );
};

const moviesReducer = (movies, action) => {
  switch (action.type) {
    case 'set_movies': {
      return action.movies;
    }
    default: {
      throw new Error('Unknown action', action.type);
    }
  }
};

export const useMovies = () => useContext(MoviesContext);
export const useDispatchMovies = () => useContext(MoviesDispatchContext);
