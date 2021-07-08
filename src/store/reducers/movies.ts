import { IMoviesResults } from "../../types/movie";
import { MovieAction, MoviesActionType } from "../actions/movies";

const initState = {
  page: 1,
  results: [],
  total_pages: 0,
};

export const movieReducer = (
  state: IMoviesResults = initState,
  action: MovieAction
) => {
  switch (action.type) {
    case MoviesActionType.GET_CATEGORY:
      return { ...action.payload };
    case MoviesActionType.SEARCH_MOVIES:
      return { ...action.payload };

    default:
      return initState;
  }
};
