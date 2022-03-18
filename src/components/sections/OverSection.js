import React from "react";
const OverSection = () => {
  return (
    <div className="over">
      <div className="over_content">
        <h3>Over 2 Million Customers Served and the numbers are growing</h3>
        <p>
          9 out of 10 customers have said they would refer us to their friends
          or family.
        </p>
        <div>
          <a href="/get_start">
            <button className="over_but"> GET STARTED NOW</button>
          </a>
        </div>
        <img src="/img/cloud_1.png" alt="" className="over_img_cloud1" />
        <img src="/img/cloud_2.png" alt="" className="over_img_cloud2" />
        <img src="/img/plant.png" alt="" className="over_img_plant" />
      </div>
      <img
        src="/img/secure_1_1.png"
        className="over_img"
        alt=""
        width={"60%"}
      />
    </div>
  );
};

export default OverSection;
