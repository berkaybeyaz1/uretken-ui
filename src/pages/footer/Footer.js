import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./../footer/footer.css";

import Logo from "./../../img/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 text-center text-lg-left">
                <img
                  src={Logo}
                  alt="Üretken Akademi Logo"
                  className="footer__logo"
                />
              </div>
              <div className="col-12 col-lg-8">
                <nav className="footer__nav">
                  <Link to="/">Ana Sayfa</Link>
                  <Link to="/topluluk">Topluluğa Katıl</Link>
                  <Link to="/kaynaklar">Kaynaklar</Link>
                  <Link to="/hakkimizda">Hakkımızda</Link>
                  <Link to="/kullanim-sozlesmesi">Kullanım Sözleşmesi</Link>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
