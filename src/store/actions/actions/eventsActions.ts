import * as eventTypes from "../../ReduxTypes/eventTypes";
import { EventType } from "../../interface/interface";

export const setEvents = (payload: EventType[]) => ({
  type: eventTypes.GET_EVENTS,
  payload,
});

export const setSingleEvent = (payload: EventType) => ({
  type: eventTypes.GET_SINGLE_EVENT,
  payload,
});
