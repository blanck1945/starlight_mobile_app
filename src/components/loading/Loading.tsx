import * as React from "react";

const crown = require("../../assets/utils-img/btn-switch-revue-visible-karen.png");
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading_page">
      <img src={crown.default} alt="loading" className="loading_icon" />
      <h4 className="loading_text">Loading...</h4>
    </div>
  );
};

export default Loading;
