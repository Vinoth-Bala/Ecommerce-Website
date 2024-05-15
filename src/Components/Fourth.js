import React from "react";
import "../Styles/Fourth.scss";
import { FaFilter } from "react-icons/fa";

function Fourth() {
  return (
    <>
      <div className="body4">
        <div className="title">
          <p>Or subscribe to the newsletter</p>
        </div>

        <div className="head_li">
          <div className="txt_li">
            <a className="txt_list" href=" ">
              All Products
            </a>
            <a className="txt_list" href= " ">
              T-shirt
            </a>
            <a className="txt_list" href=" ">
              Hoodies
            </a>
            <a className="txt_list" href=" ">
              Jackets
            </a>
          </div>
          <div>
            <button className="filter_button">
              <FaFilter />
              Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fourth;
