<<<<<<< HEAD
import React from "react";
import "./App.css";
import TopPart from "./components/TopPart";
import DetailNews from "./components/DetailNews";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import store from '../src/redux';
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={TopPart} />
        <Route path="/detailnews" exact component={DetailNews} />
      </Switch>
      </Provider>
=======
import React from 'react';
import './App.css';
import TopPart from './components/TopPart'
import LatestPost from './components/LatestPost';
import FeaturedPost from './components/FeaturedPost';

function App() {
  return (
    <div className="background">
      <TopPart/>
     
    </div>
>>>>>>> 3c9846a0c2dc748a749e753aec0c401e9d60e498
  );
}

export default App;
