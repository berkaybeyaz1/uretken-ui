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
        loading: true,
        lecture: response
      })
    })
  }
  render() {
    const { ders, konu } = this.props.match.params;
    return (
      <Fragment>
      {this.state.loading ? 
        <Content {...this.props} lecture={this.state.lecture} history={this.props.history}/>
      : null}
      </Fragment>
    );
  }
}
export default Education