import React from "react";
import "./navbar.css";
import logo from "../../assets/netlify-logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="links">
        <div className="navbar-menu">
          <ul className="ul">
            <li>
              Platform{" "}
              <span>
                <RiArrowDropDownLine className="dropdown" />
              </span>
            </li>
            <li>
              Solutions
              <span>
                <RiArrowDropDownLine className="dropdown" />
              </span>
            </li>
            <li>Integrations</li>
            <li>
              Start Building
              <span>
                <RiArrowDropDownLine className="dropdown" />
              </span>
            </li>
            <li>Docs</li>
            <li>Pricing</li>

            <li>
              <div className="contact">Contact</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="signup">
        <div className="search">
          <FaSearch className="search-icon" />
        </div>
        <div>
          <div className="login">Log in</div>
        </div>
        <button className="button">Sign up</button>
        <div className="humberger-menu">
          <IoMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
