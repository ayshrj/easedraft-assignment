import React, { useRef, useState, useEffect } from "react";
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
import MarketingVideo1 from "./assets/marketingVideos/marketingVideo1.mp4";
import MarketingVideo2 from "./assets/marketingVideos/marketingVideo2.mp4";
import MarketingVideo3 from "./assets/marketingVideos/marketingVideo3.mp4";
import MarketingVideo4 from "./assets/marketingVideos/marketingVideo4.mp4";
import FifthPartVideo from "./assets/fifthPartVideo.mp4";
import TypingEffect from "./components/TypingEffect";
import MarketingCard from "./components/MarketingCard";
import WindowWidthCalculator from "./components/Utility/WindowWidthCalculator";
import isMobile from "./components/Utility/IsMobile";
import video1 from "./assets/video1.mp4";
import video1image from "./assets/video1image.webp";
import image2 from "./assets/company-associated-logo/image2.webp";
import image3 from "./assets/company-associated-logo/image3.webp";
import image4 from "./assets/company-associated-logo/image4.webp";
import image5 from "./assets/company-associated-logo/image5.webp";
import image6 from "./assets/company-associated-logo/image6.webp";
import image7 from "./assets/company-associated-logo/image7.webp";
import image1 from "./assets/company-associated-logo/image1.webp";
import image8 from "./assets/company-associated-logo/image8.webp";
import image9 from "./assets/company-associated-logo/image9.webp";
import HowToCard from "./components/HowToCard";
import HowToCardImage1 from "./assets/HowToCardContent/image1.webp";
import HowToCardImage2 from "./assets/HowToCardContent/image2.svg";
import HowToCardImage2Overlap1 from "./assets/HowToCardContent/image2overlap1.webp";
import HowToCardImage2Overlap2 from "./assets/HowToCardContent/image2overlap2.webp";

import HowToCardImage3Part1 from "./assets/HowToCardContent/image3part1.webp";
import HowToCardImage3Part2 from "./assets/HowToCardContent/image3part2.webp";
import HowToCardImage3Part3 from "./assets/HowToCardContent/image3part3.webp";

