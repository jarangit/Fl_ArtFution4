import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
const Banner = () => {
  const [countApproved, setcountApproved] = useState(821);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return "You got to go";
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  useEffect(() => {
    const saveCountApp = localStorage.getItem("count_user_view");
    console.log(saveCountApp);
    if (saveCountApp) {
      setcountApproved(Number(saveCountApp) + 1);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("count_user_view", Number(countApproved) + 1);
  }, [countApproved]);
  return (
    <div className="banner">
      <div className="banner_comtent">
        <h1>
          GET THE MONEY YOU NEED <span>NOW.</span>
        </h1>
        <div className="banner_count_down_time">
          <div>
            <span>{countApproved} </span>
            Approved Today
            <span>
              <Countdown date={Date.now() + 3000000} renderer={renderer} />
            </span>
          </div>
        </div>
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
