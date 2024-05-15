import React from "react";
import { FaSearch } from "react-icons/fa";
import Account from "../Assets/Acc_icon.svg";
import Shop from "../Assets/shop_icon.svg";
import "../Styles/Home.scss";
import logo from "../Assets/logo_1.svg";
import { IoMdMenu } from "react-icons/io";

function Home() {
  const items = [
    "Jewelry & Accessories",
    "Clothing &Shoes",
    "Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectible",
    "Craft Supplies & Tools",
  ];
  return (
    <>
      <div className="head">
        <div className="header">
          <div className="Search">
            <FaSearch />
          </div>
          <div className="title">
            <img className="logo1" src={logo} alt="logo" />
            <p> CORAL</p>
            <img className="logo1" src={logo} alt="logo" />
          </div>
          <div className="buttons">
            <img className="buttons1" src={Account} alt="Account" />
            <p className="buttons1"> Account</p>
            <img className="buttons1" src={Shop} alt="Shop" />
            <p className="buttons1"> Shooping</p>
          </div>
        </div>
        <a className="menu" href=" ">
          <IoMdMenu />
        </a>
      </div>

      <div className="list">
        <div className="itemss">
          {items.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;




