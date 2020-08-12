import * as React from "react";
import Mobile_app from "./mobile_app/Mobile_app";
import Youtube_Video from "./youtube_video/Youtube_Video";
import Events_box from "./events_box/Events_box";
import Facebook_Feed from "./Facebook_Feed/Facebook_Feed";
import Youtube_banner from "./youtube_banner/Youtube_banner";
import "./Home_header.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, fetchCharas } from "../../store/axiosfunc/axiosfunc";
import { GlobalState } from "../../store/interface/interface";

const logo = require("../../assets/nav/logo.jpg");
const crown = require("../../assets/utils-img/btn-switch-revue-visible-karen.png");

const Home_header = () => {
  const dispatach = useDispatch();
  const eventState = useSelector((state: GlobalState) => state.eventReducer);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatach(fetchEvents());
  }, []);

  return (
    <div className="home_header">
      <div className="home_bg_img">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={crown.default}
          src="https://static.zerochan.net/Shoujo%E2%98%86Kageki.Revue.Starlight.-ReLIVE-.full.2553649.png"
          alt="bg_img"
          className="bg_img"
        />
        <LazyLoadImage
          effect="blur"
          src={logo.default}
          alt="logo"
          className="logo"
        />
        <Mobile_app />
      </div>
      <Youtube_Video />
      <Events_box list={true} data={eventState.events} />
      <Facebook_Feed />
      <Youtube_banner />
    </div>
  );
};

export default Home_header;
