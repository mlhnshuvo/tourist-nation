import React from "react";
import Items from "./Items";

function SearchResult() {
  return (
    <div className="searchresult">
      <Items />
      {/* <div className="searchresult-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.522573581384!2d77.15330127675531!3d32.23950384683561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh%2C%20India!5e0!3m2!1sen!2sbd!4v1677854062106!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
    </div>
  );
}

export default SearchResult;
