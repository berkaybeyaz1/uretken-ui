import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap-css-only";
import "./App.css";

import ScrollTop from "./ScrollTop";
import Header from "./pages/header/Header";

import HomePage from "./pages/HomePage";
import Career from "./pages/Career";
import Education from "./pages/Education";
import Login from "./pages/login/Login";

import Footer from "./pages/footer/Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <main>
            <ScrollTop>
              <Route path="/" component={HomePage} exact />
              <Route path="/kariyer" component={Career} />
              <Route
                path="/egitim/:lesson/konu/:subject"
                component={Education}
              />
              <Route path="/giris-yap" component={Login} />
            </ScrollTop>
          </main>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
