import React from "react";
import { Link, useHistory } from "react-router-dom";
import { HeaderMain, RoundedButton } from "./HeaderStyled";
import { useAuth } from "../../context/AuthProvider";

import "./header.styles.css";

// interface iHeader {

// }

const Header = () => {
  const data = [
    { id: 1, title: "Day" },
    { id: 2, title: "Week" },
    { id: 3, title: "Month" },
    { id: 4, title: "Year" },
    { id: 5, title: "Five Year" },
  ];

  const auth = useAuth();
  const history = useHistory();

  const logoutUser = () => {
    auth.logout();
    history.push("/");
  }

  const generateNavLinks = () => {
    if (auth.user?.authenticated)  {
      return (<a onClick={logoutUser}>Sign out</a>)
    }

    return (
      <>
        <Link className="login" to="/login">
        Login
        </Link>
        <Link className="signup" to="/signup">
        Signup
        </Link>
      </>
    );
  };

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
        <Link to="/protected">
          Protected
        </Link>
        {generateNavLinks()}
      </div>
    </HeaderMain>
  );
};

export { Header };
