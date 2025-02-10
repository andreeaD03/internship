import React from "react";
import "./NavBar.css"
const Navbar = () => {
  return (
    <div className="mainContainer">
      <div className="energy">
        <span>Energy X</span>
      </div>
      <div className="center">
        <ul className="list">
          <li>Home</li>
          <li>About</li>
          <li>Pages </li>
          <li>Pricing</li>
          <li>Cart(0)</li>
        </ul>
      </div>
      <div className="login">
        <span>Login</span>
        <button className="loginButton">Get a quote</button>
      </div>
    </div>
  );
};

export default Navbar;