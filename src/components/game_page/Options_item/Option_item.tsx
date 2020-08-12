import * as React from "react";

const star = require("../../../assets/utils-img/star.png");
import "./Option_item.scss";

interface OptionProps {
  label: string;
  active: boolean;
  func?: Function;
  id: number;
}

const Option_item = ({ label, active, func, id }: OptionProps) => {
  return (
    <div className="option_box">
      <div className="option_overlay" onClick={() => func(label, id)}>
        <img
          src={star.default}
          alt="star"
          className={active ? "star" : "active_star"}
        />
        <h4 className="option_label">{label}</h4>
        <img
          src={star.default}
          alt="star"
          className={active ? "star" : "active_star"}
        />
      </div>
    </div>
  );
};

export default Option_item;
