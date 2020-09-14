import * as React from "react";

import "./Event_Header.scss";

interface EventHeaderProps {
  label?: string;
  header?: string[];
}

const Event_Header = ({ label, header }: EventHeaderProps) => {
  return (
    <div className="single_text_box">
      <div className="event_header">
        <h3 className="header_label">{label}</h3>
      </div>
      {header.map((el: string, index: number) => (
        <h3 className="text_label" key={index}>
          {el}
        </h3>
      ))}
    </div>
  );
};

export default Event_Header;
