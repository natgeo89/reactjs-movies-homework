import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { IMoviesResults } from "../types/movie";
import { IGetMoviesAction, MovieAction, MoviesActionType } from "./actions/movies";




const initState = {
  page: 1,
  results: [],
};

const reducer = (state: IMoviesResults = initState, action: MovieAction) => {
  switch (action.type) {
    case MoviesActionType.GET_MOVIES:
      return {...action.payload}
    case MoviesActionType.SEARCH_MOVIES:
      return {...action.payload}

    default: return {page: 1, results: []};
  }


}

export type RootState = ReturnType<typeof reducer>

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
