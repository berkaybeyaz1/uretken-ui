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
      console.log(response, slug);
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
        <Index road_map={this.state.road_map[0]} link={"/egitim/"+ this.props.match.params.kariyer + "/konu/tanitim"}/>
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