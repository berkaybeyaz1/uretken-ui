import React, { Component, Fragment } from "react";

import "./../practical/practical.css";

import Card1 from "./../../../img/practice.png";

export default class Practical extends Component {
  render() {
    return (
      <Fragment>
        <section
          className="practical wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <div className="container">
            <h6 className="career-header">Yapılan Pratikler</h6>
            <div className="row">
              <div className="practical-box">
                <div className="ua-practical-box__img">
                  <img src={Card1} alt="" />
                </div>
                <h6 className="ua-practical-box__sub-header">
                  İş Modeli Oluştur
                </h6>
              </div>
              <div className="practical-box">
                <div className="ua-practical-box__img">
                  <img src={Card1} alt="" />
                </div>
                <h6 className="ua-practical-box__sub-header">
                  İş Modeli Oluştur
                </h6>
              </div>
              <div className="practical-box">
                <div className="ua-practical-box__img">
                  <img src={Card1} alt="" />
                </div>
                <h6 className="ua-practical-box__sub-header">
                  İş Modeli Oluştur
                </h6>
              </div>
              <div className="practical-box">
                <div className="ua-practical-box__img">
                  <img src={Card1} alt="" />
                </div>
                <h6 className="ua-practical-box__sub-header">
                  İş Modeli Oluştur
                </h6>
              </div>
              <div className="practical-box">
                <div className="ua-practical-box__img">
                  <img src={Card1} alt="" />
                </div>
                <h6 className="ua-practical-box__sub-header">
                  İş Modeli Oluştur
                </h6>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
