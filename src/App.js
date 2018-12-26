import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Router, Redirect } from "react-router-dom";
import Simplert from "react-simplert";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider, observer } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import WOW from "wow.js";

import "bootstrap-css-only";
import "./animate.css";
import "./App.css";

import ScrollTop from "./ScrollTop";
import Header from "./pages/header/Header";

import HomePage from "./pages/HomePage";
import RoadMapList from "./pages/RoadMapList";
import Career from "./pages/Career";
import Education from "./pages/Education";
import Login from "./pages/login/Login";

import Footer from "./pages/footer/Footer";
import Account from "./stores/Account";
import Services from "./stores/Services";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
  routing: routingStore,
  Account: Account,
  Services: Services
};
window.store = stores;

const history = syncHistoryWithStore(browserHistory, routingStore);


const HomePageContainer = () => {
  if((Account.authorized === true && String(Account.token).length > 3) || JSON.parse(window.localStorage.getItem("Account")).authorized) {
    return <Redirect to="/kariyer/derin-ogrenme" />
  } else {
    return <HomePage />
  }
}

window.localStorage.setItem('Account', JSON.stringify({token: '', authorized: false, user: ''}));

@observer
class App extends Component {
  renderLogout = () => {
    if (JSON.parse(window.localStorage.getItem("Account")).authorized){
      Account.logout().then((response) => {
        return <Redirect to="/giris-yap" />
      });
    } else {
     return <Redirect to="/" />
    }
  };
  componentDidMount() {
    new WOW().init();
  }
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={props =>
            JSON.parse(window.localStorage.getItem("Account")).authorized === true? (
              <Component {...props} />
            ) : (
              <Redirect to="/giris-yap" />
            )
          }
        />
      );
    };
    return (
      <Provider {...stores}>
        <Router history={history} basename="/">
          <Fragment>
            <Header />
            <Simplert
              showSimplert={Services.alertShow}
              type={Services.alertType}
              title={Services.alertTitle}
              message={Services.alertMessage}
            />
            <main>
              <ScrollTop>
                <Route path="/" component={HomePageContainer} exact />
                <PrivateRoute path="/kariyer-sec" component={RoadMapList} />
                <PrivateRoute path="/kariyer/:kariyer" component={Career} />
                <PrivateRoute
                  path="/egitim/:ders/konu/:konu"
                  component={Education}
                />
                <Route path="/giris-yap" component={Login} />
                <Route path="/cikis-yap" render={() =>
                              JSON.parse(window.localStorage.getItem("Account")).authorized === true ? (
                                this.renderLogout()
                              ) : <Redirect to="/giris-yap"/>} />
              </ScrollTop>
            </main>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
export default App;
