import { IMoviesResults } from "../../types/movie";
import { IGetMoviesAction, MovieAction, MoviesActionType } from "../actions/movies";

const initState = {
  page: 1,
  results: [],
};

export const movieReducer = (
  state: IMoviesResults = initState,
  action: MovieAction
) => {
  switch (action.type) {
    case MoviesActionType.GET_MOVIES:
      return { ...action.payload };
    case MoviesActionType.SEARCH_MOVIES:
      return { ...action.payload };

    default:
      return initState;
  }
};
