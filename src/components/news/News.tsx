import * as React from "react";
import Title_Header from "../characters/title_header/Title_Header";
import Events_box from "../home_header/events_box/Events_box";
import Youtube_banner from "../home_header/youtube_banner/Youtube_banner";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../store/interface/interface";

import "./News.scss";
import { fetchAllEvents } from "../../store/axiosfunc/axios_dev-json";

const News = () => {
  const state = useSelector((state: GlobalState) => state.eventReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (state.events.length === 0) {
      dispatch(fetchAllEvents());
    }
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

/*
nos movemos en el marco de la teoria objetiva del valor. que significa que hay algo, en este caso el trabajo, que determina los costos de los bienes y servicios. Más el margen definen los precios en el mercado.

costo trabajo + margen = precio de las cosas.
"los autriacos inventaron esto de la competencia porque se olvidan de los margenes"
"solo el amor como elemento ordenador busca el bien comun de la sociedad"
*/
