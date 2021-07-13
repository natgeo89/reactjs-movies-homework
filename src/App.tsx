import React from "react";
import { Route, Switch } from "react-router-dom";
import ActorPage from "./pages/ActorPage";
import Main from "./pages/Main";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/movie/:id' component={MoviePage}/>
        <Route path='/person/:id' component={ActorPage}/>
      </Switch>
    </>
  );
}

export default App;
