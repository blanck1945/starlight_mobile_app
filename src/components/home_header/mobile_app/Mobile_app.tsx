import * as React from "react";
import { RiAppleLine } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import Mobile_btn from "./mobile_btn/Mobile_btn";

import "./Mobile_app.scss";

const Mobile_app = () => {
  return (
    <div className="mobile_app">
      <div className="white_overlay">
        <h2 className="mobile_title">Available Now !</h2>
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
    </div>
  );
};

export default Mobile_app;
