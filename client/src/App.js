import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css";
import Mainpage from "./Pages/MainPage"


function App(){
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path ="/" component= {Mainpage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App