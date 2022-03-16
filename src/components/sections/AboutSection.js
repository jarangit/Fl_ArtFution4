import React from "react";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="about_container">
        <div className="about_content">
          <p>ABOUT</p>
          <h2>NORTHBAY CASH</h2>
          <p>
            NorthBay Cash has maintained the highest standards in customer
            service and security. Our mission is to help solve your short term
            financing needs and we will never use your information for any other
            purpose. We are proud members of the Online Lenders Alliance and the
            Community Financial Services Association, and enjoy an "A" rating
            from the Better Business Bureau. At NorthBay Cash, we pride
            ourselves on doing business the right way on behalf of our
            customers.
          </p>
        </div>
        <div className="about_img">
          <img src="/img/about.png" alt="" width={"300px"} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
