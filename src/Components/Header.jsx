import React from "react";
import { useState } from "react";
import Logo from "../Assets/Logo.jpg";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
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
          <NavLink
            to="/"
            className={`nav ${props.currentPage === "home" && "nav-active"}`}
            onClick={() => props.handleChangePage("home")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={`nav ${
              props.currentPage === "about-us" && "nav-active"
            }`}
            onClick={() => props.handleChangePage("about-us")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/cart"
            className={`nav ${props.currentPage === "cart" && "nav-active"}`}
            onClick={() => props.handleChangePage("cart")}
          >
            Cart
          </NavLink>
          <NavLink
            to="/merch"
            className={`nav ${props.currentPage === "merch" && "nav-active"}`}
            onClick={() => props.handleChangePage("merch")}
          >
            Merch
          </NavLink>
          <NavLink
            to="/services"
            className={`nav ${
              props.currentPage === "services" && "nav-active"
            }`}
            onClick={() => props.handleChangePage("services")}
          >
            Services
          </NavLink>
          <NavLink
            to="/profile"
            className={`nav ${props.currentPage === "profile" && "nav-active"}`}
            onClick={() => props.handleChangePage("profile")}
          >
            Profile
          </NavLink>
        </div>
        {navbar ? (
          <div className="nav-dropdown-container ai-c">
            <NavLink
              to="/"
              className={`nav nav-mobile ${
                props.currentPage === "home" && "nav-active"
              }`}
              onClick={() => props.handleChangePage("home")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={`nav nav-mobile ${
                props.currentPage === "about-us" && "nav-active"
              }`}
              onClick={() => props.handleChangePage("about-us")}
            >
              About Us
            </NavLink>
            <NavLink
              to="/cart"
              className={`nav nav-mobile ${
                props.currentPage === "cart" && "nav-active"
              }`}
              onClick={() => props.handleChangePage("cart")}
            >
              Cart
            </NavLink>
            <NavLink
              to="/merch"
              className={`nav nav-mobile ${
                props.currentPage === "merch" && "nav-active"
              }`}
              onClick={() => props.handleChangePage("merch")}
            >
              Merch
            </NavLink>
            <NavLink
              to="/services"
              className={`nav nav-mobile ${
                props.currentPage === "services" && "nav-active"
              }`}
              onClick={() => props.handleChangePage("services")}
            >
              Services
            </NavLink>
            <NavLink
              to="/profile"
              className={`nav nav-mobile ${
                props.currentPage === "profile" && "nav-active"
              }`}
              onClick={() => props.handleChangePage("profile")}
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
