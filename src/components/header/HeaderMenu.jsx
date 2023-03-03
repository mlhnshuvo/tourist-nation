import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import HeaderMenuSearch from "../../assets/images/header-menu-search.svg";

function HeaderMenu({ popUpHandler }) {
  return (
    <div className="header-menu" onClick={popUpHandler} aria-hidden>
      <p className="header-menu-item">Manali</p>
      <p className="header-menu-item-border" />
      <p className="header-menu-item">Feb 19-26</p>
      <p className="header-menu-item-border" />
      <p className="header-menu-item">2 travellers</p>
      <img
        src={HeaderMenuSearch}
        alt=""
        className="header-menu-item-seachbar"
      />
    </div>
  );
}

HeaderMenu.propTypes = {
  popUpHandler: PropTypes.func.isRequired,
};

export default HeaderMenu;
