import * as React from "react";

import "./Youtube_Video.scss";
const Youtube_Video = () => {
  return (
    <div className="youtube_video">
      <iframe
        src="https://www.youtube.com/embed/ZKleZbHfaVU?autoplay=1&showinfo=0&controls=1&mute=1&enablejsapi=1&disablekb=1&loop=1&playlist=ZKleZbHfaVU"
        className="video_revue"
      ></iframe>
    </div>
  );
};

export default Youtube_Video;
