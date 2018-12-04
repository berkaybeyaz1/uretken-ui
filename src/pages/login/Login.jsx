import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./../login/login.css";

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <section className="login">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="login__card">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="login__header">Kayıt Ol</h2>
                      <h5 className="login__sub-header">Hemen kayıt ol.</h5>
                    </div>
                    <div className="col-12">
                      <input type="text" placeholder="Kullanıcı Adı" />
                    </div>
                    <div className="col-12">
                      <input type="text" placeholder="Mail Adresi" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input type="text" placeholder="Üniversite" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input type="text" placeholder="Bölüm" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input type="date" placeholder="Doğum Tarihi" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input type="text" placeholder="İlgi Alanı" />
                    </div>
                    <div className="col-12">
                      <input type="password" placeholder="Şifre" />
                    </div>
                    <div className="col-12">
                      <Link to="giris-yap" className="btn">
                        Kayıt Ol
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="login__card">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="login__header">Giriş Yap</h2>
                      <h5 className="login__sub-header">
                        Üye misin? Giriş yap.
                      </h5>
                    </div>
                    <div className="col-12">
                      <input type="text" placeholder="Kullanıcı Adı" />
                    </div>
                    <div className="col-12">
                      <input type="password" placeholder="Şifre" />
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center">
                      <label>
                        <input type="checkbox" />
                        <span>Beni Hatırla</span>
                      </label>
                      <Link to="giris-yap">Şifremi Unuttum</Link>
                    </div>
                    <div className="col-12">
                      <Link to="giris-yap" className="btn">
                        Giriş Yap
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
