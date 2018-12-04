import React, { Component, Fragment } from "react";

import "./../way/way.css";

import Card1 from "./../../../img/card-1.png";

export default class Way extends Component {
  render() {
    return (
      <Fragment>
        <section className="way">
          <div className="container">
            <h6 className="career-header">Girişimcinin Yolu</h6>
            <div className="row">
              <div className="way-box active">
                <div className="ua-way-box__img">
                  <img src={Card1} alt="" />
                </div>
                <div className="ua-way-box__number">01</div>
                <h6 className="ua-way-box__header">Girişimcilik</h6>
                <span className="ua-way-box__span">101</span>
                <a href="" className="ua-way-box__link">
                  Detaylı Bilgi
                </a>
              </div>
              <div className="way-box">
                <div className="ua-way-box__img">
                  <img src={Card1} alt="" />
                </div>
                <div className="ua-way-box__number">02</div>
                <h6 className="ua-way-box__header">Girişimcilik</h6>
                <span className="ua-way-box__span">101</span>
                <a href="" className="ua-way-box__link">
                  Detaylı Bilgi
                </a>
              </div>
              <div className="way-box">
                <div className="ua-way-box__img">
                  <img src={Card1} alt="" />
                </div>
                <div className="ua-way-box__number">03</div>
                <h6 className="ua-way-box__header">Girişimcilik</h6>
                <span className="ua-way-box__span">101</span>
                <a href="" className="ua-way-box__link">
                  Detaylı Bilgi
                </a>
              </div>
              <div className="way-box">
                <div className="ua-way-box__img">
                  <img src={Card1} alt="" />
                </div>
                <div className="ua-way-box__number">04</div>
                <h6 className="ua-way-box__header">Girişimcilik</h6>
                <span className="ua-way-box__span">101</span>
                <a href="" className="ua-way-box__link">
                  Detaylı Bilgi
                </a>
              </div>
              <div className="way-box">
                <div className="ua-way-box__img">
                  <img src={Card1} alt="" />
                </div>
                <div className="ua-way-box__number">05</div>
                <h6 className="ua-way-box__header">Girişimcilik</h6>
                <span className="ua-way-box__span">101</span>
                <a href="" className="ua-way-box__link">
                  Detaylı Bilgi
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
