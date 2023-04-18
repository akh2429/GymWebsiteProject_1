import React from "react";
import styled from "./Navbar.module.css";

import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Navbar = () => {
  const btnClicked = () => {
    // alert("btn clicked")
    console.log("clicked");
  };
  return (
    <div className={styled.navbar_container}>
      <div className={styled.navlogo}>
        <h2>logo</h2>
      </div>
      <div className={styled.navlink_container}>
        <ul className={styled.navlink}>
          <li>
            {" "}
            <Link className={styled.link} to="/">
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styled.link} to="/AboutUs">
              ABOUTUS
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styled.link} to="/Program">
              PROGRAM
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styled.link} to="/Training">
              TRAINING
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styled.link} to="/Pricing">
              PRICING
            </Link>
          </li>
        </ul>
      </div>

      <div className={styled.navbtn}>
        <Button btnName="Join Us" btnClicked={btnClicked} />
      </div>
    </div>
  );
};
export default Navbar;
