/**
 *
 * Page6
 *
 */
import React, { Component } from "react";
import { Row } from "modules/Layout";
class Page6 extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <h3
            style={{ textAlign: "center", padding: "15px", color: "#ffffff" }}
          >
            <span style={{ color: "#9b6b6b" }}>Work page</span>
          </h3>
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default Page6;
