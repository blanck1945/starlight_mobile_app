import * as React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { RiAppleLine } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import Mobile_btn from "../mobile_app/mobile_btn/Mobile_btn";
import "./main_footer.scss";
import Footer_Data from "./footer_data/Footer_Data";

const logo = require("../../../assets/nav/logo.jpg");
const footer_img = require("../../../assets/utils-img/footer_icn-app.png");

const Main_footer = () => {
  return (
    <div className="main_footer">
      <div className="mobile_footer">
        <img src={footer_img.default} alt="footer_img" className="footer_img" />
        <div className="mobile_data_box">
          <div className="data_box">
            <Footer_Data header={"Genre"} label={"Revue & Adventure RPG"} />
            <Footer_Data
              header={"Cost"}
              label={"Free to Play"}
              label2={"(in-app purchase available)"}
            />
          </div>
          <div className="data_box">
            <Footer_Data
              header={"Supported OS"}
              label={"iOS 9.0 or later,"}
              label2={"Android™ OS 4.4 or later"}
            />
            <Footer_Data header={"Develeop By"} label={"Ateam Inc."} />
          </div>
          <div className="mobile_btn_box">
            <Mobile_btn
              MobileIcon={RiAppleLine}
              text={"Download on the"}
              label={"App Store"}
            />
            <Mobile_btn
              MobileIcon={FaGooglePlay}
              text={"Get it on"}
              label={"Google Play"}
            />
          </div>
          <div>
            <h4 className="disclaimer">
              ※App Store and iTunes are trademarks of Apple Inc., registered in
              the U.S. and other countries.
            </h4>
            <h4 className="disclaimer">
              ※Google Play and the Google Play logo are registered trademarks of
              Google LLC.
            </h4>
          </div>
        </div>
      </div>
      <div className="footer_social">
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.en.revuestarlight-relive.com%2F&text=Revue%20Starlight%20Re%20LIVE%20Official%20Site&hashtags=RevueStarlight%2CRevueStarlightReLIVE">
          <FaTwitter className="twi social_icon" />
        </a>
        <FaFacebookF className="face social_icon" />
      </div>
      <div className="logo_box">
        <img src={logo.default} alt="logo" className="logo" />
        <div className="owner_box"></div>
        <h5 className="inq">Inquiries</h5>
        <h5 className="inq">
          ©Project Revue Starlight © 2019 Ateam Inc. ©TBS(JAPAN) ©bushiroad All
          Rights Reserved.
        </h5>
        <IoIosArrowUp
          className="arrow_up"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
    </div>
  );
};

export default Main_footer;
