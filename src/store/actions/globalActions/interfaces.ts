import * as globalTypes from "../../ReduxTypes/globalTypes";

interface GET_ALL_DATA {
  type: typeof globalTypes.FETCH_ALL_DATA;
  payload: any;
}

export type GlobalActions = GET_ALL_DATA;
