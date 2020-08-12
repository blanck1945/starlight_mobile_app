import * as React from "react";
import { AiFillYoutube } from "react-icons/ai";
import "./Youtube_banner.scss";
import { Link } from "react-router-dom";

const Youtube_banner = () => {
  return (
    <div className="youtube_banner">
      <div className="banner_overlay">
        <div className="banner_links">
          <Link to="" className="item_links">
            Home
          </Link>
          <Link to="/news" className="item_links">
            News
          </Link>
          <Link to="/game" className="item_links">
            Game
          </Link>
          <Link to="chara" className="item_links">
            Characters
          </Link>
        </div>
        <div className="youtube_link">
          <AiFillYoutube className="youtube" />
          <div className="youtube_center">
            <h3>Official</h3>
            <h3>Youtube</h3>
            <h3>Channel</h3>
          </div>
          <img
            src="https://2.bp.blogspot.com/-4HrUh4F_JFk/W7A1d4njrsI/AAAAAAAATG0/7QCYI9SbWD8CSjZ1LNsGUJUCMEQAO9iDACLcBGAs/s1600/Shoujo%2BKageki%2BRevue%2BStarlight.jpg"
            alt="karen&hikari"
            className="karen_hikari"
          />
        </div>
      </div>
    </div>
  );
};

export default Youtube_banner;
