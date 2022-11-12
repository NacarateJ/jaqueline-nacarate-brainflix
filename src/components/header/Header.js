import "./header.scss";
import React from "react";
import Logo from "../../assets/logo/BrainFlix.svg";
import Image from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="header__navigation-left"> */}
      <Link to={"/"} className="header__company-logo-wrapper">
        <img className="header__company-logo"
          src={Logo}
          alt="Play button on a blue backgorund and BrainFlix word to the right"
        ></img>
      </Link>
      {/* </div> */}

      <nav className="header__navigation-right">
        <div className="header__navigation-right-wrapper">
          <input
            className="header__search"
            type="search"
            placeholder="Search"
          ></input>
          <div className="header__avatar-container">
            <img
              className="header__avatar"
              src={Image}
              alt="Mohan Muruge profile facing left"
            ></img>
          </div>
        </div>
        <Link to="/uploads">
          <button className="header__button" type="text">
            UPLOAD
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
