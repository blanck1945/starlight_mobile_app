import * as charaTypes from "../ReduxTypes/charaTypes";
import { CharaState } from "../interface/interface";
import { CharaActions } from "../actions/interfaces/charaInterfaces";

const charaInitialState: CharaState = {
  charas: [],
  single_chara: undefined,
};

export default (state = charaInitialState, action: CharaActions) => {
  switch (action.type) {
    case charaTypes.GET_ALL_CHARAS:
      return {
        ...state,
        charas: action.payload,
      };
    case charaTypes.GET_SINGLE_CHARA:
      return {
        ...state,
        single_chara: action.payload,
      };
    case charaTypes.CLEAN_SINGLE_CHARA:
      return {
        ...state,
        single_chara: undefined,
      };
    case charaTypes.POST_CHARA:
      return {
        ...state,
        charas: [...state.charas, action.payload],
      };

    default:
      return state;
  }
};
