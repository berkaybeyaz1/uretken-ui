import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./../index/index.css";

import Card1 from "./../../../img/card-1.png";

export default class Index extends Component {
  render() {
    const {
      road_map,
      link
    } = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="ua-card ua-card-career">
            <div className="ua-card__img">
              <img src={Card1} alt="" />
            </div>
            <div>
              <h6 className="ua-card__header">{road_map.name}</h6>
              <p>Ben, Girişimci olmak istiyorum.</p>
            </div>
            <Link to={link} className="btn">
              Öğrenmeye Devam Et
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
