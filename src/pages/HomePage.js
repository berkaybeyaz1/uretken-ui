import React, { Component, Fragment } from "react";

import Index from "./homepage/index/Index";
import LearnEverything from "./homepage/learn-everything/LearnEverything";
import StartImmediately from "./homepage/start-immediately/StartImmediately";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Index />
        <LearnEverything />
        <StartImmediately />
      </Fragment>
    );
  }
}
