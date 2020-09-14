export interface EventType {
  id: number;
  event_name?: string;
  event_official_name?: string;
  event_header: string;
  event_date?: string;
  event_location: string;
  event_type: string;
  event_details: string[];
  event_details_2?: string[];
  event_details_header2_1?: string[];
  event_details_header2_2?: string[];
  event_details_header2_3?: string[];
  event_color: string;
  event_publish_day?: string;
  event_common_name?: string;
  event_day?: string;
  event_header_1?: string[];
  event_header_2?: string[];
  event_header_3: string[];
  event_headers: EventsHeaders;
  event_headers_label: EventHeadersLabel;
  event_paras: EventPara;
}

interface EventsHeaders {
  header_1?: string;
  header_2?: string;
  header_3?: string;
}

interface EventHeadersLabel {
  label_1?: string[];
  label_2?: string[];
  label_3?: string[];
}

interface EventPara {
  para_1?: string[];
  para_2?: string[];
  para_3?: string[];
  para_4?: string[];
  para_5?: string[];
  para_6?: string[];
  para_7?: string[];
  para_8?: string[];
  para_9?: string[];
  para_10?: string[];
}

export interface SchoolData {
  school_img: string;
  school_description: string[];
  photo_arr: SchoolArray;
}

interface SchoolArray {
  student_1?: string;
  student_2?: string;
  student_3?: string;
  student_4?: string;
  student_5?: string;
  student_6?: string;
  student_7?: string;
  student_8?: string;
  student_9?: string;
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
  chara_revue_img: number;
  chara_student_img: number;
}
export interface GameChara {
  id: number;
  chara_name: string;
  chara_hp: number;
  chara_attack: number;
  chara_magic: number;
  chara_defense: number;
  chara_magic_defense: number;
  chara_special_attack: string;
  chara_special_defense: number;
  chara_speed: number;
  chara_color: string;
  chara_spells: string[];
  chara_img: number;
}

export interface UserType {
  id: number;
  username: string;
  password: string;
  personal_user_code: number;
  role?: string;
}

export interface Photo {
  default: string;
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
  game_chara: GameChara[];
  single_game_chara: GameChara;
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
