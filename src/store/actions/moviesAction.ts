import { Dispatch } from "redux";
import { API_KEY } from "../../constants/constants";
import { IMoviesResults, MoviesActionType } from "../../types/movie";



export interface IGetMoviesAction {
  type: MoviesActionType.GET_CATEGORY;
  payload: IMoviesResults;
}

export interface ISearchMoviesAction {
  type: MoviesActionType.SEARCH_MOVIES;
  payload: IMoviesResults;
}

export type MovieAction = IGetMoviesAction | ISearchMoviesAction;

//get by categories

export const fetchMovies = (category: string | null, page: string | null, lang: string) => {
  return async (dispatch: Dispatch<MovieAction>) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=${lang}&page=${page}`
    );
    const movies = await response.json();
    dispatch(getMoviesAction(movies));
  };
};

export const getMoviesAction = (results: IMoviesResults): IGetMoviesAction => {
  return {
    type: MoviesActionType.GET_CATEGORY,
    payload: results,
  };
};

//search

//https://api.themoviedb.org/3/search/movie?api_key=231a9923e67455d132639e888240a6ae&language=en-US&query=inception&page=1&include_adult=false
export const searchMovies = (query: string | null, page: string | null, lang: string) => {
  return async (dispatch: Dispatch<MovieAction>) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lang}&query=${query}&page=${page}&include_adult=false`
    );
    const movies = await response.json();
    dispatch(searchMoviesAction(movies));
  };
};

export const searchMoviesAction = (results: IMoviesResults): ISearchMoviesAction => {
  return {
    type: MoviesActionType.SEARCH_MOVIES,
    payload: results,
  };
};
