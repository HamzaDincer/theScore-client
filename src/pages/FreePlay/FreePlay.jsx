import React from "react";
import logo from "../../assets/promoBanner.svg";
import campaign from "../../assets/choose5banner.svg";
import "./FreePlay.scss";

const freePlay = () => {
  return (
    <div className="freePlay-container">
      <header className="freePlay-header">
        <img className="freePlay-header_img" src={logo} alt="5-for-500-logo" />
      </header>
      <div className="freePlay-promo">
        <p>Round 9 Deadline Friday Apr 7 9am</p>
      </div>
      <div className="freePlay-campaign">
        <img
          src={campaign}
          className="freePlay-campaign-img"
          alt="5-for5-banner"
        />
      </div>
    </div>
  );
};

export default freePlay;
