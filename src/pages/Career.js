import React, { Component, Fragment } from "react";

import Index from "./career/index/Index";
import Way from "./career/way/Way";
import Practical from "./career/practical/Practical";

export default class Career extends Component {
  render() {
    return (
      <Fragment>
        <Index />
        <Way />
        <Practical />
      </Fragment>
    );
  }
}
