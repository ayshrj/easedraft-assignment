import React from "react";

const HowToCard = ({ number, heading, subtext, content }) => {
  return (
    <>
      <div
        style={{
          height: 609,
          maxWidth: 294,
          backgroundColor: "white",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          padding: "40px",
          margin: 10,
          overflow: "hidden",
        }}
      >
        <div style={{ color: "#755af9", fontSize: 128 }}>{number}</div>
        <div style={{ color: "#0c062c", fontSize: 30 }}>{heading}</div>
        <div style={{ color: "#232833", fontSize: 16, paddingBottom: 5 }}>
          {subtext}
        </div>
        <div>{content}</div>
      </div>
    </>
  );
};

export default HowToCard;
