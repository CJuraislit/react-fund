import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about" className="navbar__link">
          О сайте
        </Link>
        <Link to="/posts" className="navbar__link">
          Посты
        </Link>
        z
      </div>
    </div>
  );
};

export default Navbar;
