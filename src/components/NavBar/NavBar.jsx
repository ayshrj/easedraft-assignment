import React, { useState } from "react";
import { Layout, Button } from "antd";
import NavBarDropdownButton from "./NavBarDropdownButton";
import navbarLogo from "../../assets/navbarLogo.svg";
import "./NavBar.css";
import { items1, items2, items3 } from "./NavBarDropDownItems";
import HamburgerMenu from "./HamburgerMenu";
import WindowWidthCalculator from "../Utility/WindowWidthCalculator";

const { Header } = Layout;

const NavBar = () => {
  const { windowWidth } = WindowWidthCalculator();
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div
      className="navbar-container"
      style={{
        position: "fixed",
        backgroundColor: "#E6E0F4",
        width: "100vw",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#E6E0F4",
          zIndex: 1000,
          margin: "0",
          marginTop: "0",
          marginLeft: "0",
          marginRight: "0",
        }}
      >
        <Header
          className={`navbar ${!isMenuVisible ? "navbar-menu-open" : ""}`}
          style={{
            maxWidth: "1097px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "110px",
                  height: "40px",
                  background: "transparent",
                  marginRight: "16px",
                }}
              >
                <img
                  src={navbarLogo}
                  alt="Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            {windowWidth > 991 && (
              <div>
                <NavBarDropdownButton
                  items={items1}
                  dropdownName={"Use Cases"}
                  marginOnRight={"16px"}
                />
                <NavBarDropdownButton
                  items={items2}
                  dropdownName={"Features"}
                  marginOnRight={"16px"}
                />
                <NavBarDropdownButton
                  items={items3}
                  dropdownName={"Resources"}
                  marginOnRight={"0px"}
                />
                <Button
                  type="text"
                  style={{
                    fontFamily: "Roobert-Medium, sans-serif",
                  }}
                  className="pricing-button"
                >
                  Pricing
                </Button>
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center" }}>
              {windowWidth > 991 && (
                <Button
                  type="text"
                  className="contact-sales-button"
                  style={{
                    fontFamily: "Roobert-Medium, sans-serif",
                  }}
                >
                  Contact Sales
                </Button>
              )}
              <Button
                type="ghost"
                className="custom-button"
                style={{
                  fontFamily: "Roobert-Medium, sans-serif",
                  marginRight: windowWidth <= 991 ? "16px" : "0px",
                }}
              >
                Get Started
              </Button>
              {windowWidth <= 991 && (
                <HamburgerMenu
                  isMenuVisible={isMenuVisible}
                  setMenuVisible={setMenuVisible}
                />
              )}
            </div>
          </div>
        </Header>
      </div>
    </div>
  );
};

export default NavBar;
