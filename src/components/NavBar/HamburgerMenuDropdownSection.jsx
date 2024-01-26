import React from "react";
import { DownOutlined } from "@ant-design/icons";

const HamburgerMenuDropdownSection = ({
  title,
  isOpen,
  items,
  onEnter,
  onLeave,
}) => {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        fontFamily: "Roobert-Medium, sans-serif",
        fontSize: "18px",
        paddingLeft: "10px",
        color: isOpen ? "#7559FF" : "#000",
      }}
    >
      {title}{" "}
      <DownOutlined
        style={{ color: "#7559FF" }}
        className={
          isOpen ? "dropdown-button-rotate" : "dropdown-button-default"
        }
      />
      <div
        className={`hamburger-subitems ${
          isOpen ? "hamburger-subitems-open" : "hamburger-subitems-close"
        }`}
      >
        {items.map((item) => (
          <div
            key={item.key}
            style={{
              fontFamily: "Roobert-Regular, sans-serif",
              fontSize: "16px",
              paddingLeft: "px",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenuDropdownSection;
