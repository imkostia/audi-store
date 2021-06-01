import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

class Header extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <header className="header-wrapper">
        <Link to="/">
          <img
            src="https://cdn-ua.audi.at/assets/build/images/audiLogo.svg"
            alt="logo"
          />
        </Link>

        <Link to="/cart">
          <span>Сума: {total}</span>
        </Link>
      </header>
    );
  }
}

export default Header;
