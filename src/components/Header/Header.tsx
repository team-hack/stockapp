import React from "react";
import { Link } from "react-router-dom";
import { HeaderMain, RoundedButton } from "./HeaderStyled";

import "./header.styles.css";

// interface iHeader {

// }

const Header = (): JSX.Element => {
  const data = [
    { id: 1, title: "Day" },
    { id: 2, title: "Week" },
    { id: 3, title: "Month" },
    { id: 4, title: "Year" },
    { id: 5, title: "Five Year" },
  ];
  return (
    <HeaderMain dark={true}>
      <div className="left">
        <Link className="logo" to="/">
          Stock App
        </Link>
      </div>
      <div>
        {data.map((d) => (
          <RoundedButton id={`${d.id}`}>{d.title}</RoundedButton>
        ))}
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
