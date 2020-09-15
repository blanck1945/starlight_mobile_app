import * as charaTypes from "../../ReduxTypes/charaTypes";
import { CharaType, GameChara } from "../../interface/interface";

export interface GetAllProfile {
  type: typeof charaTypes.GET_ALL_PROFILES;
  payload: any;
}

export interface GetAllCharas {
  type: typeof charaTypes.GET_ALL_CHARAS;
  payload: CharaType[];
}

export interface SelectGameChara {
  type: typeof charaTypes.SELECT_CHARA;
  payload: GameChara[];
}

export interface StartTheGame {
  type: typeof charaTypes.ENTER_THE_GAME;
  payload: GameChara;
}

export interface GetSingleChara {
  type: typeof charaTypes.GET_SINGLE_CHARA;
  payload: number;
}

export interface DestroySingleChara {
  type: typeof charaTypes.CLEAN_SINGLE_CHARA;
}

export interface PostChara {
  type: typeof charaTypes.POST_CHARA;
  payload: CharaType;
}

export type CharaActions =
  | StartTheGame
  | SelectGameChara
  | GetAllProfile
  | GetAllCharas
  | GetSingleChara
  | DestroySingleChara
  | PostChara;
