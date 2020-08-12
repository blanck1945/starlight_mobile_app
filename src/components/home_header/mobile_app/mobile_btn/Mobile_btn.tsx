import * as React from "react";
import { IconType } from "react-icons/lib/cjs";

import "./Mobile_btn.scss";

interface MobileBtnProps {
  label: string;
  text: string;
  MobileIcon: IconType;
}

const Mobile_btn = ({ label, text, MobileIcon }: MobileBtnProps) => {
  return (
    <a
      href={
        label === "Google Play"
          ? "https://play.google.com/store/apps/details?id=jp.co.atm.smile.ww&referrer=af_tranid%3DEkPLJLuZGvK69YmqgTCCOA%26shortlink%3D377a5f03%26pid%3Dofficialsite%26c%3Dofficialsite_en%26af_web_id%3D5e84cb7a-515b-432f-a942-8728aa5a3aed-o"
          : "https://apps.apple.com/US/app/id1456723497?mt=8"
      }
      className="mobile_btn"
    >
      <MobileIcon className="mobile_icon" />
      <div className="mobile_text_box">
        <h4 className="mobile_text">{text}</h4>
        <h3 className="mobile_label">{label}</h3>
      </div>
    </a>
  );
};

export default Mobile_btn;
