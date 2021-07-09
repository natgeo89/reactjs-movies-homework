import { combineReducers } from "redux";
import { movieDetailsReducer } from "./movieDetailsReducer";
import { movieReducer } from "./moviesReducer";

export const reducer = combineReducers({
  movies: movieReducer,
  movie: movieDetailsReducer,
});

export type RootState = ReturnType<typeof reducer>;
