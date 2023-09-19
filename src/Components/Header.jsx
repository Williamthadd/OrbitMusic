import React from "react";
import { useState } from "react";
import Logo from "../Assets/Logo.jpg";
import { Icon } from "@iconify/react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  function toggleHamburgerMenu() {
    setNavbar(!navbar);
  }

  return (
    <div className="header flex ai-c jc-sb">
      <div className="flex ai-c">
        <img src={Logo} className="Logo-Header" alt="logo..."></img>
        <p className="Text-Logo">Orbit</p>
      </div>
      <div className="Navigation ai-c">
        <Icon
          icon="mdi:hamburger-menu"
          className="hamburger-icon"
          onClick={toggleHamburgerMenu}
        />
        <div className="nav-container flex ai-c">
          <p className="nav ">Home</p>
          <p className="nav ">About Us</p>
          <p className="nav ">Payment</p>
          <p className="nav ">Merch</p>
          <p className="nav ">Services</p>
          <p className="nav ">Profile</p>
        </div>
        {navbar ? (
          <div className="nav-dropdown-container ai-c">
            <p className="nav nav-active">Home</p>
            <p className="nav ">About Us</p>
            <p className="nav ">Payment</p>
            <p className="nav ">Merch</p>
            <p className="nav ">Services</p>
            <p className="nav ">Profile</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
