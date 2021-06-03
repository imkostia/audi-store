import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/audiLogo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <Link to="/cart">
        <span>CART</span>
      </Link>
    </header>
  );
};

export default Header;
