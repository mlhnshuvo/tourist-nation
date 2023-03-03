import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import Clock from "../../assets/images/clock.svg";
import MiniMap from "../../assets/images/minimap.svg";

function TopPopUp({ popUpHandler }) {
  return (
    <div className="toppopup">
      <div className="toppopup-prev">
        <p className="toppopup-prev-title">Previous Seaches</p>
        <div className="toppopup-prev-search">
          <img src={Clock} alt="" />
          <div>
            <p className="toppopup-prev-search-placename">Ladakh</p>
            <p className="toppopup-prev-search-time">
              Jan 14-19 - 6 Days/5 Nights
            </p>
          </div>
        </div>
        <div className="toppopup-prev-search">
          <img src={Clock} alt="" />
          <div>
            <p className="toppopup-prev-search-placename">Jammu and kashmir</p>
            <p className="toppopup-prev-search-time">
              jan 01-07 7 - Days/6 Nights
            </p>
          </div>
        </div>
        <div className="toppopup-prev-search">
          <img src={Clock} alt="" />
          <div>
            <p className="toppopup-prev-search-placename">Pondicherry</p>
            <p className="toppopup-prev-search-time">
              jan 12-16 - 5 Days/4 Nights
            </p>
          </div>
        </div>
        <div className="toppopup-prev-search">
          <img src={Clock} alt="" />
          <div>
            <p className="toppopup-prev-search-placename">Coorg</p>
            <p className="toppopup-prev-search-time">
              jan 12-16 - 5 Days/4 Nights
            </p>
          </div>
        </div>
      </div>
      <div className="toppopup-popular">
        <p className="toppopup-prev-title">Popular places</p>
        <div className="toppopup-popular-items">
          <div>
            <img src={MiniMap} alt="" />
            <p>Lorem</p>
          </div>
          <div>
            <img src={MiniMap} alt="" />
            <p>Lorem</p>
          </div>
          <div>
            <img src={MiniMap} alt="" />
            <p>Lorem</p>
          </div>
          <div>
            <img src={MiniMap} alt="" />
            <p>Lorem</p>
          </div>
          <div>
            <img src={MiniMap} alt="" />
            <p>Lorem</p>
          </div>
          <div>
            <img src={MiniMap} alt="" />
            <p>Lorem</p>
          </div>
        </div>
      </div>
      <p className="toppopup-bg-opacity" onClick={popUpHandler} aria-hidden>
        f
      </p>
    </div>
  );
}

TopPopUp.propTypes = {
  popUpHandler: PropTypes.func.isRequired,
};

export default TopPopUp;
