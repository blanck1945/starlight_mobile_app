import * as React from "react";
import { EventType } from "../../../../store/interface/interface";

import "./Event_dis.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSingleDevEvent } from "../../../../store/axiosfunc/axios_dev-json";
import { setSingleEvent } from "../../../../store/actions/actions/eventsActions";

interface EventDisProps {
  event: EventType;
}

const Event_dis = ({ event }: EventDisProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goToSinglePage = async (id: number) => {
    await dispatch(setSingleEvent(id));
    history.push("/single_event");
  };

  return (
    <div className="event_dis_box" onClick={() => goToSinglePage(event.id)}>
      <div className="event_data">
        <h3 className="event_date">{event.event_publish_day}</h3>
        <h3 className="event_name">{event.event_common_name}</h3>
      </div>
      <h3 className="event_type" style={{ background: event.event_color }}>
        {event.event_type}
      </h3>
    </div>
  );
};

export default Event_dis;
