import React from "react";

import "./RightSide.css";

const RightSide = ({ billNumber, tipNumber, peopleNumber, reset }) => {
  function calcTipAmount() {
    if (peopleNumber === 0) {
      return 0.0;
    } else {
      let tipAmount = (((billNumber / 100) * tipNumber) / peopleNumber).toFixed(
        2
      );
      return tipAmount;
    }
  }
  function calcTotalPay() {
    if (peopleNumber === 0) {
      return 0.0;
    } else {
      let tipAmount = (((billNumber / 100) * tipNumber) / peopleNumber).toFixed(
        2
      );
      let totalAmount = (billNumber / peopleNumber + Number(tipAmount)).toFixed(
        2
      );
      return totalAmount;
    }
  }
  return (
    <div className="right-side-container">
      <div className="tip-amount">
        <div className="left">
          <h3>Tip Amount</h3>
          <p>/ Person</p>
        </div>
        <p className="total-money">
          ${peopleNumber === null ? "0.00" : calcTipAmount()}
        </p>
      </div>
      <div className="total-amount">
        <div className="left">
          <h3>Total</h3>
          <p>/ Person</p>
        </div>
        <p className="total-money">
          ${peopleNumber === null ? "0.00" : calcTotalPay()}
        </p>
      </div>
      <button onClick={reset} className="reset-button">
        RESET
      </button>
    </div>
  );
};

export default RightSide;
