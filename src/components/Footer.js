import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="footer_content">
        <img src="/img/logo.png" alt="" />
        <p>
          *NORTHBAYCASH.COM IS NOT A LENDER, does not broker loans to lenders
          and does not make cash advances or credit decisions. Our service is
          free to you (the loan applicant) and all repayment terms are between
          you and the lender. Individual lenders have varying loan terms,
          including the loan amount, APR, and repayment schedules. After you
          submit your information and if you are matched with a lender,
          NorthBayCash.com will redirect you to the lender’s web site, where you
          will be able to review and agree to the lender's proposed terms and
          conditions. Please review the terms and conditions carefully. If you
          do not like the lender's proposed terms and conditions, do not proceed
          with the loan! In many cases, the lender will contact you to confirm
          your personal information and finalize the loan. They may contact you
          via telephone, email, text messages, etc. The lender may obtain your
          credit report to make a final decision. his service is not available
          in all states, and the states serviced by this Web Site may change
          from time to time and without notice. Short term cash loans are meant
          to provide you with short term financing to solve immediate cash needs
          only. NORTHBAYCASH is a wholly owned subsidiary of FixMedia llc.
        </p>
      </div>

      <div className="footer_menu">
        <ul>
          <li>HOME</li>
          <li>HOW IT WORKS</li>
          <li>ABOUT US</li>
          <li>FAQS</li>
        </ul>

        <ul>
          <li>
            <ImFacebook />
          </li>
          <li>
            <AiOutlineTwitter />
          </li>
          <li>
            <BsInstagram />
          </li>
        </ul>
      </div>
      <div className="footer_copyRight">
        <p>
          North Bay Cash 9435 Lorton Market Street, Suite 762 Lorton, VA 22079
          Copyright © 2022 - North Bay Cash - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
