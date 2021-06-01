import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/audiLogo.svg";
import "./header.css";

class Header extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <header className="header-wrapper">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <Link to="/cart">
          <span>Сума: {total}</span>
        </Link>
      </header>
    );
  }
}

export default Header;
