import * as utilsTypes from "../../ReduxTypes/utilsTypes";
import { ExpressResponse } from "../../interface/interface";

export interface GetPageTitle {
  type: typeof utilsTypes.SET_PAGE_TITLE;
  payload: string;
}

export interface GetServerRes {
  type: typeof utilsTypes.SET_SERVER_RES;
  payload: ExpressResponse;
}

export interface ChangeEditMode {
  type: typeof utilsTypes.CHANGE_EDIT_MODE;
  payload: string;
}

export interface LoginUser {
  type: typeof utilsTypes.LOGIN_USER;
  payload: ExpressResponse;
}

export type ServerActions =
  | GetPageTitle
  | GetServerRes
  | ChangeEditMode
  | LoginUser;
