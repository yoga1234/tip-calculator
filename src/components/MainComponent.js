import React, { useState } from "react";

import "./MainComponent.css";
import { logoMain, iconDollar, iconPerson } from "../images";
import RightSide from "./rightSide/RightSide";

const MainComponent = () => {
  const [tipSelect, setTipSelect] = useState(0);
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
              <span
                onClick={() => setTipSelect(5)}
                className={"tip-value " + (tipSelect === 5 ? "tip-active" : "")}
              >
                5%
              </span>
              <span
                onClick={() => setTipSelect(10)}
                className={
                  "tip-value " + (tipSelect === 10 ? "tip-active" : "")
                }
              >
                10%
              </span>
              <span
                onClick={() => setTipSelect(15)}
                className={
                  "tip-value " + (tipSelect === 15 ? "tip-active" : "")
                }
              >
                15%
              </span>
              <span
                onClick={() => setTipSelect(25)}
                className={
                  "tip-value " + (tipSelect === 25 ? "tip-active" : "")
                }
              >
                25%
              </span>
              <span
                onClick={() => setTipSelect(50)}
                className={
                  "tip-value " + (tipSelect === 50 ? "tip-active" : "")
                }
              >
                50%
              </span>
              <input
                onClick={() => setTipSelect(99)}
                type="text"
                className={
                  "tip-custom " + (tipSelect === 99 ? "tip-active" : "")
                }
                placeholder="Custom"
              />
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
