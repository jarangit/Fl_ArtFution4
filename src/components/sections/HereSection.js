import React from "react";

const HereSection = () => {
  return (
    <div className="here">
      <div className="here_container">
        <div className="here_img">
          <img src="/img/howitworks2.webp" alt="" width={"325px"} />
        </div>

        <div className="here_content">
          <h2>Here is how it works</h2>
          <p>
            We have a very quick, easy and transparent 3 step process for loans
          </p>
          <ul>
            <li>
              <img src="/img/pc.png" alt="" width={"60px"} />
              <div>
                <h3>Submit your information</h3>
                <p>Fill out our user-friendly form.</p>
              </div>
            </li>
            <li>
              <img src="/img/search.png" alt="" width={"60px"} />
              <div>
                <h3>Lenders review your info</h3>
                <p>
                  Lenders in our network will review and may present you a loan
                  offer.
                </p>
              </div>
            </li>
            <li>
              <img src="/img/funding.png" alt="" width={"60px"} />
              <div>
                <h3>Same day funding as much as $3000</h3>
                <p>Directly to your bank account! Yes, it's that simple.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HereSection;
