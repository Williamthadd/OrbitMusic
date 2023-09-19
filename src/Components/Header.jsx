import React from "react";
import { useState } from "react";
import Logo from "../Assets/Logo.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

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
          <Link to="/*" className="nav">
            Home
          </Link>
          <Link to="/about-us" className="nav">
            About Us
          </Link>
          <Link to="/cart" className="nav">
            Cart
          </Link>
          <Link to="/merch" className="nav">
            Merch
          </Link>
          <Link to="/services" className="nav">
            Services
          </Link>
          <Link to="/profile" className="nav">
            Profile
          </Link>
        </div>
        {navbar ? (
          <div className="nav-dropdown-container ai-c">
            <Link to="/*" className="nav">
              Home
            </Link>
            <Link to="/about-us" className="nav">
              About Us
            </Link>
            <Link to="/cart" className="nav">
              Cart
            </Link>
            <Link to="/merch" className="nav">
              Merch
            </Link>
            <Link to="/services" className="nav">
              Services
            </Link>
            <Link to="/profile" className="nav">
              Profile
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
