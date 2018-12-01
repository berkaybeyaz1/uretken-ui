import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Store from '../../../stores';

import "./../index/index.css";

import Card1 from "./../../../img/card-1.png";
import Card2 from "./../../../img/card-2.png";
import Card3 from "./../../../img/card-3.png";
import Detail1 from "./../../../img/detail-1.png";
import Detail2 from "./../../../img/detail-2.png";
import Detail3 from "./../../../img/detail-3.png";
import Detail4 from "./../../../img/detail-4.png";
import Detail5 from "./../../../img/detail-5.png";
import Detail6 from "./../../../img/detail-6.png";


class Index extends Component {
  constructor(props) {
    super()

    this.state = {
      roadMaps: [],
    }
  }
  componentWillMount() {
    Store.Services.whereShouldIStart().then((response) => {
      this.setState({
        roadMaps: response.data,
      })
    })
  }

  render() {
    return (
      <Fragment>
        <section className="index">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 text-center text-lg-left">
                <p className="index__header">
                  Nereden başlayacağını bilmiyor musun?
                </p>
                <p className="index__subheader">
                  O zaman hemen yan taraftaki arama kısmından nasıl başlaman
                  gerektiğini öğren.
                </p>
                <p>
                  <a href="#" className="btn index__btn">
                    <span>Ücretsiz Kayıt Ol</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="17"
                      viewBox="0 0 10 17"
                      className="index__btn__svg"
                    >
                      <path
                        fill="#FFF"
                        d="M6.64 8.496l-6.368 6.36a.921.921 0 0 0-.272.658c0 .249.096.482.272.657l.558.557c.175.176.409.272.658.272.25 0 .483-.096.659-.272l7.581-7.572a.922.922 0 0 0 .272-.66.922.922 0 0 0-.272-.66L2.154.272A.924.924 0 0 0 1.495 0a.925.925 0 0 0-.658.272L.279.829a.93.93 0 0 0 0 1.315l6.36 6.352z"
                      />
                    </svg>
                  </a>
                  <a href="#" className="index__info d-block d-lg-inline-block">
                    Detaylı Bilgi
                  </a>
                </p>
                <div className="index__details">
                  <img src={Detail1} alt="detay 1" />
                  <img src={Detail2} alt="detay 2" />
                  <img src={Detail3} alt="detay 3" />
                  <img src={Detail4} alt="detay 4" />
                  <img src={Detail5} alt="detay 5" />
                  <img src={Detail6} alt="detay 6" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
              {this.state.roadMaps.map((value, index) => {
                return (
                  <Link to={"kariyer/" + value.slug} className="ua-card ua-card-index">
                    <div className="ua-card__img">
                      <img src={Card1} alt="" />
                    </div>
                    <p>{value.name}</p>
                  </Link>
                )
              })}
                
                <p className="index__more text-right">
                  <a href="#">
                    <span>Daha Fazla Göster</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="17"
                      viewBox="0 0 10 17"
                      className="index__more__svg"
                    >
                      <path
                        fill="#FFF"
                        d="M6.64 8.496l-6.368 6.36a.921.921 0 0 0-.272.658c0 .249.096.482.272.657l.558.557c.175.176.409.272.658.272.25 0 .483-.096.659-.272l7.581-7.572a.922.922 0 0 0 .272-.66.922.922 0 0 0-.272-.66L2.154.272A.924.924 0 0 0 1.495 0a.925.925 0 0 0-.658.272L.279.829a.93.93 0 0 0 0 1.315l6.36 6.352z"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default Index