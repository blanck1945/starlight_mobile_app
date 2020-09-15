import * as globalTypes from "../ReduxTypes/globalTypes";
import { GlobalActions } from "../actions/globalActions/interfaces";

const initialState: any = {
  data: undefined,
};

export default (state = initialState, action: GlobalActions) => {
  switch (action.type) {
    case globalTypes.FETCH_ALL_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
