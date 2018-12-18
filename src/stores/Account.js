
import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

const URL = "http://uretkenakdemi-env.msutivn332.eu-central-1.elasticbeanstalk.com/api/";
class Store {
  @persist @observable authorized;
  @persist('object') @observable user;
  @persist @observable token = JSON.parse(window.localStorage.getItem('Account')).token;

  @action login = (email, password) => {
    return new Promise((resolve, reject) => {
      fetch(URL + 'login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
      }).then((response) => {
        resolve(response.json());
      }).then((responseJson) => {
          resolve(responseJson);
      }).catch((err) => reject(err))
    })
  }
  @action register = (data) => {
    return new Promise((resolve, reject) => {
      fetch(URL + 'register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          ...data
          })
      }).then((response) => {
        resolve(response.json());
      }).then((responseJson) => {
          resolve(responseJson);
      }).catch((err) => reject(err))
    })
  }

  @action setUser = (token) => {
    this.token = token;
  }

  @action logout = () => {
    return new Promise((resolve, reject) => {
      this.authorized = false;
      this.token = "";
      this.user = ""
      resolve();
    });
  }
}

export default new Store();