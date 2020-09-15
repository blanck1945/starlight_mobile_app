import * as globalTypes from "../../ReduxTypes/globalTypes";

export const fetchAllData = (payload: any) => ({
  type: globalTypes.FETCH_ALL_DATA,
  payload,
});
