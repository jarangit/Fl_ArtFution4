import React from "react";
import { Link } from "react-router-dom";
const OverSection = () => {
  return (
    <div className="over">
      {/* <div className=""> */}
      <div className="over_content">
        <h3>Over 2 Million Customers Served and the numbers are growing</h3>
        <p>
          9 out of 10 customers have said they would refer us to their friends
          or family.
        </p>
        <div>
          <Link to="/">
            <button className="over_but"> GET STARTED NOW</button>
          </Link>
        </div>
      </div>
      <img
        src="/img/secure_1_1.png"
        className="over_img"
        alt=""
        width={"500px"}
      />
    </div>
  );
};

export default OverSection;
