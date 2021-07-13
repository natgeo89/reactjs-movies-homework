import { IMovieState, MoviesActionType } from "../../types/movie";
import { IMovieAction } from "../actions/movieActions";

const initState = {
  details: {
    backdrop_path: "",
    genres: [],
    id: 508943,
    overview: "",
    poster_path: "",
    release_date: "",
    revenue: 1,
    runtime: 1,
    title: "",
    vote_average: 10,
  },
  actors: [],
};

export const movieDetailsReducer = (
  state: IMovieState = initState,
  action: IMovieAction
) => {
  switch (action.type) {
    case MoviesActionType.GET_MOVIE_DETAILS:
      return { ...state, details: action.payload };
    case MoviesActionType.GET_MOVIE_ACTORS:
      return { ...state, actors: action.payload };
    default:
      return initState;
  }
};
