import * as React from "react";

import "./Event_Social_Div.scss";
const starlight = require("../../../assets/event_social_div/sns_ttl.png");
const facebook = require("../../../assets/social_media_box/icn-facebook.png");
const twitter = require("../../../assets/social_media_box/icn-twitter.png");
const line = require("../../../assets/social_media_box/icn-line.png");

const Event_Social_Div = () => {
  return (
    <div className="event_social_box">
      <img src={starlight.default} alt="starlight" className="star_logo" />
      <div className="social_media_box">
        <a href="https://www.facebook.com/share.php?u=https%3A%2F%2Fwww.en.revuestarlight-relive.com%2Fnews%2Flive-event%2F2019%2F0510%2F1.html">
          <img src={facebook.default} alt="icon" className="icon" />
        </a>
        <a href="https://twitter.com/share?url=https://www.en.revuestarlight-relive.com/news/live-event/2019/0510/1.html&text=Taiwan%20Event%20|%20News%20|%20Revue%20Starlight%20Re%20LIVE%20Official%20Site&hashtags=RevueStarlight,RevueStarlightReLIVE">
          <img src={twitter.default} alt="icon" className="icon" />
        </a>
        <a href="https://access.line.me/oauth2/v2.1/login?loginState=iEltrMZxJ5RhH5It1bUksJ&loginChannelId=1446101138&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Btimeline.post%2Bmessage.write%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Flineit%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Flineit%25252Fshare%25253Furl%25253Dhttps%25253A%25252F%25252Fwww.en.revuestarlight-relive.com%25252Fnews%25252Flive-event%25252F2019%25252F0510%25252F1.html%26state%3D3b985ed38006af32be2915b1befd6c%26client_id%3D1446101138#/">
          <img src={line.default} alt="icon" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Event_Social_Div;
