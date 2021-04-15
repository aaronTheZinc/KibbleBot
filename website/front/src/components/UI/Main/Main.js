import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../Pages/home/index";
import Nav from '../Pieces/Header'
import SpotifyHub from '../Pages/SpotifyHub/main'
import CreateNewBot from '../Pages/CreateBot/index'
import Dash from '../Pages/dashboard/index'

export default function Main() {
  return (
    <>
   

      <Router>
      <Route path="/home" component={Home} />
      <Route path="/audio" component={SpotifyHub}/>
      {/* <Route path='/dashboard' component={Dash} /> */}
        <Route path="/dashboard/newbot" component={CreateNewBot} />
      </Router>
    </>
  );
};
