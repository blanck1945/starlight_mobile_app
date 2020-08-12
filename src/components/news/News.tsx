import * as React from "react";
import Title_Header from "../characters/title_header/Title_Header";
import Events_box from "../home_header/events_box/Events_box";
import Youtube_banner from "../home_header/youtube_banner/Youtube_banner";
import useSWR from "swr";
import Axios from "axios";
import { http } from "../../utils/api";

import "./News.scss";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../store/axiosfunc/axiosfunc";
import { GlobalState } from "../../store/interface/interface";

const getEvents = async () => {
  try {
    const { data } = await Axios.get(http.api_events);
    return data;
  } catch (err) {}
};

const News = () => {
  const { data, error } = useSWR("events", getEvents);

  const state = useSelector((state: GlobalState) => state.eventReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchEvents());
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news_box">
      <Title_Header label={"News"} />
      <div className="event_box">
        <Events_box data={state.events} />
      </div>
      <div className="paginator">
        <h5 className="paginator_item">1</h5>
      </div>
      <Youtube_banner />
    </div>
  );
};

export default News;
