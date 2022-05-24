import React from "react";

import "./MainComponent.css";
import { logoMain, iconDollar, iconPerson } from "../images";
import RightSide from "./rightSide/RightSide";

const MainComponent = () => {
  return (
    <div className="main-component-container">
      <img src={logoMain} alt="logo" className="logo-main" />
      <div className="app-container">
        <div className="left-side">
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
            <div className="people-container">
              <h3>Number of People</h3>
              <p>Can't be zero</p>
            </div>
            <img src={iconPerson} alt="person" className="icon-person" />
            <input type="text" placeholder="0" />
          </div>
        </div>
        <div className="right-side">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
