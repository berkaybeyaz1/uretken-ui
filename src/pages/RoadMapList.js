import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Store from '../stores';
import "./homepage/index/index.css";

import Card1 from "./../img/card-1.png";
import Index from "./career/index/Index";
import Way from "./career/way/Way";
import Practical from "./career/practical/Practical";
import { observer } from "mobx-react";

@observer
class HomePage extends Component {
    constructor(props) {
        super()

        this.state = {
            roadMaps: [],
        }
    }
    componentWillMount() {
        Store.Services.getRoadMapList().then((response) => {
            this.setState({
                roadMaps: response.data,
            })
        })
    }


  render() {
    return (
        <Fragment>
        {this.state.roadMaps.map((value) => {
            return (
                <div className="container">
                    <div className="ua-card ua-card-career" style={{marginBottom: 40}}>
                        <div className="ua-card__img">
                            <img src={Card1} alt="" />
                        </div>
                        <div>
                            <h6 className="ua-card__header">{value.name}</h6>
                            <p>Ben, Girişimci olmak istiyorum.</p>
                        </div>
                        <Link to={'kariyer/' + value.slug} className="btn">
                            Öğrenmeye Devam Et
                        </Link>
                    </div>
                </div>
            )
        })}
        
      </Fragment>
    );
  }
}
export default HomePage