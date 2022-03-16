import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_comtent">
        <h1>
          GET THE MONEY YOU NEED <span>NOW.</span>
        </h1>
        <p>BORROW FROM 3 TO 36 MONTHS FREE SAME DAY FUNDING</p>
        <Link to="/page1">GTE STARTED</Link>
        <div className="banner_content_img">
          <img src="/img/secure_2_2.png" alt="" width={"300px"} />
        </div>
      </div>

      <div className="banner_img">
        <img src="/img/cover.png" alt="" width="300px" />
      </div>
    </div>
  );
};

export default Banner;
