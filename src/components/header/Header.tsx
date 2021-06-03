import React from "react";
import { Link } from "react-router-dom";
import { HeaderMain } from "./HeaderStyled";

import "./header.styles.css";

// interface iHeader {

// }

const Header = () => {
  return (
    <HeaderMain>
      <div className="left">
        <Link className="logo" to="/">
          Stock App
        </Link>
      </div>
      <div className="right">
        <Link className="login" to="/login">
          Login
        </Link>
        <Link className="signup" to="/signup">
          Signup
        </Link>
      </div>
    </HeaderMain>
  );
};

export { Header };
