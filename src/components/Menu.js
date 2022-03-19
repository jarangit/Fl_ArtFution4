import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
const Menu = () => {
  return (
    <div className="menu">
      <div className="jr_container menu_container">
        <div className="menu_logo">
          <a href="/">
            <img src="/img/logo.png" alt="" width={"70px"} />
          </a>
        </div>
        <ul>
          <li>
            <a href="/" className="menu_link">
              HOME
            </a>
          </li>
          <li>
            <Link to="here" className="menu_link">
              HOW IT WORKS
            </Link>
          </li>
          <li>
            <Link to="about" className="menu_link">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="accodong" className="menu_link">
              FAQS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
