export interface EventType {
  id: number;
  event_name: string;
  event_header: string;
  event_date: string;
  event_location: string;
  event_type: string;
  event_details: string[];
  event_color: string;
}

export interface CharaType {
  id: number;
  chara_name: string;
  chara_school: string;
  chara_student_id: number;
  chara_club: string;
  chara_voice: string;
  chara_description: string[];
  chara_color: string;
  chara_profile_img: string;
  chara_revue_img: string;
  chara_student_img: string;
}

export interface UserType {
  id: number;
  username: string;
  password: string;
  personal_user_code: number;
  role?: string;
}

export interface ExpressResponse {
  state: string;
  provider: string;
  application: string;
  msg: string;
  data?: any;
  query?: string | number;
  window_title: string;
}

export interface CharaState {
  charas: CharaType[];
  single_chara: CharaType;
}

export interface UtilsState {
  page_title: string;
  server_res: ExpressResponse;
  edit_mode: undefined | string;
  token: number;
}

export interface EventState {
  events: EventType[];
  single_event: EventType;
}

export interface GlobalState {
  eventReducer: EventState;
  charaReducer: CharaState;
  serverReducer: UtilsState;
}
