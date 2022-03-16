import React from "react";
import { dataTable } from "../../data/TableData";
const TableApr = () => {
  return (
    <table className="apr_table">
      <thead>
        <tr>
          <th>LOAN AMOUNT</th>
          <th>INTEREST RATE</th>
          <th>LOAN TERM</th>
          <th>FEE</th>
          <th>FEE COST</th>
          <th>REPAYMENT</th>
          <th>APR</th>
          <th>TOTAL REPAYMENTS</th>
          <th>TOTAL COST</th>
        </tr>
      </thead>

      <tbody>
        {dataTable.map((item, key) => (
          <React.Fragment key={key}>
            <tr>
              <td>{item.loan_amount}</td>
              <td>{item.interest_rate}</td>
              <td>{item.laon_term}</td>
              <td>{item.fee}</td>
              <td>{item.fee_cost}</td>
              <td>{item.repayment}</td>
              <td>{item.apr}</td>
              <td>{item.total_repayments}</td>
              <td>{item.total_cost}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableApr;
