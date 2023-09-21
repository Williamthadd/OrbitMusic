import React from "react";
import { useState } from "react";
import Logo from "../Assets/Logo.jpg";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/" activeClassName="nav-active" className="nav">
            Home
          </NavLink>
          <NavLink to="/about-us" activeClassName="nav-active" className="nav">
            About Us
          </NavLink>
          <NavLink to="/cart" activeClassName="nav-active" className="nav">
            Cart
          </NavLink>
          <NavLink to="/merch" activeClassName="nav-active" className="nav">
            Merch
          </NavLink>
          <NavLink to="/services" activeClassName="nav-active" className="nav">
            Services
          </NavLink>
          <NavLink to="/profile" activeClassName="nav-active" className="nav">
            Profile
          </NavLink>
        </div>
        {navbar ? (
          <div className="nav-dropdown-container ai-c">
            <NavLink
              to="/"
              activeClassName="nav-active"
              className="nav nav-mobile"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              activeClassName="nav-active"
              className="nav nav-mobile"
            >
              About Us
            </NavLink>
            <NavLink
              to="/cart"
              activeClassName="nav-active"
              className="nav nav-mobile"
            >
              Cart
            </NavLink>
            <NavLink
              to="/merch"
              activeClassName="nav-active"
              className="nav nav-mobile"
            >
              Merch
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="nav-active"
              className="nav nav-mobile"
            >
              Services
            </NavLink>
            <NavLink
              to="/profile"
              activeClassName="nav-active"
              className="nav nav-mobile"
            >
              Profile
            </NavLink>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
