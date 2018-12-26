import React, { Component, Fragment } from "react";
import "../content/content.css";
import { withRouter } from "react-router";
import YouTube from 'react-youtube';
import Star from "../../../img/star.png";
import Star1 from "../../../img/star-1.png";
import Tick from "../../../img/tick.svg";
import Star0 from "../../../img/star-0.png";
import Services from "../../../stores/Services";
import { observer } from "mobx-react";
const _ = require('lodash')
const Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="15"
      viewBox="0 0 21 15"
    >
      <path
        fill="#212924"
        d="M20.181 1.288C19.423.373 18.024 0 15.351 0H5.65C2.915 0 1.49.397.736 1.37 0 2.32 0 3.72 0 5.656v3.69C0 13.095.874 15 5.649 15h9.702c2.318 0 3.602-.33 4.433-1.136.852-.828 1.216-2.18 1.216-4.519v-3.69c0-2.042-.057-3.449-.819-4.367zm-6.699 6.721l-4.406 2.338a.669.669 0 0 1-.664-.022.69.69 0 0 1-.327-.588V5.078a.69.69 0 0 1 .326-.588.669.669 0 0 1 .664-.022L13.48 6.79a.689.689 0 0 1 .365.61c0 .256-.14.49-.364.61z"
      />
    </svg>
  );
};
const TextSvg = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="21px"
      height="15px"
      viewBox="0 0 470.586 470.586"
    >
      <g>
        <path
          fill="#212924"
          d="M327.081,0H90.234C74.331,0,61.381,12.959,61.381,28.859v412.863c0,15.924,12.95,28.863,28.853,28.863H380.35
     c15.917,0,28.855-12.939,28.855-28.863V89.234L327.081,0z M333.891,43.184l35.996,39.121h-35.996V43.184z M384.972,441.723
     c0,2.542-2.081,4.629-4.635,4.629H90.234c-2.55,0-4.619-2.087-4.619-4.629V28.859c0-2.548,2.069-4.613,4.619-4.613h219.411v70.181
     c0,6.682,5.443,12.099,12.129,12.099h63.198V441.723z M128.364,128.89H334.15c5.013,0,9.079,4.066,9.079,9.079
     c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079C119.285,132.957,123.352,128.89,128.364,128.89z
      M343.229,198.98c0,5.012-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
     C339.163,189.901,343.229,193.968,343.229,198.98z M343.229,257.993c0,5.013-4.066,9.079-9.079,9.079H128.364
     c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15C339.163,248.914,343.229,252.98,343.229,257.993z
      M343.229,318.011c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
     C339.163,308.932,343.229,312.998,343.229,318.011z"
        />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
};
@observer
class Content extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      completed: false,
      selectedPane: 0,
      allLecture: props.lecture,
      selectedLecture: props.lecture[0],
      totalData: props.location.state.totalData,
      currentIndex: props.location.state.currentIndex
    };
  }
  changePane = id => {
    this.setState({
      selectedPane: id,
      selectedLecture: this.state.allLecture[id],
      completed: false,
    });
  };

  componentWillMount() {
    const { ders, konu } = this.props.match.params;
    Services.getLecturePaginate(ders, konu).then((response) => {
      this.setState({
        nextLectureSlug: response[0].next.length > 0 ? response[0].next[0].slug : "",
        beforeLectureSlug: response[0].back !== null ?  response[0].back.slug : ""
      })
    })
  }

  nextPage = () => {
    const { ders, konu } = this.props.match.params;
    const getLectureList = this.props.lecture.length - 1;
    const currentPane = this.state.selectedPane;
    if (currentPane > getLectureList || currentPane === getLectureList) {
      if(this.state.completed === true) {
        this.props.history.replace(`/egitim/${ders}/konu/${this.state.nextLectureSlug}`)
        Services.getLecturePaginate(ders, konu).then((response) => {
          this.setState({
            nextLectureSlug: response[0].next.length > 0 ? response[0].next[0].slug : "",
            beforeLectureSlug: response[0].back !== null ?  response[0].back.slug : ""
          })
        })
        const index = this.state.currentIndex + 1;
        console.log(this.state.totalData[index]);
        window.localStorage.setItem('last_lecture', this.state.totalData[index].slug)
        Services.getLecture(ders, this.state.totalData[index].slug).then((response) => {
          this.setState({            
            selectedLecture: response[0],
            allLecture: response
          })
        })
        this.setState({
          selectedPane: 0,
          completed: false,
          currentIndex: index,
        })
      } else {
        this.setState({
          completed: true,
        })
      }
    } else {
      this.setState({
        selectedPane: currentPane + 1,
        selectedLecture: this.props.lecture[currentPane + 1]
      });
    }
  };
  prevPane = () => {
    const getLectureList = this.state.selectedLecture.length - 1;
    const currentPane = this.state.selectedPane;
    if (currentPane === 0 || currentPane <= 0) {
      return;
    } else {
      this.setState({
        selectedPane: currentPane - 1,
        selectedLecture: this.state.selectedLecture[currentPane - 1]
      });
    }
  };
  render() {
    return (
      <Fragment>
        <section className="education-index">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="education">
                  <div className="education__head">
                    <ul className="education__head__ul">
                      <li onClick={this.prevPane}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="18"
                          viewBox="0 0 11 18"
                        >
                          <path
                            fill="#3F60E8"
                            d="M3.528 8.929l6.687-6.678a.967.967 0 0 0 .285-.69.968.968 0 0 0-.285-.69L9.629.284A.97.97 0 0 0 8.937 0a.97.97 0 0 0-.69.285L.284 8.236A.968.968 0 0 0 0 8.928c0 .263.1.51.285.694l7.954 7.943a.97.97 0 0 0 .691.285.97.97 0 0 0 .691-.285l.586-.585c.381-.38.381-1 0-1.381l-6.679-6.67z"
                          />
                        </svg>
                        <span className="education__head__prev-next">Geri</span>
                      </li>
                      {this.state.completed === false ? 
                      this.state.allLecture.map((value, index) => {
                        if (value.type === "text") {
                          return (
                            <li
                              className={
                                this.state.selectedPane === index
                                  ? "active"
                                  : null
                              }
                              onClick={() => this.changePane(index)}
                            >
                              <TextSvg />
                            </li>
                          );
                        } else {
                          return (
                            <li
                              className={
                                this.state.selectedPane === index
                                  ? "active"
                                  : null
                              }
                              onClick={() => this.changePane(index)}
                            >
                              <Svg />
                            </li>
                          );
                        }
                      }) : (
                        <div className="education__head__success">
                          <img src={Tick} alt=""/>
                          <span>Bölüm Sonu</span>
                        </div>
                      )}
                      <li onClick={this.nextPage}>
                        <span className="education__head__prev-next">
                          İleri
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="18"
                          viewBox="0 0 11 18"
                        >
                          <path
                            fill="#3F60E8"
                            d="M7.472 8.929L.785 2.25A.967.967 0 0 1 .5 1.56c0-.262.101-.507.285-.69l.586-.586A.97.97 0 0 1 2.063 0a.97.97 0 0 1 .69.285l7.962 7.951c.185.184.286.43.285.692 0 .263-.1.51-.285.694L2.76 17.565a.97.97 0 0 1-.691.285.97.97 0 0 1-.691-.285l-.586-.585a.977.977 0 0 1 0-1.381l6.679-6.67z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                  <div className="education__content">
                    <span className="education__fav">Favorilere ekle</span>
                    {this.state.completed === true ?
                      (
                        <div className="path-finish">
                          <div className="row">
                            <div className="col-12 col-md-5">
                              <h5 className="path-finish__header">TEBRİKLER!</h5>
                              <img src={Star1} alt="dolu yıldız" className="star" />
                              <img src={Star0} alt="boş yıldız" className="star" />
                              <p className="path-finish__desc">
                                Girişimci olmaya adım adım yaklaştın
                              </p>
                              <p className="path-finish__desc">
                                Tüm pratikleri tam puanla geçemediğin için tek
                                yıldıza sahip olabildin.
                              </p>
                              <h6 className="path-finish__sub-header">
                                Kazanılan XP
                              </h6>
                              <p className="path-finish__sub-desc">400/1000XP</p>
                              <h6 className="path-finish__sub-header">
                                Kazanılan Tecrübeler
                              </h6>
                              <p className="path-finish__sub-desc">
                                Girişimcilik Tecrübesi 50+1
                              </p>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: `${100/(this.state.totalData.length/this.state.currentIndex+1)}%` }}
                                  aria-valuenow={100/(this.state.totalData.length/this.state.currentIndex+1)}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                />
                              </div>
                            </div>
                          <div className="col-12">
                            <div className="path-finish__buttons">
                              <a href="#" onClick={() => this.changePane(0)} className="btn btn--small btn--ghost">
                                Eğitimi Tekrarla
                              </a>
                              <a href="#" onClick={this.nextPage} className="btn btn--small">
                                Devam Et
                              </a>
                            </div>
                          </div>
                        </div>
                        </div>
                      )
                    : null}
                    {this.state.selectedLecture.type === "text" && this.state.completed === false ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.selectedLecture.data
                        }}
                      />
                    ) : null}
                    {this.state.selectedLecture.type === "video" && this.state.completed === false ? (
                      <YouTube
                        opts={{
                          autoplay: 1,
                          controls: 0,
                          width: '100%',
                          height: '500px',
                        }}
                        videoId={this.state.selectedLecture.data}
                      />
                    ) : null}
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
export default withRouter(Content)