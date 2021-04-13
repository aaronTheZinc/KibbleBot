import React from "react";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from "../Pages/home/index";
import Nav from '../Pieces/Header'
import CreateNewBot from '../Pages/CreateBot/index'
export default () => {
  return (
    <>
    <Nav/>

      <Router>
      <Route path="/home" component={Home} />
        <Redirect to="./home" />
        <Route path="/dashboard/newbot" component={CreateNewBot} />
      </Router>
    </>
  );
};
