import React, { useState } from "react";
import { Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./NavBarDropDownButton.css";

const NavBarDropdownButton = ({ items, dropdownName, marginOnRight }) => {
  const [mouseOnDropdownButton, setMouseOnDropdownButton] = useState(false);

  const toggleMouseOnDropdownButton = () => {
    setMouseOnDropdownButton(!mouseOnDropdownButton);
  };

  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      onOpenChange={toggleMouseOnDropdownButton}
    >
      <Button
        style={{
          marginRight: marginOnRight,
          boxShadow: "none",
          border: "0",
          fontFamily: "Roobert-Medium, sans-serif",
          backgroundColor: mouseOnDropdownButton ? "#DDD6EB" : "#E6E0F4",
          borderRadius: "50px 50px 50px 50px",
          color: mouseOnDropdownButton ? "#7559FF" : "black",
          fontSize: "16px",
        }}
      >
        {dropdownName}{" "}
        <DownOutlined
          style={{ color: "#7559FF" }}
          className={
            mouseOnDropdownButton
              ? "dropdown-button-rotate"
              : "dropdown-button-default"
          }
        />
      </Button>
    </Dropdown>
  );
};

export default NavBarDropdownButton;
