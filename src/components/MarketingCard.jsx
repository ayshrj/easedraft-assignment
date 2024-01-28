import React, { useState, useRef } from "react";
import WindowWidthCalculator from "./Utility/WindowWidthCalculator";
import { CaretRightOutlined } from "@ant-design/icons";
import { Card, Modal, Button } from "antd";
import isMobile from "./Utility/IsMobile";
const { Meta } = Card;
const MarketingCard = ({
  subheadingFirstLine,
  subheadingSecondLine,
  subheadingLastLine,
  subtextFirstLine,
  subtextSecondLine,
  video,
}) => {
  const { windowWidth } = WindowWidthCalculator();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const videoRef = useRef(null);
  const showModal = () => {
    setIsModalVisible(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <Card
        hoverable
        style={{
          maxWidth: 480,
          borderRadius: 24,
          border: 0,
          marginTop: 40,
          marginBottom: 100,
          width: isMobile() ? "187px" : "",
          zIndex: 10,
        }}
        cover={
          <video
            autoPlay
            muted
            loop
            alt="example"
            src={video}
            style={{
              borderRadius: windowWidth >= 991 ? "24px 24px 0px 0px" : "24px",
            }}
          />
        }
        bodyStyle={{
          padding: 0,
          borderWidth: 0,
          height: windowWidth < 991 ? "0" : "",
        }}
      >
        <div
          style={{
            backgroundColor: windowWidth < 991 ? "transparent" : "#0B071E",
            borderRadius: "0 0 24px 24px",
          }}
        >
          <Meta />
          <div
            style={{
              fontFamily: "Roobert-Regular",
              display: "flex",
              flexDirection: "column", // Add this line
              justifyContent: "space-between", // Add this line
              height: "100%", // Add this line
              padding: 30,
            }}
          >
            <div
              className="marketing-card-heading"
              style={{
                fontSize: windowWidth < 991 ? "20px" : "26px",
                color: "#FFF",
              }}
            >
              {subheadingFirstLine}{" "}
              {windowWidth < 991 &&
                subheadingSecondLine &&
                subheadingSecondLine}
            </div>
            {subheadingSecondLine && windowWidth >= 991 && (
              <div
                className="marketing-card-heading"
                style={{
                  fontSize: windowWidth < 991 ? "20px" : "26px",
                  color: "#FFF",
                }}
              >
                {subheadingSecondLine}
              </div>
            )}
            <div
              className="marketing-card-heading"
              style={{
                fontSize: windowWidth < 991 ? "20px" : "26px",
                color: "#BBADFF",
              }}
            >
              {subheadingLastLine}
            </div>
            <div
              style={{
                color: "#B3B7C4",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="marketing-card-subtext">
                <div>{subtextFirstLine}</div>
                <div style={{ marginBottom: "10px" }}>{subtextSecondLine}</div>
              </div>
              {windowWidth >= 991 && (
                <div
                  className="marketing-card-button"
                  style={{ marginTop: "-20px" }}
                >
                  <Button
                    type="ghost"
                    className="custom-button"
                    style={{
                      fontFamily: "Roobert-Medium, sans-serif",
                      marginRight: "5px",
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    type="ghost"
                    style={{
                      fontFamily: "Roobert-Medium, sans-serif",
                      marginRight: "16px",
                      borderRadius: "12px",
                      backgroundColor: "#160F35",
                      borderColor: "#2E2849",
                      width: 50,
                      height: 50,
                    }}
                    onClick={showModal}
                  >
                    <CaretRightOutlined style={{ color: "#FFF" }} />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{
          top: 0,
          left: 0,
          right: 0,
          mask: "rgba(0, 0, 0, 0.95)",
          zIndex: 9999999999,
          padding: 0,
        }}
        width="80vw"
        centered={true}
      >
        <video
          ref={videoRef}
          autoPlay
          controls
          style={{ width: "100%", height: "80vh" }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </>
  );
};

export default MarketingCard;
