
import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import Account from './Account';

const URL = "http://uretkenakdemi-env.msutivn332.eu-central-1.elasticbeanstalk.com/api/";

class Store {
    @observable history = [];
    @observable alertShow = false;
    @observable alertType = "";
    @observable alertTitle = "";
    @observable alertMessage = ""

    @action alertShow = () => {
        this.alertShow = true
    }

    @action alertHide = () => {
        this.alertShow = false;
    }

    @action createAlert = (show, type, title, message) => {
        this.alertShow = show;
        this.alertType = type;
        this.alertTitle = title;
        this.alertMessage = message;
    }
    
    getRoadMapList = () => {
        return new Promise((resolve,reject) => {
            fetch(URL + 'road-map-lists', {
                method: 'GET'
            })
            .then((response) => {
                resolve(response.json())
            })
            .then((responseJSON) => {
                resolve(responseJSON)
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
    whereShouldIStart = () => {
        return new Promise((resolve,reject) => {
            fetch(URL + 'where-should-i-start', {
                method: 'GET'
            })
            .then((response) => {
                resolve(response.json())
            })
            .then((responseJSON) => {
                resolve(responseJSON)
            })
            .catch((err) => {
                reject(err);
            })
        })
    }

    getLectureList = (slug) => {
        console.table({
            headers: {
                'Authorization': 'Bearer '+ String(Account.token)
            }
        })
        return new Promise((resolve,reject) => {
            fetch(URL + 'dashboard/package/'+ slug+ '/list', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer '+ String(Account.token),
                    'content-type': 'application/json; charset=utf-8',
                },
            })
            .then((response) => {
                resolve(response.json())
            })
            .then((responseJSON) => {
                resolve(responseJSON)
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
}

export default new Store();