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
  );
}

export default App;
