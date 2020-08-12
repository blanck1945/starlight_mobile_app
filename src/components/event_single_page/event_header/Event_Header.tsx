import * as React from "react";

import "./Event_Header.scss";

interface EventHeaderProps {
  label?: string;
}

const Event_Header = ({ label }: EventHeaderProps) => {
  return (
    <div className="event_header">
      <h3 className="header_label">{label}</h3>
    </div>
  );
};

export default Event_Header;
