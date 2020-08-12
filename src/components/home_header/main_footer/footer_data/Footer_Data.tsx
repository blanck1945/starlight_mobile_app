import * as React from "react";

const crown = require("../../../../assets/utils-img/btn-switch-revue-visible-karen.png");
import "./Footer_data.scss";

interface FooterProps {
  label: string;
  label2?: string;
  header: string;
}

const Footer_Data = ({ label, label2, header }: FooterProps) => {
  return (
    <div className="footer_data">
      <div className="footer_header">
        <img src={crown.default} alt="crown" className="crown" />
        <h3 className="header_title">{header}</h3>
      </div>
      <h4>{label}</h4>
      {label2 ? <h4>{label2}</h4> : null}
    </div>
  );
};

export default Footer_Data;
