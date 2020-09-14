import Axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { http } from "../../utils/api";
import { setEvents, setSingleEvent } from "../actions/actions/eventsActions";
import { selectChara, enterTheGame } from "../actions/actions/charaActions";

export const fetchAllEvents = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.api_all_json_event);
      dispatch(setEvents(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSingleDevEvent = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.api_single_json_event + id);
      dispatch(setSingleEvent(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchGameChara = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.api_game_chara);
      dispatch(selectChara(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSingleGameChara = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const data_id = id + 1;
      const { data } = await Axios.get(http.api_single_game_chara + data_id);
      dispatch(enterTheGame(data));
    } catch (err) {
      console.log(err);
    }
  };
};
