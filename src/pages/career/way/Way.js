import React, { Component, Fragment } from "react";

import "./../way/way.css";
import Slider from "react-slick";

import Card1 from "./../../../img/card-1.png";

export default class Way extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      className: "row",
      slidesToScroll: 5
    };
    return (
      <Fragment>
        <section
          className="way wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="container">
            <h6 className="career-header">{this.props.data.name}</h6>
            <Slider {...settings}>
              {this.props.data.lectures.map((value, i) => {
                console.log(value);
                return (
                  <div className="way-box">
                    <div className="ua-way-box__img">
                      <img src={Card1} alt="" />
                    </div>
                    <h6 className="ua-way-box__header">{value.lecture_name}</h6>
                    <a
                      href={`/egitim/${this.props.data.slug}/konu/${
                        value.slug
                      }`}
                      className="ua-way-box__link"
                    >
                      Detaylı Bilgi
                    </a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>
      </Fragment>
    );
  }
}
