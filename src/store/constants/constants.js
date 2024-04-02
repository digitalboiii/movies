const SORT_SELECT_OPTIONS = [
  {
    id: 0,
    label: 'Популярности',
    url: 'https://api.themoviedb.org/3/movie/popular?language=ru&page',
  },
  {
    id: 1,
    label: 'Рейтингу',
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=ru&page',
  },
];

const INITIAL_VALUES = {
  dispatch: null,
  initialData: [],
};

export { SORT_SELECT_OPTIONS, INITIAL_VALUES };
