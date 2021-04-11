import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../Pages/home/index";
import Nav from '../Pieces/Header'
export default () => {
  return (
    <>
    <Nav/>

      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  );
};
