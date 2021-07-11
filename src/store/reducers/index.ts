import { combineReducers } from "redux";
import { actorReducer } from "./actorReducer";
import { movieDetailsReducer } from "./movieReducer";
import { movieReducer } from "./moviesReducer";

export const reducer = combineReducers({
  movies: movieReducer,
  movie: movieDetailsReducer,
  actor: actorReducer,
});

export type RootState = ReturnType<typeof reducer>;
