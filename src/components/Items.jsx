import React from "react";
import Item1 from "../assets/images/item1.png";
import Item2 from "../assets/images/item2.png";
import Review from "../assets/images/review.svg";
import Love from "../assets/images/love.svg";
import Favourite from "../assets/images/favourite.svg";

function Items() {
  return (
    <div className="container">
      <div className="items">
        <p className="item-package">Packages in manali</p>
        <div className="item-card">
          <img src={Item1} alt="" className="item-card-img" />
          <div>
            <p className="item-card-title">Bhrigu Lake Trek</p>
            <div className="item-card-des">
              <p className="item-card-des-title">
                Manali, Himachal Pradesh · 3 Days/2 Nights
              </p>
              <p className="item-card-des-des">
                This four-day journey provides you a fair impression of the
                meadows, glacier lakes, and mountain views that Himala...
              </p>
            </div>
            <div className="item-card-review">
              <p>5.0</p>
              <img src={Review} alt="" />
              <p>(318 reviews)</p>
            </div>
          </div>
          <div className="item-card-right">
            <img src={Love} alt="" />
            <div className="item-card-right-price">
              <p className="item-card-right-price-number">₹5,400</p>
              <p className="item-card-right-count">/per person</p>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img src={Item2} alt="" className="item-card-img" />
          <div>
            <p className="item-card-title">Himachal Tour</p>
            <div className="item-card-des">
              <p className="item-card-des-title">
                Manali, Himachal Pradesh · 11 Days/10 Nights
              </p>
              <p className="item-card-des-des">
                This four-day journey provides you a fair impression of the
                meadows, glacier lakes, and mountain views that Himala...
              </p>
            </div>
            <div className="item-card-review">
              <p>4.9</p>
              <img src={Review} alt="" />
              <p>(3500 reviews)</p>
            </div>
          </div>
          <div className="item-card-right">
            <img src={Favourite} alt="" />
            <div className="item-card-right-price">
              <p className="item-card-right-price-number">₹5,400</p>
              <p className="item-card-right-count">/per person</p>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img src={Item1} alt="" className="item-card-img" />
          <div>
            <p className="item-card-title">Himachal Backpacking</p>
            <div className="item-card-des">
              <p className="item-card-des-title">
                Manali, Himachal Pradesh · 3 Days/2 Nights
              </p>
              <p className="item-card-des-des">
                This four-day journey provides you a fair impression of the
                meadows, glacier lakes, and mountain views that Himala...
              </p>
            </div>
            <div className="item-card-review">
              <p>5.0</p>
              <img src={Review} alt="" />
              <p>(318 reviews)</p>
            </div>
          </div>
          <div className="item-card-right">
            <img src={Love} alt="" />
            <div className="item-card-right-price">
              <p className="item-card-right-price-number">₹5,400</p>
              <p className="item-card-right-count">/per person</p>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img src={Item2} alt="" className="item-card-img" />
          <div>
            <p className="item-card-title">Himachal Tour</p>
            <div className="item-card-des">
              <p className="item-card-des-title">
                Manali, Himachal Pradesh · 11 Days/10 Nights
              </p>
              <p className="item-card-des-des">
                This four-day journey provides you a fair impression of the
                meadows, glacier lakes, and mountain views that Himala...
              </p>
            </div>
            <div className="item-card-review">
              <p>4.9</p>
              <img src={Review} alt="" />
              <p>(3500 reviews)</p>
            </div>
          </div>
          <div className="item-card-right">
            <img src={Favourite} alt="" />
            <div className="item-card-right-price">
              <p className="item-card-right-price-number">₹5,400</p>
              <p className="item-card-right-count">/per person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
