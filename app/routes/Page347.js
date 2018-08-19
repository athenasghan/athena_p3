/**
 *
 * Page347
 *
 */
import React, { Component } from "react";
import { Row, Column } from "modules/Layout";
class Page347 extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Row style={{ color: "#ffffff", backgroundColor: "#ffffff" }}>
          <Column col={12}>
            <div>
              <div
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  height: "50px",
                  alignItems: "center",
                  backgroundColor: "#9b9b9b",
                  borderRadius: "4px",
                  position: "absolute",
                  left: "100px"
                }}
              >
                <span />
              </div>
              <div
                style={{
                  justifyContent: "center",
                  height: "50px",
                  alignItems: "center",
                  backgroundColor: "#9b9b9b",
                  borderRadius: "4px",
                  width: "200px",
                  position: "absolute",
                  transform: "translateX(-50%)",
                  left: "50%",
                  display: "inline"
                }}
              >
                <span />
              </div>
              <div
                style={{
                  justifyContent: "center",
                  height: "50px",
                  alignItems: "center",
                  backgroundColor: "#9b9b9b",
                  borderRadius: "4px",
                  width: "200px",
                  position: "absolute",
                  display: "inline",
                  marginLeft: "100px"
                }}
              >
                <span />
              </div>
              <div
                style={{
                  justifyContent: "center",
                  height: "50px",
                  alignItems: "center",
                  backgroundColor: "#9b9b9b",
                  borderRadius: "4px",
                  width: "200px",
                  position: "absolute",
                  display: "inline",
                  right: "100px"
                }}
              >
                <span />
              </div>
            </div>
            <div style={{ backgroundColor: "#ffffff" }}>
              <div
                style={{
                  height: "100px",
                  backgroundColor: "#ffffff",
                  borderRadius: "4px"
                }}
              >
                <Row><Column /></Row><span>Empty div</span>
              </div>
            </div>
          </Column>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "50px",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: "4px"
          }}
        >
          <Row><Column><div /></Column></Row>
        </div>
        <Row>
          <Column col={6}>
            <div
              style={{
                backgroundColor: "#000000",
                height: "100px",
                marginLeft: "100px",
                position: "relative",
                width: "78%"
              }}
            />
          </Column>
        </Row>
        <Row>
          <Column col={12} style={{ marginTop: "60px" }}>
            <div
              style={{
                backgroundColor: "#e12a2a",
                height: "600px",
                marginLeft: "100px",
                position: "relative",
                width: "90%"
              }}
            />
          </Column>
        </Row>
        <div
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            marginTop: "50px"
          }}
        >
          <Row col={3} style={{ height: "100px", width: "100%" }}>
            <Column col={3}>
              <div
                style={{
                  display: "inline-block",
                  color: "#9b9b9b",
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#ffffff"
                }}
              >
                <Row>
                  <Column col={6}>
                    <div>
                      <div
                        style={{
                          height: "30px",
                          backgroundColor: "#fcecd7",
                          borderRadius: "4px",
                          width: "100%"
                        }}
                      >
                        <span />
                      </div>
                    </div>
                  </Column>
                </Row>
                <span>Text</span>
              </div>
            </Column>
            <Column style={{ height: "100px" }} col={3}>
              <div
                style={{
                  height: "50px",
                  backgroundColor: "rgba(155, 155, 155, 0.57)",
                  marginRight: "50px"
                }}
              >
                <span>Text</span>
              </div>
            </Column>
            <Column col={3} style={{ height: "100%" }}>
              <div
                style={{
                  height: "50px",
                  backgroundColor: "rgba(155, 155, 155, 0.57)",
                  marginRight: "50px"
                }}
              >
                <span>Text</span>
              </div>
            </Column>
            <Column col={3}>
              <div
                style={{
                  height: "30px",
                  backgroundColor: "rgba(155, 155, 155, 0.57)",
                  marginRight: "50px"
                }}
              >
                <span style={{ height: "100px" }}>Text</span>
              </div>
            </Column>
          </Row>
        </div>
        <div />
        <div
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            marginTop: "50px"
          }}
        >
          <Row col={3} style={{ height: "100px", width: "100%" }}>
            <Column col={3}>
              <div
                style={{
                  display: "inline-block",
                  color: "#9b9b9b",
                  height: "100px",
                  width: "100%",
                  backgroundColor: "#da5959"
                }}
              >
                <span>Text</span>
              </div>
            </Column>
            <Column style={{ height: "100px" }} col={3}>
              <div
                style={{
                  display: "inline-block",
                  color: "#9b9b9b",
                  height: "100%"
                }}
                col={3}
              >
                <span>Text</span>
              </div>
            </Column>
            <Column col={3} style={{ height: "100%" }}>
              <div
                style={{
                  display: "inline-block",
                  color: "#9b9b9b",
                  height: "100%"
                }}
                col={3}
              >
                <span>Text</span>
              </div>
            </Column>
            <Column col={3}>
              <div
                style={{
                  display: "inline-block",
                  color: "#9b9b9b",
                  height: "100px"
                }}
                col={3}
              >
                <span style={{ height: "100px" }}>Text</span>
              </div>
            </Column>
          </Row>
        </div>
        <Row />
      </div>
    ); // eslint-disable-line
  }
}
export default Page347;
