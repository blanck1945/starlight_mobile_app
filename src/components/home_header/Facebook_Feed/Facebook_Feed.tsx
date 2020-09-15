import * as React from "react";

import "./Facebook_Feed.scss";

const Facebook_Feed = () => {
  return (
    <div className="facebook_feed">
      <h2 className="feed_title">Facebook Feed</h2>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/RevueStarlightReLIVE%2Ffacebook&tabs=timeline&width=440&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        height="500"
        width="450"
        style={{ border: "none", overflow: "hidden" }}
        className="feed"
        scrolling="no"
        loading="lazy"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Facebook_Feed;
