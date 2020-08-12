import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../store/interface/interface";
import Title_Header from "../characters/title_header/Title_Header";

import Event_dis from "../home_header/events_box/event_dis/Event_dis";
import Youtube_banner from "../home_header/youtube_banner/Youtube_banner";
import { fetchSingleEvent } from "../../store/axiosfunc/axiosfunc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./Event_Single_Page.scss";
import Event_Header from "./event_header/Event_Header";
const event_img = require("../../assets/event_img/taiwan_event.jpg");

const Event_Single_Page = () => {
  const state = useSelector((state: GlobalState) => state.eventReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (state.single_event === undefined) {
      dispatch(fetchSingleEvent(1));
    }
  }, []);

  return (
    <div className="event_single_page">
      <Title_Header label={"News"} />
      <div className="single_page_content">
        {state.single_event !== undefined ? (
          <Event_dis event={state.single_event} />
        ) : (
          "No Events ATM"
        )}
        <LazyLoadImage
          effect="blur"
          src={event_img.default}
          alt="event_img"
          className="event_img"
        />
        <Event_Header
          label={
            state.single_event ? state.single_event.event_name : "Event N1"
          }
        />
      </div>
      <Youtube_banner />
    </div>
  );
};

export default Event_Single_Page;
