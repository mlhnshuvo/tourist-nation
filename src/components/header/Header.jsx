import React, { useState } from "react";
import TopPopUpHeader from "./TopPopUpHeader";
import TopPopUp from "./TopPopUp";
import HeaderMenu from "./HeaderMenu";
import Bar3 from "../../assets/images/bar3.svg";
import Logo from "../../assets/images/logo.svg";
import User from "../../assets/images/user.svg";
import World from "../../assets/images/world.svg";

function Header() {
  const [topPopUp, setTopPopUp] = useState(true);

  const popUpHandler = () => {
    setTopPopUp(!topPopUp);
  };

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo">
          <img src={Logo} alt="" />
        </div>
        {topPopUp ? (
          <TopPopUpHeader />
        ) : (
          <HeaderMenu popUpHandler={popUpHandler} />
        )}
        <div className="header-setting">
          <p className="header-setting-title">Become a vendor</p>
          <div>
            <img src={World} alt="" />
          </div>
          <div className="header-setting-user">
            <img src={Bar3} alt="" className="header-setting-user-item" />
            <img src={User} alt="" className="header-setting-user-item" />
          </div>
        </div>
      </div>
      {topPopUp && <TopPopUp popUpHandler={popUpHandler} />}
    </div>
  );
}

export default Header;
