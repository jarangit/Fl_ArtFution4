import React from "react";
// import TableApr from "../table/TableApr";

const APRSection = () => {
  return (
    <div className="apr">
      <div className="apr_container jr_container">
        <div className="apr_content">
          <h2>APR Disclosure and Range</h2>
          <p>
            NorthBay Cash is not a lender – as such, we do not have control over
            the APR you will be offered. We display a Representative APR only as
            it is based on data offered from multiple lenders. Qualified
            consumers can get a loan with APR Rates ranging from 4.95% to a
            maximum of 35.95% and loans repayment period of 61 to 90 days. Your
            loan amount, APR and repayment term will vary based on your credit
            worthiness, state and lender or lending partner. Important
            Information: Some lenders and services may not be accessible to
            residents of all States based on lender’s preferences and
            legislation particular to that State.
          </p>
          <p>
            The following table represents sample rates, is for informational
            purposes only, and may not reflect the actual APRs offered by your
            lender and/or lending partner. The repayment terms are for close end
            loan products, and is not reflective of all loan products offered in
            our network.
          </p>
          <h2>Examples of Costs & APR</h2>
        </div>

        {/* <div>
          <TableApr />
        </div> */}

        <div className="apr_content">
          <h2>Representative Example (Qualified Customers)</h2>
          <p>
            If you borrowed $5,000 over a 48 month period and the loan had a 8%
            arrangement fee ($400), your monthly repayments would be $131.67,
            with a total pay back amount of $6320.12 which including the 8% fee
            paid from the loan amount, would have a total cost of $1720.12.
            Representative 18.23% APR.
          </p>
        </div>
      </div>
    </div>
  );
};

export default APRSection;
