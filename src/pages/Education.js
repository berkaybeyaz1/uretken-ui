import React, { Component, Fragment } from "react";

import Content from "./education/content/Content";
import { observer } from "mobx-react";

@observer
class Education extends Component {
  render() {
    const { ders, konu } = this.props.match.params;
    return (
      <Fragment>
        <Content ders={ders} konu={konu} />
      </Fragment>
    );
  }
}
export default Education