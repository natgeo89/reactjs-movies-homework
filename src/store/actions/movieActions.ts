

//https://api.themoviedb.org/3/movie/508943?api_key=231a9923e67455d132639e888240a6ae&language=en-US

import { Dispatch } from "redux";
import { API_KEY } from "../../constants/constants";
import { IMovieActor, ImovieDetails, MoviesActionType } from "../../types/movie";




// get Movie


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

// get Actors

export interface IMovieActorsAction {
  type: MoviesActionType.GET_MOVIE_ACTORS;
  payload: IMovieActor[];
}


export const getActors = (id: number) => {
  return async (dispatch: Dispatch<IMovieActorsAction>) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const result = await response.json();
    const actors = await result.cast;
    dispatch(getMovieActorAction(actors));
  };
};

export const getMovieActorAction = (actors: IMovieActor[]): IMovieActorsAction => {
  return {
    type: MoviesActionType.GET_MOVIE_ACTORS,
    payload: actors,
  };
};

export type IMovieAction = IMovieDetailsAction | IMovieActorsAction;