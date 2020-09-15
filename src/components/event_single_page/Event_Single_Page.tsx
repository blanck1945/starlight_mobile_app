import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../store/interface/interface";
import Title_Header from "../characters/title_header/Title_Header";
import Event_dis from "../home_header/events_box/event_dis/Event_dis";
import Youtube_banner from "../home_header/youtube_banner/Youtube_banner";
import { fetchSingleEvent } from "../../store/axiosfunc/axiosfunc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Event_Header from "./event_header/Event_Header";
import Event_Text from "./event_text/Event_Text";
import Event_Social_Div from "./event_social_div/Event_Social_Div";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./Event_Single_Page.scss";

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
            state.single_event
              ? state.single_event.event_headers.header_1
              : "header 1"
          }
          header={
            state.single_event
              ? state.single_event.event_headers_label.label_1
              : ["header", "1"]
          }
        />
        <Event_Text
          label_box={"Event Details"}
          square_title={true}
          square_icon={true}
          details={
            state.single_event
              ? state.single_event.event_paras.para_1
              : ["uno", "dos"]
          }
        />
        <Event_Text
          label_box={"How to Partipate"}
          num={true}
          square_title={true}
          square_icon={true}
          details={
            state.single_event
              ? state.single_event.event_paras.para_2
              : ["uno", "dos"]
          }
        />
        <Event_Header
          label={
            state.single_event
              ? state.single_event.event_headers.header_2
              : "header 2"
          }
          header={
            state.single_event
              ? state.single_event.event_headers_label.label_2
              : ["header", "2"]
          }
        />
        <Event_Text
          details={
            state.single_event
              ? state.single_event.event_paras.para_3
              : ["event", "event_details_2"]
          }
        />

        <Event_Text
          square_title={true}
          square_icon={true}
          label_box={
            "Star Gems x6,200 (w/ chance at Taiwanese event) Pack Details"
          }
          details={
            state.single_event
              ? state.single_event.event_paras.para_4
              : ["event", "event_details_header2_2"]
          }
        />
        <Event_Text
          details={
            state.single_event
              ? state.single_event.event_paras.para_5
              : ["event", "event_details_header2_3"]
          }
        />
        <Event_Header
          label={
            state.single_event
              ? state.single_event.event_headers.header_3
              : "header 2"
          }
          header={
            state.single_event
              ? state.single_event.event_headers_label.label_3
              : ["header", "2"]
          }
        />
        <Event_Text
          num={true}
          label_box={"How to Apply"}
          square_title={true}
          details={
            state.single_event
              ? state.single_event.event_paras.para_6
              : ["event", "event_details_header2_3"]
          }
        />
        <Event_Text
          label_box={"Terms of Service"}
          square_icon={true}
          square_title={true}
          details={
            state.single_event
              ? state.single_event.event_paras.para_7
              : ["event", "event_details_header2_3"]
          }
        />
        <Event_Text
          num={true}
          label_box={"-Your application will be voided with any of the below."}
          square_title={true}
          details={
            state.single_event
              ? state.single_event.event_paras.para_8
              : ["event", "event_details_header2_3"]
          }
        />
        <Event_Text
          square_title={true}
          label_box={
            "Regarding Application, Choosing of Participants, and Contact to Chosen Participants"
          }
          details={
            state.single_event
              ? state.single_event.event_paras.para_9
              : ["event", "event_details_header2_3"]
          }
        />
        <Event_Text
          label_box={"Other Notes"}
          square_title={true}
          details={
            state.single_event
              ? state.single_event.event_paras.para_10
              : ["event", "event_details_header2_3"]
          }
        />
        <Event_Social_Div />
      </div>
      <Youtube_banner />
    </div>
  );
};

export default Event_Single_Page;