const App = () => {
  const { windowWidth } = WindowWidthCalculator();
  const { typingEffectText } = TypingEffect();
  const fifthPartTextRef = useRef(null);
  const fifthPartVideoRef = useRef(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const imagesTopSlide = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  useEffect(() => {
    console.log("Component mounted!");
    info();

    return () => {
      console.log("Component will unmount!");
    };
  }, []);

  const info = () => {
    setShowErrorMessage(true);
    setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
  };

  return (
    <>
      <div className={`error-message ${showErrorMessage ? "" : "hidden"}`}>
        I have made efforts to optimize the website for mobile devices,
        <br />
        including enhancements to the navbar and specific sections. However, it
        <br />
        is currently not performing optimally on mobile devices.
      </div>
      <div
        style={{
          fontFamily: "Roobert-Medium",
        }}
      >
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
          {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            maxWidth: 500, // Set the maximum width to 500px
          }}
        >
          <ImageSlider
            myThingToScroll={"asdasd"}
            speed={20}
            height={100}
            images={imagesTopSlide}
          />
        </div> */}
          <div
            className="top-video"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              padding: "0px",
              height: "413.44px",
              paddingBottom: "100px",
              paddingLeft: "100px",
            }}
          >
            <VideoCard image={video1image} video={video1} height={50} />
            <div
              className="script-over-video"
              style={{
                position: "absolute",
                top:
                  windowWidth <= 595
                    ? "75%"
                    : windowWidth < 708
                    ? "60%"
                    : "70%",
                left: windowWidth < 708 ? "5%" : "24%",
                height: windowWidth < 708 ? "200px" : "340px",
                width: windowWidth < 708 ? "162px" : "277px",
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
                      width: windowWidth < 708 ? "30px" : "54px",
                      borderRadius: "50%",
                      backgroundColor: "#7559FF",
                      boxShadow:
                        "0 1px 1.45px rgba(117,89,255,.04), 0 13px 22px rgba(117,89,255,.52)",
                    }}
                  />
                  <img
                    src={ProfilePic2}
                    style={{
                      width: windowWidth < 991 ? "30px" : "54px",
                      borderRadius: "50%",
                    }}
                  />
                  <img
                    src={ProfilePic3}
                    style={{
                      width: windowWidth < 991 ? "30px" : "54px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  fontFamily: "Roobert-Medium, sans-serif",
                  fontSize: windowWidth < 708 ? "10px" : "20px",
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
                  fontSize: windowWidth < 708 ? "10px" : "20px",
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
        <div className="third-part" style={{ zIndex: 90 }}>
          {isMobile() && (
            <>
              <div
                style={{
                  fontFamily: "Roobert-Medium",
                  color: "white",
                  fontSize: isMobile ? "50px" : "",
                }}
              >
                Create videos for every team
              </div>
              <div
                style={{
                  fontFamily: "Roobert-Medium",
                  color: "#FFF",
                  fontSize: 24,
                }}
              >
                Engage, explain, entertain. AI-powered video creation for any
                need.
              </div>
            </>
          )}
          <div
            style={{
              position: "relative",
              margin: "0 auto",
              display: "flex",
              marginTop: windowWidth < 595 ? "-800px" : "-700px",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <div className="market-card-left">
                <div
                  style={{
                    fontFamily: "Roobert-Medium",
                    color: "#FFF",
                    fontSize: windowWidth < 1105 ? 64 : 128,
                  }}
                >
                  {!isMobile() &&
                    (windowWidth > 1105 ? (
                      <>
                        <div>Create videos</div>
                        <div>for every</div>
                        <div>team</div>
                      </>
                    ) : (
                      <>
                        <div>Create videos for every team</div>
                        <div
                          style={{
                            fontFamily: "Roobert-Medium",
                            color: "#FFF",
                            fontSize: 24,
                          }}
                        >
                          Engage, explain, entertain. AI-powered video creation
                          for any need.
                        </div>
                      </>
                    ))}
                </div>
                <MarketingCard
                  subheadingFirstLine={"Sales outreach"}
                  subheadingSecondLine={null}
                  subheadingLastLine={"that converts"}
                  subtextFirstLine={"Create personalized outreach videos"}
                  subtextSecondLine={"at scale"}
                  video={MarketingVideo2}
                />
                <MarketingCard
                  subheadingFirstLine={"Content marketing"}
                  subheadingSecondLine={null}
                  subheadingLastLine={"that engage"}
                  subtextFirstLine={"Supercharge your content calendar"}
                  subtextSecondLine={"with videos"}
                  video={MarketingVideo4}
                />
              </div>
              <div
                className="market-card-right"
                style={{
                  marginLeft: -200,
                }}
              >
                {!isMobile() && windowWidth > 1105 && (
                  <div
                    style={{
                      fontFamily: "Roobert-Medium",
                      color: "#FFF",
                      fontSize: 24,
                      marginTop: 250,
                    }}
                  >
                    <div>Engage, explain, entertain. AI-powered</div>
                    <div>video creation for any need.</div>
                  </div>
                )}
                <MarketingCard
                  subheadingFirstLine={"Product"}
                  subheadingSecondLine={"marketing"}
                  subheadingLastLine={"that resonates"}
                  subtextFirstLine={"Produce engaging & concise product"}
                  subtextSecondLine={"videos"}
                  video={MarketingVideo1}
                />
                <MarketingCard
                  subheadingFirstLine={"Learning &"}
                  subheadingSecondLine={"development"}
                  subheadingLastLine={"that teaches"}
                  subtextFirstLine={"Create training videos your team will"}
                  subtextSecondLine={"actually watch"}
                  video={MarketingVideo3}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="fourth-half-container">
          <div className="fourth-half">
            <div
              className="fourth-half-background"
              style={{
                backgroundColor: "#0c062c",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                position: "relative",
                filter: "blur(150px)",
                width: "200vw",
                height: "954px",
                top: "-90%",
                bottom: "-50%",
                left: "-50%",
                right: "-50%",
                transform: "rotate(-10deg) translate(0px, -350px)",
                overflow: "hidden",
              }}
            ></div>
          </div>
        </div>
        <div
          className="fifth-part"
          style={{
            zIndex: 90,
            background: "linear-gradient(to bottom, #ffffff,  #E6E0F4)",
          }}
        >
          <div
            style={{
              position: "relative",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: -400,
              maxWidth: 1200,
            }}
          >
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                ref={fifthPartTextRef}
                className="fifth-part-text"
                style={{
                  fontSize: "128px",
                  marginRight: "20px", // Adjust the spacing between "How It Works" and <VideoCard />
                  color: "#0C062C",
                }}
              >
                <div>How it</div>
                <div>works</div>
              </div>
              <div ref={fifthPartVideoRef}>
                <VideoCard image={video1image} video={FifthPartVideo} />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "left" }}>
              <Button
                type="ghost"
                className="custom-button"
                style={{
                  width: fifthPartTextRef.current
                    ? fifthPartTextRef.current.offsetWidth
                    : "0",
                }}
              >
                Get Started <ArrowRightOutlined />
              </Button>
              <div
                style={{
                  fontSize: "24px",
                  marginLeft: "20px",
                  width: fifthPartVideoRef.current
                    ? fifthPartVideoRef.current.offsetWidth
                    : "0",
                }}
              >
                Whether you're a professional or beginner, you can create
                stunning videos in minutes instead of hours.
              </div>
            </div>
          </div>
        </div>
        <div
          className="sixth-part"
          style={{ backgroundColor: "#E6E0F4", marginTop: "-200px" }}
        >
          {" "}
          <div
            style={{
              position: "relative",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              marginTop: 200,
              paddingTop: 50,
              maxWidth: 1200,
            }}
          >
            <HowToCard
              number={"01"}
              heading={"Create or choose an avatar"}
              subtext={
                "Choose from over 100+ AI avatars or customize your own."
              }
              content={<img src={HowToCardImage1} style={{ width: "100%" }} />}
            />
            <HowToCard
              number={"02"}
              heading={"Record or choose a voice"}
              subtext={
                "Choose from a collection of high-quality voices or record your own."
              }
              content={
                <>
                  <img
                    src={HowToCardImage2}
                    style={{
                      width: "150%",
                      paddingTop: 50,
                      marginLeft: -100,
                      animation: "moveImageLeftToRight 10s infinite",
                      zIndex: 200,
                      position: "relative", // Ensure the image has a position other than 'static'
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: -150,
                      zIndex: 501, // Increase the z-index value
                      position: "relative", // Ensure the container has a position other than 'static'
                    }}
                  >
                    <img
                      src={HowToCardImage2Overlap1}
                      style={{
                        height: "61px",
                      }}
                    />
                    <img
                      src={HowToCardImage2Overlap2}
                      style={{
                        height: "61px",
                      }}
                    />
                  </div>
                </>
              }
            />
            <HowToCard
              number={"03"}
              heading={"Select a template or start from scratch"}
              subtext={
                "Select from an extensive array of ready-to-use templates for any scenario, or begin with a clean slate."
              }
              content={
                <>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={HowToCardImage3Part1}
                      style={{
                        height: "75%",
                        paddingTop: 50,
                        marginLeft: -50,
                        animation: "moveImageLeftToRight 10s infinite",
                      }}
                    />
                    <img
                      src={HowToCardImage3Part2}
                      style={{
                        height: "75%",
                        marginRight: -50,
                        animation: "moveImageRightToLeft 10s infinite",
                      }}
                    />
                    <img
                      src={HowToCardImage3Part3}
                      style={{
                        height: "75%",
                        marginLeft: -50,
                        animation: "moveImageLeftToRight 10s infinite",
                      }}
                    />
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
