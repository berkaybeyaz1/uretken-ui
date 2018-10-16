import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap-css-only";
import "./App.css";

import Header from "./pages/header/Header";

import HomePage from "./pages/HomePage";
import Career from "./pages/Career";

import Footer from "./pages/footer/Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <main>
            <Route path="/" component={HomePage} exact />
            <Route path="/kariyer" component={Career} />
          </main>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
