import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <NavLink to="/">
          <h1>Workout Buddy</h1>
        </NavLink>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
