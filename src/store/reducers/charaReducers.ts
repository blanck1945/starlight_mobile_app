import * as charaTypes from "../ReduxTypes/charaTypes";
import { CharaState, GameChara, CharaType } from "../interface/interface";
import { CharaActions } from "../actions/interfaces/charaInterfaces";

const charaInitialState: CharaState = {
  charas: [],
  single_chara: undefined,
  game_chara: undefined,
  single_game_chara: undefined,
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
        single_chara: state.charas.find((el: CharaType) =>
          el.id === action.payload ? { ...el } : null
        ),
      };
    case charaTypes.CLEAN_SINGLE_CHARA:
      return {
        ...state,
        single_chara: undefined,
      };
    case charaTypes.SELECT_CHARA:
      return {
        ...state,
        game_chara: action.payload,
      };
    case charaTypes.ENTER_THE_GAME:
      return {
        ...state,
        single_game_chara: action.payload,
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
