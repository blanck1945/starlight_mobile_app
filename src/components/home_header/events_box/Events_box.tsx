import * as React from "react";
import Referece from "./reference/Referece";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import "./Events_box.scss";
import { EventType } from "../../../store/interface/interface";
import Event_dis from "./event_dis/Event_dis";

interface EventBoxProps {
  list?: boolean;
  data?: EventType[];
}

const Events_box = ({ list, data }: EventBoxProps) => {
  return (
    <div className="event_box">
      <h3 className="event_title">News</h3>
      <div className="event_reference">
        <Referece
          color={"rgb(153, 153, 153)"}
          label={"All"}
          label_color={"label"}
        />
        <Referece
          color={"rgb(250, 60, 60)"}
          label={"Info"}
          label_color={"label_red"}
        />
        <Referece
          color={"rgb(149, 115, 177)"}
          label={"Live/Event"}
          label_color={"label_violet"}
        />
        <Referece
          color={"rgb(97, 191, 153)"}
          label={"Campaign"}
          label_color={"label_green"}
        />
        <Referece
          color={"rgb(255, 154, 75)"}
          label={"Media"}
          label_color={"label_orange"}
        />
      </div>
      <div className="event_info_box">
        {data !== undefined
          ? data.map((el: EventType) => <Event_dis key={el.id} event={el} />)
          : "No Events ATM"}
      </div>
      {list ? (
        <div className="list_btn">
          <div className="list_btn_overlay">
            <h4 className="list_text">List</h4>
            <IoIosArrowDroprightCircle className="list_icon" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Events_box;
