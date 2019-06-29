import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav id="menu">
      <Link to="/">Home</Link>
      <Link to="/task">Tasks</Link>
    </nav>
  );
};

export default Menu;
