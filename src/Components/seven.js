import React from "react";
import "../Styles/Seven.scss";
import cardp1 from "../Assets/cardp1.svg";
import cardp2 from "../Assets/cardp2.svg";
import cardp3 from "../Assets/cardp3.svg";
import cardp4 from "../Assets/cardp4.svg";
import cardp5 from "../Assets/cardp5.svg";
import cardp6 from "../Assets/cardp6.svg";


function Seven() {
  return (
    <div className="body">
      <div className="txt">
        <p> Follow Products And Discounts On Instagram</p>
      </div>
      <div className="card_post">
        <img src={cardp1} alt="" />
        <img src={cardp2} alt=""/>
        <img src={cardp3} alt=""/>
        <img src={cardp4} alt=""/>
        <img src={cardp5} alt=""/>
        <img src={cardp6} alt=""/>
      </div>
      <div className="input">
        <div className="txt">
          <p>Or Subscribe To The Newsletter</p>
        </div>
        <div className="input1">
          <input className="txtbox" type="text" placeholder="Email Address"></input>
          <button> SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Seven;
