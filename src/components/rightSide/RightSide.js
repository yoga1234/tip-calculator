import React from "react";

import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right-side-container">
      <div className="tip-amount">
        <div className="left">
          <h3>Tip Amount</h3>
          <p>/ Person</p>
        </div>
        <p className="total-money">$0.00</p>
      </div>
      <div className="total-amount">
        <div className="left">
          <h3>Total</h3>
          <p>/ Person</p>
        </div>
        <p className="total-money">$0.00</p>
      </div>
      <button className="reset-button">RESET</button>
    </div>
  );
};

export default RightSide;
