import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="jr_container menu_container">
        <div className="menu_logo">
          <img src="/img/logo.png" alt="" width={"50px"} />
        </div>
        <ul>
          <li>
            <Link to="/" className="menu_link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" className="menu_link">
              HOW IT WORKS
            </Link>
          </li>
          <li>
            <Link to="/" className="menu_link">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/" className="menu_link">
              FAQS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
