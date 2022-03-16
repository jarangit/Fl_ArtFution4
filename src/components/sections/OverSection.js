import React from "react";
import { Link } from "react-router-dom";
const OverSection = () => {
  return (
    <div className="over">
      <div className="over_content">
        <h3>Over 2 Million Customers Served and the numbers are growing</h3>
        <p>
          9 out of 10 customers have said they would refer us to their friends
          or family.
        </p>
        <Link to="/">GET STARTED NOW</Link>
      </div>
      <img src="/img/secure_1_1.png" alt="" />
    </div>
  );
};

export default OverSection;
