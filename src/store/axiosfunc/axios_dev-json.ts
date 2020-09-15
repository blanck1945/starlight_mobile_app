import Axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { http } from "../../utils/api";
import { setEvents, setSingleEvent } from "../actions/actions/eventsActions";
import {
  selectChara,
  enterTheGame,
  setCharas,
} from "../actions/actions/charaActions";
import { fetchAllData } from "../actions/globalActions/actions";

export const fetchAllDataFromJson = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(
        "https://json-starlight-3x2g4tzky.vercel.app/db.json"
      );
      console.log(data);
      dispatch(fetchAllData(data));
      dispatch(setEvents(data.events));
      dispatch(setCharas(data.chara));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fecthAllCharas = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.api_chara);
      dispatch(setCharas(data));
    } catch (err) {
      console.log(err);
    }
  };
};

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
