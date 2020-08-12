import * as utilsTypes from "../../ReduxTypes/utilsTypes";

export const setPageTitle = (payload: any) => ({
  type: utilsTypes.SET_PAGE_TITLE,
  payload,
});

export const setServerRes = (payload: any) => ({
  type: utilsTypes.SET_SERVER_RES,
  payload,
});

export const setEditMode = (payload: string) => ({
  type: utilsTypes.CHANGE_EDIT_MODE,
  payload,
});

export const setUser = (payload: string) => ({
  type: utilsTypes.LOGIN_USER,
  payload,
});
