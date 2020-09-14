import * as React from "react";
import { FaSquare } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

import "./Event_Text.scss";

interface EventTextProps {
  label_box?: string;
  details: string[];
  num?: boolean;
  square_icon?: boolean;
  square_title?: boolean;
}

const Event_Text = ({
  label_box,
  details,
  square_title,
  square_icon,
  num,
}: EventTextProps) => {
  return (
    <div className="event_text_box">
      <div className="text_box">
        {square_title ? (
          <div className="square_box">
            {square_icon ? (
              <FaSquare className="text_square" />
            ) : (
              <FaCircle className="text_square" />
            )}
            <h3 className="text_black">{label_box}</h3>
          </div>
        ) : null}
        {details.length !== 0
          ? details.map((el: string, index: number) => (
              <h3 className="detail_text" key={index}>
                {num ? (
                  <span className="red_num">{index + 1 + "." + " "}</span>
                ) : null}{" "}
                {el}
              </h3>
            ))
          : null}
      </div>
    </div>
  );
};

export default Event_Text;
