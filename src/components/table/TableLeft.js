import React from "react";
import { dataTable } from "../../data/TableData";
const TableLeft = () => {
  return (
    <React.Fragment>
      {dataTable.map((item, key) => (
        <table className="apr_table_left">
          <tr>
            <th>LOAN AMOUNT</th>
            <td>{item.loan_amount}</td>
          </tr>
          <tr>
            <th>INTEREST RATE</th>
            <td>{item.interest_rate}</td>
          </tr>
          <tr>
            <th>LOAN TERM</th>
            <td>{item.laon_term}</td>
          </tr>
          <tr>
            <th> FEE </th>
            <td>{item.fee}</td>
          </tr>
          <tr>
            <th>FEE COST</th>
            <td>{item.fee_cost}</td>
          </tr>
          <tr>
            <th>REPAYMENT</th>
            <td>{item.repayment}</td>
          </tr>
          <tr>
            <th>APR</th>
            <td>{item.apr}</td>
          </tr>
          <tr>
            <th>TOTAL REPAYMENTS</th>
            <td>{item.total_repayments}</td>
          </tr>
          <tr>
            <th>TOTAL COST</th>
            <td>{item.total_cost}</td>
          </tr>
        </table>
      ))}
    </React.Fragment>
  );
};

export default TableLeft;
