import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Greeting from './Greeting';
import CardList from './CardList';
import NavBar from './NavBar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path="/xmas-cards">
              <Greeting/>
            </Route>
            <Route exact path="/xmas-cards/cardlist">
              <CardList/>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
