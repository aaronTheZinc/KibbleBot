import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../Pages/home/index";
import Nav from '../Pieces/Header'
import CreateNewBot from '../Pages/CreateBot/index'
export default () => {
  return (
    <>
    <Nav/>

      <Router>
      <Redirect to="./home" />
      <Route path="/home" component={Home} />

        <Route path="/dashboard/newbot" component={CreateNewBot} />
      </Router>
    </>
  );
};
