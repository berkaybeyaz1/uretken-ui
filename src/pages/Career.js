import React, { Component, Fragment } from "react";

import Index from "./career/index/Index";
import Way from "./career/way/Way";
import Practical from "./career/practical/Practical";
import { observer } from "mobx-react";
import Services from '../stores/Services';

@observer
class Career extends Component {

  constructor(props){
    super();
    this.state = {
      lectureList: [],
      loading: false,
    }
  }
  
  componentWillMount() {
    const slug = this.props.match.params.kariyer
    Services.getLectureList(slug).then((response) => {
      this.setState({
        loading: true,
        road_map: response,
      })
    }).catch((err) => console.log(err))
  }

  render() {
    return (
      <Fragment>
      {this.state.loading ? 
        <>
        <Index road_map={this.state.road_map[0]}/>
        {this.state.road_map.map((value) => {
          return(
            <Way data={value}/>
          )
        })}
        </>
      : null }
      </Fragment>
    );
  }
}
export default Career