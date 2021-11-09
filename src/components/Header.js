import React from "react";
import "./header.css";
import logo from "../assets/images/afroibex-shadow.png";
import Button from "./Button";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} className="header__logo" alt="Afro-Ibex Logo" />
      </a>
      <div className="header__center">
        <a href="/" className="header__menu">
          Home
        </a>
        <a href="#services" className="header__menu">
          Services
        </a>
        <a href="#product" className="header__menu">
          {/* Product */}
        </a>
        <a href="#aboutUs" className="header__menu">
          About Us
        </a>
      </div>
      <div className="header__right">
        <a href="#ourTeam" className="header__menu">
          {/* Our Team */}
        </a>
        <Button name="Contact" to="#emailForm" />
      </div>
    </header>
  );
}

export default Header;
