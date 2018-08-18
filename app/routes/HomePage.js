/**
 *
 * HomePage
 *
 */
import React, { Component } from "react";
import { Center } from "modules/CSSPaterns";
class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div style={{ color: "#6b6161" }}>
          <div
            style={{
              height: "100px",
              borderRadius: "4px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
              width: "100%"
            }}
          >
            <span
              style={{
                lineHeight: "20px",
                color: "#4a90e2",
                fontSize: "31px",
                fontWeight: 600,
                fontStyle: "normal"
              }}
            >
              Introduction{" "}
            </span>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "400px",
                alignItems: "center",
                backgroundColor: "#4a90e2",
                borderRadius: "4px",
                width: "100%"
              }}
            >
              <h1
                style={{
                  right: "300px",
                  bottom: "300px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  color: "#000000",
                  fontSize: "30px",
                  wordSpacing: "9px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "8px"
                }}
              >
                <span
                  style={{
                    top: "22px",
                    color: "#ffffff",
                    letterSpacing: "3px",
                    lineHeight: "25px"
                  }}
                >
                  한슬기
                </span>
                <h2 style={{ fontSize: "30px", margin: "5px" }}>
                  <span style={{ fontSize: "24px" }}>"안녕하세요 한슬기입니다"</span>
                  <h3
                    style={{
                      marginRight: "14px",
                      marginBottom: "10px",
                      marginTop: "17px"
                    }}
                  >
                    <img
                      src="https://raw.githubusercontent.com/athenasghan/athena_p2/master/strayy_night.jpg"
                      style={{ width: "80%", height: "100%" }}
                    />
                    <a href="https://www.facebook.com/athena.han.7140" />
                  </h3>
                  <h4 style={{ fontSize: "27px" }}>
                    <span style={{ fontSize: "24px" }}>SNS</span>
                    <a href="https://www.facebook.com/athena.han.7140">
                      <span style={{ color: "#2631df" }}> Facebook</span>
                    </a>
                  </h4>
                </h2>
              </h1>
            </div>
          </div>
          <footer>
            <p>
              <span>Video</span>
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                style={{
                  height: "50%",
                  width: "50%",
                  overflow: "auto",
                  display: "block"
                }}
              >
                <source
                  src="https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
                  type="video/mp4"
                />
              </video>
            </p>
          </footer>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#fcecd7",
                borderRadius: "4px"
              }}
            >
              <Center axis="xy" /><span>Text</span><span>Empty div</span>
            </div>
          </div>
          <Center />
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default HomePage;
