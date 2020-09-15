import * as charaTypes from "../../ReduxTypes/charaTypes";
import { CharaType, GameChara } from "../../interface/interface";

export const setCharas = (payload: CharaType) => ({
  type: charaTypes.GET_ALL_CHARAS,
  payload,
});

export const setSingleChara = (payload: number) => ({
  type: charaTypes.GET_SINGLE_CHARA,
  payload,
});

export const selectChara = (payload: GameChara) => ({
  type: charaTypes.SELECT_CHARA,
  payload,
});

export const enterTheGame = (payload: GameChara) => ({
  type: charaTypes.ENTER_THE_GAME,
  payload,
});

export const cleanSingleChara = () => ({
  type: charaTypes.CLEAN_SINGLE_CHARA,
});

export const addChara = (payload: CharaType) => ({
  type: charaTypes.POST_CHARA,
  payload,
});
