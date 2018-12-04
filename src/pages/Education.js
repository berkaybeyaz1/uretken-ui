import React, { Component, Fragment } from "react";

import Content from "./education/content/Content";

export default class Education extends Component {
  render() {
    const { lesson, subject } = this.props.match.params;
    return (
      <Fragment>
        <Content lesson={lesson} subject={subject} />
      </Fragment>
    );
  }
}
