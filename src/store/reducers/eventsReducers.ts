import * as eventTypes from "../ReduxTypes/eventTypes";
import { EventState, EventType } from "../interface/interface";
import { EventActions } from "../actions/interfaces/eventsInterfaces";

const initialState: EventState = {
  events: [],
  single_event: undefined,
};

export default (state = initialState, action: EventActions) => {
  switch (action.type) {
    case eventTypes.GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case eventTypes.GET_SINGLE_EVENT:
      return {
        ...state,
        single_event: state.events.find(
          (el: EventType) => el.id === action.payload
        ),
      };

    default:
      return state;
  }
};
