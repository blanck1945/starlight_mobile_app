import * as utilsTypes from "../ReduxTypes/utilsTypes";
import { UtilsState } from "../interface/interface";
import { ServerActions } from "../actions/interfaces/utilsinterface";

const utilsInitialState: UtilsState = {
  page_title: "Shoujo Kageki Revue Starlight",
  server_res: undefined,
  edit_mode: "Back",
  token: 0,
};

export default (state = utilsInitialState, action: ServerActions) => {
  switch (action.type) {
    case utilsTypes.SET_PAGE_TITLE:
      return {
        ...state,
        page_title: action.payload,
      };
    case utilsTypes.SET_SERVER_RES:
      return {
        ...state,
        page_title: action.payload.window_title,
        server_res: action.payload,
      };
    case utilsTypes.CHANGE_EDIT_MODE:
      return {
        ...state,
        edit_mode: action.payload,
      };
    case utilsTypes.LOGIN_USER:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
