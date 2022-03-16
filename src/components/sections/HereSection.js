import React from "react";

const HereSection = () => {
  return (
    <div>
      <div className="here_img">
        <img src="/img/howitworks2.webp" alt="" width={"300px"} />
      </div>

      <div className="here_content">
        <h3>Here is how it works</h3>
        <p>
          We have a very quick, easy and transparent 3 step process for loans
        </p>
        <ul>
          <li>
            <img src="/img/pc.png" alt="" />
            <h4>Submit your information</h4>
            <p>Fill out our user-friendly form.</p>
          </li>
          <li>
            <img src="/img/search.png" alt="" />
            <h4>Lenders review your info</h4>
            <p>
              Lenders in our network will review and may present you a loan
              offer.
            </p>
          </li>
          <li>
            <img src="/img/funding.png" alt="" />
            <h4>Same day funding as much as $3000</h4>
            <p>Directly to your bank account! Yes, it's that simple.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HereSection;
