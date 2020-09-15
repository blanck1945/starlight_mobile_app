import { combineReducers } from "redux";
import eventReducer from "./eventsReducers";
import serverReducer from "./utilsReducer";
import charaReducer from "./charaReducers";
import globalReducer from "./globalReducer";

export default combineReducers({
  eventReducer,
  charaReducer,
  serverReducer,
  global: globalReducer,
});
