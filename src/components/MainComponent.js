import React, { useState } from "react";

import "./MainComponent.css";
import { logoMain, iconDollar, iconPerson } from "../images";
import RightSide from "./rightSide/RightSide";

const MainComponent = () => {
  const [tipSelect, setTipSelect] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(null);
  function billChange(e) {
    setBill(Number(e.target.value));
  }
  function peopleChange(e) {
    setPeople(Number(e.target.value));
  }
  function tipCustom(e) {
    setTipSelect(Number(e.target.value));
  }
  function resetButton() {
    setTipSelect(0);
    setBill(0);
    setPeople(null);
    document.querySelector(".bill-input").value = "";
    document.querySelector("#people-input").value = "";
  }
  return (
    <div className="main-component-container">
      <img src={logoMain} alt="logo" className="logo-main" />
      <div className="app-container">
        <div className="left-side">
          <div className="bill-form">
            <h3>Bill</h3>
            <img src={iconDollar} alt="dollar" className="icon-dollar" />
            <input
              className="bill-input"
              type="number"
              placeholder="0"
              min={0}
              onChange={billChange}
            />
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
                onChange={tipCustom}
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
              <p
                className={
                  people === null
                    ? "display-none"
                    : Number(people) === 0
                    ? ""
                    : "display-none"
                }
              >
                Can't be zero
              </p>
            </div>
            <img src={iconPerson} alt="person" className="icon-person" />
            <input
              id="people-input"
              onChange={peopleChange}
              type="number"
              min={0}
              placeholder="0"
              className={people === 0 ? "red-border" : ""}
            />
          </div>
        </div>
        <div className="right-side">
          <RightSide
            billNumber={bill}
            tipNumber={tipSelect}
            peopleNumber={people}
            reset={resetButton}
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
