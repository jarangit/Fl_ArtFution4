import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_comtent">
        <h1>
          GET THE MONEY YOU NEED <span>NOW.</span>
        </h1>
        <p>BORROW FROM 3 TO 36 MONTHS FREE SAME DAY FUNDING</p>
        <a href="/get_start" className="banner_but">
          GTE STARTED
        </a>
        <div className="banner_content_img">
          <img src="/img/secure_2_2.png" alt="" width={"325px"} />
        </div>
      </div>

      <div className="banner_img">
        <img
          src="/img/dots.png"
          alt=""
          width="150px"
          className="banner_img_dots"
        />
        <img
          src="/img/cover.png"
          alt=""
          width="500px"
          className="banner_img_main"
        />
      </div>
    </div>
  );
};

export default Banner;
