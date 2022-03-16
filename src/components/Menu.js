import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="menu_logo">Logo</div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">HOW IT WORKS</Link>
        </li>
        <li>
          <Link to="/">ABOUT US</Link>
        </li>
        <li>
          <Link to="/">FAQS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
