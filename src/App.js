import React from "react";
import './App.css'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Home from "./pages/Home/Home";
import NavBar from "./commons/NavBar";
const App = () => {
  return (
      <Router>
        <NavBar/>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
      </Switch>

      </Router>
  );
};

export default App;

