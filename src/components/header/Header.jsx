import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopPopUpHeader from "./TopPopUpHeader";
import TopPopUp from "./TopPopUp";
import HeaderMenu from "./HeaderMenu";
import Bar3 from "../../assets/images/bar3.svg";
import Logo from "../../assets/images/logo.svg";
import User from "../../assets/images/user.svg";
import World from "../../assets/images/world.svg";

function Header() {
  const [topPopUp, setTopPopUp] = useState(false);

  const popUpHandler = () => {
    setTopPopUp(!topPopUp);
  };

  return (
    <div className="header-wrapper">
      <div className="header">
        <Link to="/" className="header-logo">
          <img src={Logo} alt="" />
        </Link>
        {topPopUp ? (
          <TopPopUpHeader popUpHandler={popUpHandler} />
        ) : (
          <HeaderMenu popUpHandler={popUpHandler} />
        )}
        <div className="header-setting">
          <p className="header-setting-title">Become a vendor</p>
          <div>
            <img src={World} alt="" />
          </div>
          <Link to="/signin" className="header-setting-user">
            <img src={Bar3} alt="" className="header-setting-user-item" />
            <img src={User} alt="" className="header-setting-user-item" />
          </Link>
        </div>
      </div>
      {topPopUp && <TopPopUp popUpHandler={popUpHandler} />}
    </div>
  );
}

export default Header;
