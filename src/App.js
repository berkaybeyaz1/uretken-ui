import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Simplert from 'react-simplert'
import { observer } from "mobx-react";
import { createBrowserHistory } from "history";

import "bootstrap-css-only";
import "./App.css";

import Stores from '../src/stores';

import ScrollTop from "./ScrollTop";
import Header from "./pages/header/Header";

import HomePage from "./pages/HomePage";
import RoadMapList from './pages/RoadMapList';
import Career from "./pages/Career";
import Education from "./pages/Education";
import Login from "./pages/login/Login";

import Footer from "./pages/footer/Footer";

@observer
class App extends Component {

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        Stores.Account.authorized === true
          ? <Component {...props} />
          : <Redirect to='/giris-yap' />
      )} />
    )
    return (
      <Router>
        <Fragment>
          <Header />
          <Simplert 
              showSimplert={ Stores.Services.alertShow }
              type={ Stores.Services.alertType }
              title={ Stores.Services.alertTitle }
              message={ Stores.Services.alertMessage }
          />
          <main>
            <ScrollTop>
              <Route path="/" component={HomePage} exact />
              <PrivateRoute path="/kariyer-sec" component={RoadMapList} />
              <PrivateRoute path="/kariyer/:kariyer" component={Career} />
              <PrivateRoute path="/egitim/:ders/konu/:konu" component={Education} />
              <Route path="/giris-yap" component={Login} />
            </ScrollTop>
          </main>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}
export default App
