import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bar3 from "../../assets/images/bar3.svg";
import Logo from "../../assets/images/logo.svg";
import User from "../../assets/images/user.svg";
import World from "../../assets/images/world.svg";
import HeaderMenu from "./HeaderMenu";
import TopPopUp from "./TopPopUp";
import TopPopUpHeader from "./TopPopUpHeader";
import Modal from "../Modal";
import Signin from "../auth/Signi";

function Header() {
  const [topPopUp, setTopPopUp] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [opanModal, setOpanModal] = useState(false);

  const popUpHandler = () => {
    setTopPopUp(!topPopUp);
  };

  const dropDownHandler = () => {
    setDropdown(!dropdown);
  };

  const modalHandler = () => {
    setOpanModal(!opanModal);
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
          <div
            className="header-setting-user"
            onClick={dropDownHandler}
            aria-hidden
          >
            <img src={Bar3} alt="" className="header-setting-user-item" />
            <img src={User} alt="" className="header-setting-user-item" />
          </div>
          {dropdown && (
            <div className="header-setting-user-dropdown">
              <Link to="/" className="header-setting-user-dropdown-li">
                My profile
              </Link>
              <Link to="/" className="header-setting-user-dropdown-li">
                My bookings
              </Link>
              <Link to="/" className="header-setting-user-dropdown-li">
                Logout
              </Link>
              <p
                className="header-setting-user-dropdown-li"
                onClick={modalHandler}
                aria-hidden
              >
                Login
              </p>
              <p
                className="header-setting-user-dropdown-bg-opacity"
                onClick={dropDownHandler}
                aria-hidden
              />
            </div>
          )}
        </div>
      </div>
      {topPopUp && <TopPopUp popUpHandler={popUpHandler} />}
      {opanModal && (
        <Modal modalHandler={modalHandler}>
          <Signin />
        </Modal>
      )}
    </div>
  );
}

export default Header;
