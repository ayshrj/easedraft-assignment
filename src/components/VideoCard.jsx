import React, { useState, useRef } from "react";
import { Card, Modal } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "./VideoCard.css"; // Import a CSS file for styling

const VideoCard = ({ image, video }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const videoRef = useRef(null);

  const videoStyle = {
    width: "735px",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <div style={{ position: "relative", zIndex: 30 }}>
        <div className="video-container">
          <div className="blur-effect-top-left"></div>
          <video
            autoPlay
            muted
            controls={false}
            playsInline
            style={{ ...videoStyle, height: "100%", borderRadius: "25.5px" }}
            poster={image}
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

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{
          top: 0,
          left: 0,
          right: 0,
          mask: "rgba(0, 0, 0, 0.95)",
          zIndex: 9999999999,
        }}
        bodyStyle={{ padding: 0 }}
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
    </div>
  );
};

export default VideoCard;
