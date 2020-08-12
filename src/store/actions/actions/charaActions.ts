import * as charaTypes from "../../ReduxTypes/charaTypes";
import { CharaType } from "../../interface/interface";

export const setCharas = (payload: CharaType) => ({
  type: charaTypes.GET_ALL_CHARAS,
  payload,
});

export const setSingleChara = (payload: CharaType) => ({
  type: charaTypes.GET_SINGLE_CHARA,
  payload,
});

export const cleanSingleChara = () => ({
  type: charaTypes.CLEAN_SINGLE_CHARA,
});

export const addChara = (payload: CharaType) => ({
  type: charaTypes.POST_CHARA,
  payload,
});
