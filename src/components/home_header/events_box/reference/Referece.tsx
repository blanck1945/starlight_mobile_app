import * as React from "react";
import { GiStarShuriken } from "react-icons/gi";

import "./Reference.scss";

interface ReferenceProps {
  color: string;
  label: string;
  label_color: string;
}

const Referece = ({ color, label, label_color }: ReferenceProps) => {
  return (
    <div className="reference_box">
      <GiStarShuriken style={{ color: color }} />
      <h3 className={`label ${label_color}`}>{label}</h3>
    </div>
  );
};

export default Referece;
