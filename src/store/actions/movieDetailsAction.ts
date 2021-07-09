

//https://api.themoviedb.org/3/movie/508943?api_key=231a9923e67455d132639e888240a6ae&language=en-US

import { Dispatch } from "redux";
import { API_KEY } from "../../constants/constants";
import { ImovieDetails, MoviesActionType } from "../../types/movie";






export interface IMovieDetailsAction {
  type: MoviesActionType.GET_MOVIE_DETAILS;
  payload: ImovieDetails;
}


export const getMovieDetails = (id: number) => {
  return async (dispatch: Dispatch<IMovieDetailsAction>) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const movieDetails = await response.json();
    dispatch(getMovieDetailsAction(movieDetails));
  };
};

export const getMovieDetailsAction = (movieDetails: ImovieDetails): IMovieDetailsAction => {
  return {
    type: MoviesActionType.GET_MOVIE_DETAILS,
    payload: movieDetails,
  };
};