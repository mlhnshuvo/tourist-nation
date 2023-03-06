import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import SearchBtn from "../../assets/images/search-btn.svg";

function TopPopUpHeader({ popUpHandler }) {
  return (
    <div className="toppopupheader">
      {/* <div className="toppopupheader-menus">
        <p className="toppopupheader-menu-item toppopupheader-menu-item__active">
          Home Page
        </p>
        <p className="toppopupheader-menu-item">Landing Page</p>
        <p className="toppopupheader-menu-item">Contact Us</p>
      </div> */}
      <div className="toppopupheader-filter">
        <div className="toppopupheader-filter-location">
          <p className="toppopupheader-filter-location-name">Location</p>
          <input
            type="text"
            className="toppopupheader-filter-location-areaname"
            placeholder=" Manali, Himachal pradesh"
          />
        </div>
        <div className="toppopupheader-filter-fromtobtn">
          <div>
            <p className="toppopupheader-filter-location-name">Form</p>
            <p className="toppopupheader-filter-location-areaname">Feb 19</p>
          </div>
          <div>
            <p className="toppopupheader-filter-location-name">To</p>
            <p className="toppopupheader-filter-location-areaname">Feb 24</p>
          </div>
          <div>
            <p className="toppopupheader-filter-location-name">Travellers</p>
            <p className="toppopupheader-filter-location-areaname">None</p>
          </div>
          <Link to="/searchresult" onClick={popUpHandler}>
            <img src={SearchBtn} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

TopPopUpHeader.propTypes = {
  popUpHandler: PropTypes.func.isRequired,
};

export default TopPopUpHeader;
