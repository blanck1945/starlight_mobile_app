import * as charaTypes from "../../ReduxTypes/charaTypes";
import { CharaType } from "../../interface/interface";

export interface GetAllCharas {
  type: typeof charaTypes.GET_ALL_CHARAS;
  payload: CharaType[];
}

export interface GetSingleChara {
  type: typeof charaTypes.GET_SINGLE_CHARA;
  payload: CharaType;
}

export interface DestroySingleChara {
  type: typeof charaTypes.CLEAN_SINGLE_CHARA;
}

export interface PostChara {
  type: typeof charaTypes.POST_CHARA;
  payload: CharaType;
}

export type CharaActions =
  | GetAllCharas
  | GetSingleChara
  | DestroySingleChara
  | PostChara;
