import React from "react";

import "./MainComponent.css";
import { logoMain, iconDollar, iconPerson } from "../images";

const MainComponent = () => {
  return (
    <div className="main-component-container">
      <img src={logoMain} alt="logo" className="logo-main" />
      <div className="app-container">
        <div className="bill-form">
          <h3>Bill</h3>
          <img src={iconDollar} alt="dollar" className="icon-dollar" />
          <input type="text" placeholder="0" />
        </div>
        <div className="tip-form">
          <h3>Select Tip %</h3>
          <div className="tip-container">
            <span className="tip-value">5%</span>
            <span className="tip-value">10%</span>
            <span className="tip-value">15%</span>
            <span className="tip-value">25%</span>
            <span className="tip-value">50%</span>
            <input type="text" className="tip-custom" placeholder="Custom" />
          </div>
        </div>
        <div className="people-number">
          <h3>Number of People</h3>
          <img src={iconPerson} alt="person" className="icon-person" />
          <input type="text" placeholder="0" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
