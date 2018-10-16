import React, { Component, Fragment } from "react";

import "./../start-immediately/start-immediately.css";

export default class StartImmediately extends Component {
  render() {
    return (
      <Fragment>
        <section className="start-immediately">
          <div className="container text-center">
            <h5 className="start-immediately__header">
              Bugün, hemen başla ve hayallerini gerçekleştir.
            </h5>
            <p className="start-immediately__text">
              Bahaneyi, çaresizliği bırak ve hemen hayallerine giden yolda
              başarmaya başla!
            </p>
            <a href="#" className="btn start-immediately__button">
              Hemen Başla
            </a>
          </div>
        </section>
      </Fragment>
    );
  }
}
