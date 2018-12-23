import React, { Component, Fragment } from "react";

import "./../learn-everything/learn-everything.css";

import LearnEverything1 from "./../../../img/learn-everything-1.png";
import LearnEverything2 from "./../../../img/learn-everything-2.png";
import LearnEverything3 from "./../../../img/learn-everything-3.png";

export default class LearnEverything extends Component {
  render() {
    return (
      <Fragment>
        <section
          className="learn-everything wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="1.75s"
        >
          <p className="learn-everything__text text-center">
            Her şeyi öğrenmenin en kolay yolu.
          </p>
          <div className="container">
            <div className="learn-everything__card-wrap text-center d-flex justify-content-around">
              <div className="row">
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                  <div className="learn-everything__card-wrap__card">
                    <div className="learn-everything__card-wrap__card__img d-flex align-items-center  justify-content-center">
                      <img src={LearnEverything1} alt="learn-everything-1" />
                    </div>
                    <h6>İzle.</h6>
                    <p>
                      Dilediğin eğitimi ustasından izle ve öğrenmeye kolayca
                      başla.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                  <div className="learn-everything__card-wrap__card">
                    <div className="learn-everything__card-wrap__card__img d-flex align-items-center  justify-content-center">
                      <img src={LearnEverything2} alt="learn-everything-2" />
                    </div>
                    <h6>Pratik Yap.</h6>
                    <p>
                      Eğitimleri öğrenirken aynı zaman da pratik yaparak
                      pekiştir.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                  <div className="learn-everything__card-wrap__card">
                    <div className="learn-everything__card-wrap__card__img d-flex align-items-center  justify-content-center">
                      <img src={LearnEverything3} alt="learn-everything-3" />
                    </div>
                    <h6>Gerçekleştir.</h6>
                    <p>Eğitim sonunda hayallerini gerçekleştirmeye başla.</p>
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
