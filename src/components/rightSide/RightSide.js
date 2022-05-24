import React from "react";

import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right-side-container">
      <div className="tip-amount">
        <h3>Tip Amount</h3>
        <p>/ Person</p>
        <p className="total-money">$0.00</p>
      </div>
      <div className="total-amount">
        <h3>Total</h3>
        <p>/ Person</p>
        <p className="total-money">$0.00</p>
      </div>
    </div>
  );
};

export default RightSide;
