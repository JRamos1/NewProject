import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css";
import Mainpage from "./Pages/MainPage"
// import SignUp from "./pages/signup"

function App(){
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path ="/" component= {Mainpage}/>
          {/* <Route exact path ="/signup" component={SignUp}/> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App