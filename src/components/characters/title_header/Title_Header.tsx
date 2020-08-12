import * as React from "react";

import "./Title_Header.scss";

interface TitleProps {
  label: string;
}

const Title_Header = ({ label }: TitleProps) => {
  return (
    <div className="title_header">
      <h4 className="header_label">{label}</h4>
    </div>
  );
};

export default Title_Header;
