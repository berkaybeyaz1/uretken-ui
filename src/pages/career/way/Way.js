import React, { Component, Fragment } from "react";

import "./../way/way.css";
import Slider from "react-slick";

import Card1 from "./../../../img/card-1.png";

export default class Way extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last_lecture: ""
    }
  }
  componentWillMount() {
   const getLastLecture = window.localStorage.getItem('last_lecture');
   this.setState({
     last_lecture: getLastLecture
   })
  }
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
                console.log(this.state.last_lecture === value.slug, this.state.last_lecture, value.slug)
                return (
                  <div className={`way-box ${this.state.last_lecture === value.slug ? 'way-box-last' : ''}`} onClick={() => this.props.history.push(`/egitim/${this.props.data.slug}/konu/${value.slug}`, {
                        totalData: this.props.data.lectures,
                        currentIndex: i,
                      })}>
                    <div className="ua-way-box__img">
                      <img src={Card1} alt="" />
                    </div>
                    <h6 className="ua-way-box__header">{value.lecture_name}</h6>
                    <span
                      onClick={() => this.props.history.push(`/egitim/${this.props.data.slug}/konu/${value.slug}`, {
                        totalData: this.props.data.lectures,
                        currentIndex: i,
                      })}
                      className="ua-way-box__link"
                    >
                      Detaylı Bilgi
                    </span>
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
