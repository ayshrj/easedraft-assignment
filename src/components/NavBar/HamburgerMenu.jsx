import React, { useState } from "react";
import { items1, items2, items3 } from "./NavBarDropDownItems";
import HamburgerMenuDropdownSection from "./HamburgerMenuDropdownSection";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ isMenuVisible, setMenuVisible }) => {
  const [dropdownStates, setDropdownStates] = useState({
    useCases: false,
    features: false,
    resources: false,
  });

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleDropdownEnter = (dropdown) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [dropdown]: true,
    }));
  };

  const handleDropdownLeave = (dropdown) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [dropdown]: false,
    }));
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className={`hamburger-menu ${isMenuVisible ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div
        className="dropdown-below-navbar"
        style={{
          position: "fixed",
          top: "64px",
          left: "0",
          width: "100vw",
          maxHeight: isMenuVisible ? "100%" : "0",
          background: "white",
          zIndex: 1000,
          overflow: "hidden",
          borderRadius: "0px 0px 15px 15px",
          boxShadow:
            "0 0 4.53px rgba(255,255,255,1), 0 0 12.52px rgba(255,255,255,1), 0 16px 30.15px rgba(117,89,255,.13), 0 52px 100px rgba(117,89,255,.2)",
        }}
      >
        <HamburgerMenuDropdownSection
          title="Use Cases"
          isOpen={dropdownStates.useCases}
          items={items1}
          onEnter={() => handleDropdownEnter("useCases")}
          onLeave={() => handleDropdownLeave("useCases")}
        />

        <HamburgerMenuDropdownSection
          title="Features"
          isOpen={dropdownStates.features}
          items={items2}
          onEnter={() => handleDropdownEnter("features")}
          onLeave={() => handleDropdownLeave("features")}
        />

        <HamburgerMenuDropdownSection
          title="Resources"
          isOpen={dropdownStates.resources}
          items={items3}
          onEnter={() => handleDropdownEnter("resources")}
          onLeave={() => handleDropdownLeave("resources")}
        />

        <div
          style={{
            fontFamily: "Roobert-Medium, sans-serif",
            fontSize: "18px",
            paddingLeft: "10px",
          }}
        >
          Pricing
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
