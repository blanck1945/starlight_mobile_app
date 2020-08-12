import Axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { http } from "../../utils/api";
import { setEvents, setSingleEvent } from "../actions/actions/eventsActions";
import { setServerRes, setUser } from "../actions/actions/utilsActions";
import { setCharas, setSingleChara } from "../actions/actions/charaActions";
import { CharaType, UserType } from "../interface/interface";

export const fetchEvents = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.api_events);
      dispatch(setServerRes(data));
      console.log(data.data);
      dispatch(setEvents(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSingleEvent = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.api_single_event + id);
      dispatch(setServerRes(data));
      dispatch(setSingleEvent(data.data));
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

//Characters axios functions

export const fetchCharas = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.api_express_charas);
      dispatch(setServerRes(data));
      dispatch(setCharas(data.data));
    } catch (err) {
      dispatch(setServerRes(err));
    }
  };
};

export const fetchSingleChara = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.api_single_chara + id);
      dispatch(setServerRes(data));
      dispatch(setSingleChara(data.data));
    } catch (err) {
      dispatch(setServerRes(err));
    }
  };
};

export const postChara = (charaData: CharaType) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios({
        method: "post",
        url: http.api_post_chara,
        data: charaData,
      });
      dispatch(setServerRes(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//Users Axios Functions

export const logUser = (user: UserType) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios({
        method: "post",
        url: http.api_log_user,
        data: user,
      });
      dispatch(setServerRes(data));
      window.localStorage.setItem("token", data.data);
      dispatch(setUser(data.data));
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};
