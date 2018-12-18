import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "./../header/header.css";
import Store from '../../stores';
import Logo from "./../../img/logo.png";
import LogoSmall from "./../../img/logo-small.png";
import { observer } from "mobx-react";

@observer
class Header extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <Fragment>
        <header>
          <div className="header d-none d-lg-block">
            <div className="container d-flex justify-content-between">
              <Link to="/" className="header__logo">
                <img src={Logo} alt="Üretken Akademi Logo" />
              </Link>
              <nav className="header__menu">
                <Link to="/">Ana Sayfa</Link>
                <Link to="/topluluk">Topluluğa Katıl</Link>
                <Link to="/kaynaklar">Kaynaklar</Link>
                {Store.Account.authorized === true ?
                <Link to="/cikis-yap">Cikis Yap</Link> : 
                <Link to="/giris-yap">Giriş Yap</Link>}
                <Link to="partner">Partner Olun</Link>
              </nav>
            </div>
          </div>
        </header>
        <Menu
          burgerButtonClassName={"d-lg-none"}
          customBurgerIcon={
            <img src={LogoSmall} alt="Üretken Akademi Mobil Menü" />
          }
        >
          <Link to="/">Ana Sayfa</Link>
          <Link to="/topluluk">Topluluğa Katıl</Link>
          <Link to="/kaynaklar">Kaynaklar</Link>
          <Link to="/giris-yap">Giriş Yap</Link>
          <Link to="partner">Partner Olun</Link>
        </Menu>
      </Fragment>
    );
  }
}
export default Header