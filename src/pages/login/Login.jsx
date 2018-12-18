import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Store from '../../stores';
import "./../login/login.css";
import { observer } from "mobx-react";

@observer
class Login extends Component {

  constructor(props) {
    super();

    this.state = {
      username: '',
      email: '',
      birthday: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log(Store.Account.authorized === true, JSON.parse(JSON.stringify(window.localStorage.getItem('Account'))).authorized === true, Store.Account.authorized)
    if(Store.Account.authorized === true && JSON.parse(JSON.stringify(window.localStorage.getItem('Account'))).authorized === true) {
      this.props.history.push('/')
    }
  }

  setField = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  register = () => {
    Store.Account.register(this.state).then((response) => {
      if(response.data.token) {
        Store.Services.createAlert(true, 'success', 'Başarılı', 'Hesabınız başarıyla oluşturuldu');
        setTimeout(() => {
          Store.Services.alertHide();
          this.props.history.push('/kariyer-sec')
        }, 1000)
        Store.Account.setUser(response.data.token);
        Store.Account.authorized = true;
      } else {
        let errorTexts = Object.keys(response.data.errors).map((value) => {
          return response.data.errors[value][0];
        });
        Store.Services.createAlert(true, 'error', 'Hata!', errorTexts.join('\n'));
      }
    })
  }

  logIn = () => {
      Store.Account.login(this.state.username, this.state.password).then((response) => {
        if(response.data && String(response.data.token).length > 2) {
          if(response.data.errors) {
            let errorTexts = Object.keys(response.data.errors).map((value) => {
              return response.data.errors[value][0];
            });
            Store.Services.createAlert(true, 'error', 'Hata!', errorTexts.join('\n'));
          } else if(response.data.success === false) {
            Store.Services.createAlert(true, 'error', 'Hata!', 'Email ve sifre uyusmuyor');
          } else {
            Store.Services.createAlert(true, 'success', 'Başarılı', 'Basariyla giris yaptiniz');
            setTimeout(() => {
              Store.Services.alertHide();
              this.props.history.push('/kariyer-sec')
            }, 1000)
            console.log(response);
            Store.Account.setUser(response.data.token);
            Store.Account.authorized = true;
          }
        } else {
          if(response.message.length > 2) {
            Store.Services.createAlert(true, 'error', 'Hata!', 'Email ve sifre uyusmuyor');
          } else {
            let errorTexts = Object.keys(response.data.errors).map((value) => {
              return response.data.errors[value][0];
            });
            Store.Services.createAlert(true, 'error', 'Hata!', errorTexts.join('\n'));
          }
        }
      })
  }

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
                      <input type="text" placeholder="Kullanıcı Adı" onChange={(e) => this.setField('username', e.target.value)} />
                    </div>
                    <div className="col-12">
                      <input type="email" placeholder="Mail Adresi" onChange={(e) => this.setField('email', e.target.value)} />
                    </div>
                    <div className="col-12 col-lg-12">
                      <input type="date" placeholder="Doğum Tarihi" onChange={(e) => this.setField('birthday', e.target.value)} />
                    </div>
                    <div className="col-12">
                      <input type="password" placeholder="Şifre" onChange={(e) => this.setField('password', e.target.value)} />
                    </div>
                    <div className="col-12">
                      <button onClick={this.register} className="btn">
                        Kayıt Ol
                      </button>
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
                      <input type="text" placeholder="Kullanıcı Adı"  onChange={(e) => this.setField('username', e.target.value)} />
                    </div>
                    <div className="col-12">
                      <input type="password" placeholder="Şifre" onChange={(e) => this.setField('password', e.target.value)} />
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center">
                      <label>
                        <input type="checkbox" value={true} disabled/>
                        <span>Beni Hatırla</span>
                      </label>
                      <Link to="giris-yap">Şifremi Unuttum</Link>
                    </div>
                    <div className="col-12">
                      <button onClick={this.logIn} className="btn">
                        Giriş Yap
                      </button>
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
export default Login