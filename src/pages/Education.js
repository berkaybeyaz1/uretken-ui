import React, { Component, Fragment } from "react";

import Content from "./education/content/Content";
import { observer } from "mobx-react";
import Services from "../stores/Services";

@observer
class Education extends Component {
  constructor(props) {
    super();
    this.state = {
      lecture: [],
      loading: false,
    }
  }
  componentWillMount() {
    const { ders, konu } = this.props.match.params;
    Services.getLecture(ders, konu).then((response) => {
      this.setState({
        lecture: response,
        loading: true
      })
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    const { ders, konu } = this.props.match.params;
    return (
      <Fragment>
      {this.state.loading ? 
        <Content lecture={this.state.lecture} />
      : null}
      </Fragment>
    );
  }
}
export default Education