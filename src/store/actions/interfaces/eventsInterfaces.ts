import * as eventTypes from "../../ReduxTypes/eventTypes";
import { EventType } from "../../interface/interface";

export interface GetEvents {
  type: typeof eventTypes.GET_EVENTS;
  payload: EventType[];
}

export interface GetSingleEvent {
  type: typeof eventTypes.GET_SINGLE_EVENT;
  payload: EventType;
}

export type EventActions = GetEvents | GetSingleEvent;
