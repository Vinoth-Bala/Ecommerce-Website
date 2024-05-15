import React from "react";
import "../Styles/Footer.scss";
import logo from "../Assets/logo_1.svg";
//import bottom from "../Assets/bottom-footer.svg";
import icon from "../Assets/icon.svg";
import { FaFacebookF, FaArrowUp } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="one">
          <ul>
            <li className="coral">
              <img src={logo} alt="" />
              Coral
              <img src={logo} alt="" />
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                dolorem, suscipit qui officiis, tempora impedit ad asperiores
                esse obcaecati.
              </p>
            </li>
            <li>
              <span className="socialicon">
                <a href="fb">
                  <FaFacebookF />
                </a>

                <a href="x">
                
                  <FaXTwitter />
                </a>

                <a href="linkedin">
                  <FaLinkedinIn />
                </a>

                <a href="insta ">
                  <FaInstagram />
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="two">
          <ul>
            <h3> CATALOG </h3>
            <li>Neckalaces</li>
            <li>Hoodies</li>
            <li>Jewelry Box</li>
            <li> T-shirt</li>
            <li>Jacket</li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h3>ABOUT US</h3>

            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h3>
             CUSTOMER SERVICES
            </h3>

            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book An Oppointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>© 2022 Coral , Inc.</p>

        <span>
          <img src={icon} alt="" />
        </span>

        <button>
          Scroll to Top <FaArrowUp />
        </button>
      </div>
    </>
  );
}

export default Footer;
