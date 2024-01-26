import React from "react";
import { Button } from "antd";
import NavBar from "./components/NavBar/NavBar";
import topMostBackground from "./assets/topMostBackground.svg";
import "./App.css";
import "./assets/font.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import ImageSlider from "./components/ImageSlider";
import VideoCard from "./components/VideoCard";
import ProfilePic1 from "./assets/top-most-video-member-profile-pic/profilePic1.webp";
import ProfilePic2 from "./assets/top-most-video-member-profile-pic/profilePic2.webp";
import ProfilePic3 from "./assets/top-most-video-member-profile-pic/profilePic3.webp";
import TypingEffect from "./components/TypingEffect";

import video1 from "./assets/video1.mp4";
import video1image from "./assets/video1image.webp";

const App = () => {
  const { typingEffectText } = TypingEffect();
  return (
    <>
      <NavBar />
      <div className="first-half">
        <div
          className="first-half-first-heading"
          style={{
            fontFamily: "Roobert-Medium, sans-serif",
            textAlign: "center",
            fontSize: "72px",
            paddingTop: "64px",
          }}
        >
          <div style={{ color: "#7559FF" }}>AI-powered video</div>
          <div style={{ color: "#232833" }}> creations at scale</div>
        </div>
        <div
          className="first-half-second-heading"
          style={{
            fontFamily: "Roobert-Regular, sans-serif",
            textAlign: "center",
            fontSize: "24px",
            color: "#0C062C",
            marginTop: "24px",
          }}
        >
          <div>Effortlessly produce studio quality videos</div>
          <div>with AI-generated avatars and voices.</div>
        </div>
        <div
          className="first-half-third-heading"
          style={{
            fontFamily: "Roobert-Regular, sans-serif",
            textAlign: "center",
            fontSize: "24px",
            paddingTop: "30px",
          }}
        >
          <Button
            type="ghost"
            className="custom-button"
            style={{
              fontFamily: "Roobert-Medium, sans-serif",
            }}
          >
            Get started for free <ArrowRightOutlined />
          </Button>
          <div
            className="first-half-fourth-heading"
            style={{
              fontFamily: "Roobert-Regular, sans-serif",
              textAlign: "center",
              fontSize: "12px",
              color: "#4E5666",
              paddingTop: "5px",
            }}
          >
            <div>No credit card needed</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <ImageSlider />
        </div>
        <div
          className="top-video"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            padding: "0px",
            height: "413.44px",
            paddingBottom: "100px",
            paddingLeft: "200px",
          }}
        >
          <VideoCard image={video1image} video={video1} />
          <div
            className="script-over-video"
            style={{
              position: "absolute",
              top: "70%",
              left: "24%",
              padding: "5px",
              height: "340px",
              width: "277px",
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust the alpha value for transparency
              padding: "34px",
              borderRadius: "25px",
              backdropFilter: "blur(30px)", // Set the blur effect
              boxShadow: "0 60px 120px rgba(11,0,70,.7)",
              zIndex: 31,
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={ProfilePic1}
                  style={{
                    width: "54px",
                    borderRadius: "50%",
                    backgroundColor: "#7559FF",
                    boxShadow:
                      "0 1px 1.45px rgba(117,89,255,.04), 0 13px 22px rgba(117,89,255,.52)",
                  }}
                />
                <img
                  src={ProfilePic2}
                  style={{ width: "54px", borderRadius: "50%" }}
                />
                <img
                  src={ProfilePic3}
                  style={{
                    width: "54px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                fontFamily: "Roobert-Medium, sans-serif",
                fontSize: "20px",
                color: "#7559FF",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Script
            </div>
            <div
              style={{
                fontFamily: "Roobert-Medium, sans-serif",
                fontSize: "20px",
                color: "#232833",
                marginTop: "4px",
              }}
            >
              {typingEffectText}
            </div>
          </div>
        </div>
      </div>
      <div className="seocond-half-container">
        <div className="second-half">
          <div
            className="second-half-background"
            style={{
              backgroundColor: "#775CFE",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
              position: "relative",
              filter: "blur(150px)",
              width: "200vw",
              height: "954px",
              top: "-50%",
              bottom: "-50%",
              left: "-50%",
              right: "-50%",
              transform: "rotate(-10deg) translate(0px, -350px)",
              overflow: "hidden",
            }}
          ></div>
        </div>
      </div>
      <div className="third-half">
        <div className="second-half-textpart">
          <div className="second-half-textpart" style={{}}>
            text 1
          </div>
          <div>text 1</div>
          <div>text 2</div>
          <div>text 3</div>
        </div>
      </div>
    </>
  );
};

export default App;
