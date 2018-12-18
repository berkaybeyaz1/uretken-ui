import React, { Component, Fragment } from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Simplert from 'react-simplert'
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider, observer } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import "bootstrap-css-only";
import "./App.css";

import ScrollTop from "./ScrollTop";
import Header from "./pages/header/Header";

import HomePage from "./pages/HomePage";
import RoadMapList from './pages/RoadMapList';
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

@observer
class App extends Component {

  renderLogout() {
    if(Account.authorized === true && String(Account.token).length > 3 || JSON.parse(window.localStorage.getItem('Account')).authorized) {
      Account.logout().then(() => {
        this.props.history.push('/giris-yap');
      })
    } else {
      this.props.history.push('/');
    }
    return (
      <div></div>
    )
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route {...rest} render={(props) => (
          Account.hasOwnProperty('authorized') ? 
          Account.authorized === true && 
          String(Account.token).length > 3 || 
          JSON.parse(window.localStorage.getItem('Account')).authorized
            ? <Component {...props} />
            : <Redirect to='/giris-yap' /> : <Redirect to='/giris-yap' />
        )} />
      )
    }
    return (
      <Provider {...stores}>
      <HashRouter history={history}>
        <Fragment>
          <Header />
          <Simplert 
              showSimplert={ Services.alertShow }
              type={ Services.alertType }
              title={ Services.alertTitle }
              message={ Services.alertMessage }
          />
          <main>
            <ScrollTop>
              <Route path="/" component={HomePage} exact />
              <PrivateRoute path="/kariyer-sec" component={RoadMapList} />
              <PrivateRoute path="/kariyer/:kariyer" component={Career} />
              <PrivateRoute path="/egitim/:ders/konu/:konu" component={Education} />
              <Route path="/giris-yap" component={Login} />
              <Route path="/cikis-yap" component={this.renderLogout} />
            </ScrollTop>
          </main>
          <Footer />
        </Fragment>
      </HashRouter>
      </Provider>
    );
  }
}
export default App
