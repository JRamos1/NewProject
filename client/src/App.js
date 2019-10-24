import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css";
import Mainpage from "./Pages/MainPage"
import SignUpPage from "./Pages/SignUpPage"

function App(){
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path ="/" component= {Mainpage}/>
          <Route exact path ="/signup" component={SignUpPage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App