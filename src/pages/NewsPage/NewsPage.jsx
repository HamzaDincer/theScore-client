import React from "react";
import "./NewsPage.scss";
import profile from "../../assets/images/profile.svg";
import logo from "../../assets/images/logo-speech.svg";
import player from "../../assets/images/Haaland.svg";
import TheScore from "../../assets/TheScore.svg";
import time from "../../assets/2h-ago.svg";
import share from "../../assets/share.svg";
import bookmark from "../../assets/bookmark.svg";
import buttonComp from "../../assets/buttonComp.svg";
import button from "../../assets/button.svg";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <header className="header">
        <div className="header__row">
          <img className="header__profile" src={profile} />

          <form className="header__form">
            <input
              type="search"
              placeholder="Teams, Players and News"
              className="header__search"
            ></input>
          </form>
          <img className="header__logo" src={logo} />
        </div>
        <div className="header__nav">
          <div className="header__nav--link active">News</div>
          <div className="header__nav--link">NFL</div>
          <div className="header__nav--link">EPL</div>
          <div className="header__nav--link">LA LIGA</div>
          <div className="header__nav--link">UCL</div>
          <div className="header__nav--link">SERIE A</div>
        </div>
      </header>

      <div className="news-header">
        <img className="news-header-img" src={player} alt="Erling Haaland" />
        <p>Haaland a doubt for Manchester City’s match at Liverpool</p>
      </div>
      <div className="news-header_metadata">
        <img src={time} alt="the score metadata" />
        <img src={TheScore} alt="the score metadata" />
        <img src={share} alt="the score metadata" />
        <img src={bookmark} alt="the score metadata" />
      </div>

      <div className="news-header_buttonHolder">
        <img src={buttonComp} alt="the score metadata" />
        <Link to="/freeplay">
          <img src={button} alt="the score metadata" />
        </Link>
      </div>
    </>
  );
};

export default NewsPage;
