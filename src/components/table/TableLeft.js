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
            <td>{item.loan_amount}</td>
          </tr>
          <tr>
            <th>LOAN TERM</th>
            <td>{item.loan_amount}</td>
          </tr>
          <tr>
            <th> FEE </th>
            <td>{item.loan_amount}</td>
          </tr>
          <tr>
            <th>FEE COST</th>
            <td>{item.loan_amount}</td>
          </tr>
          <tr>
            <th>REPAYMENT</th>
            <td>{item.loan_amount}</td>
          </tr>
          <tr>
            <th>APR</th>
            <td>{item.loan_amount}</td>
          </tr>
          <tr>
            <th>TOTAL REPAYMENTS</th>
            <td>{item.loan_amount}</td>
          </tr>
          <tr>
            <th>TOTAL COST</th>
            <td>{item.loan_amount}</td>
          </tr>
        </table>
      ))}
    </React.Fragment>
  );
};

export default TableLeft;
