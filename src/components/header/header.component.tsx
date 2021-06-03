import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <div className="left">
                <Link className="logo" to="/">Stock App</Link>
            </div>
            <div className="right">
                <Link className="login" to="/login">Login</Link>
                <Link className="signup" to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export {Header};