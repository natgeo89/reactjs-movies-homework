import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { movieReducer } from "./reducers/movies";

export type RootState = ReturnType<typeof movieReducer>;

export const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
