import * as React from "react";
import { IconType } from "react-icons/lib/cjs";

import "./Game_btn.scss";

interface GameBtnProps {
  label: string;
  Icon: IconType;
  right?: boolean;
  left?: boolean;
}

const Game_btn = ({ label, Icon, right, left }: GameBtnProps) => {
  return (
    <div className="game_btn">
      <div className="btn_overlay">
        {left ? <Icon className="btn_icon btn_icon_left" /> : null}
        <h4 className="btn_text">{label}</h4>
        {right ? <Icon className="btn_icon btn_icon_right" /> : null}
      </div>
    </div>
  );
};

export default Game_btn;
