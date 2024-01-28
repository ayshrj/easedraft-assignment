import React, { useState, useRef, useEffect } from "react";
import { Card, Modal } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "./VideoCard.css"; // Import a CSS file for styling
import WindowWidthCalculator from "./Utility/WindowWidthCalculator";

const VideoCard = ({ image, video }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const videoRef = useRef(null);
  const { windowWidth } = WindowWidthCalculator();

  const calculateMaxHeight = () => {
    const aspectRatio = 16 / 9;
    const maxWidth = windowWidth < 708 ? 400 : 734;

    return maxWidth / aspectRatio - 4;
  };

  const videoStyle = {
    width: windowWidth < 708 ? "400px" : "734px",
    borderRadius: videoRef.current
      ? window.getComputedStyle(videoRef.current).borderRadius
      : "12px",
    overflow: "hidden",
  };

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

  useEffect(() => {
    setMaxHeight(calculateMaxHeight());
  }, [isModalVisible, windowWidth]);

  return (
    <>
      <div>
        <div style={{ position: "relative", zIndex: 30 }}>
          <div
            className="video-container"
            style={{
              width: windowWidth < 708 ? 400 : 734,
              maxHeight: maxHeight,
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div className="blur-effect-top-left"></div>
            <video
              autoPlay
              loop
              muted
              controls={false}
              playsInline
              style={{ ...videoStyle, height: "100%", borderRadius: "25.5px" }}
              poster={image}
              ref={videoRef}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <button className="demo-button" onClick={showModal}>
            <CaretRightOutlined />
            Demo
          </button>
        </div>
      </div>
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

export default VideoCard;
