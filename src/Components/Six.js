import React from "react";
import "../Styles/Six.scss";
import { FaFilter } from "react-icons/fa";
import card2 from "../Assets/card2.svg";
import card4 from "../Assets/card4.svg";
import card5 from "../Assets/card5.svg";
import card6 from "../Assets/card6.svg";

function Six() {
  return (
    <>
      <div className="body6">
        <div className="title">
          <p>Best Sellers</p>
        </div>

        <div className="head_list">
          <div className="text_li">
            <a className="text_list" href=" ">
              All Products
            </a>
            <a className="text_list" href=" ">
              T-shirt
            </a>
            <a className="text_list" href=" ">
              Hoodies
            </a>
            <a className="text_list" href=" ">
              Jackets
            </a>
          </div>
          <div>
            <button className="filter_button">
              <FaFilter />
              Show all
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cards">
          <div className="card5">
            <img src={card5} alt=""/>
            <p>Basic Dress Green</p>
            <div className="para_0">
              <p>Dress</p>
              <p>$236.00</p>
            </div>
          </div>
          <div className="card2">
            <img src={card2} alt=""/>
            <p>Nike Sportswear Futura Luxe</p>
            <div className="para_0">
              <p>Bag</p>
              <p>$130</p>
            </div>
          </div>
          <div className="card4">
            <img src={card4} alt=""/>
            <p>Yellow Reserved Hoodie</p>
            <div className="para_0">
              <p>Dress</p>
              <p>$364.00</p>
              <p>$155</p>
            </div>
          </div>
          <div className="card6">
            <img src={card6} alt=""/>
            <p>Nike Air Zoom pegasus</p>
            <div className="para_0">
              <p>Shoe</p>
              <p>$220.00</p>
              <p>$198</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Six;
