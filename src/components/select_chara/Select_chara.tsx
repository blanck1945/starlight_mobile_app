import * as React from "react";
import Carousel from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";
import "./Select_chara.scss";
import { studentArr } from "../../utils/student_photo";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGameChara,
  fetchSingleGameChara,
} from "../../store/axiosfunc/axios_dev-json";
import { GlobalState, GameChara } from "../../store/interface/interface";
import { useHistory } from "react-router-dom";

const Select_chara = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: GlobalState) => state.charaReducer);

  const history = useHistory();

  const [value, setValue] = React.useState<number>(0);
  const [selectChara, setSelectChara] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch(fetchGameChara());
  }, []);

  const enterTheGame = (id: number) => {
    console.log(id);
    dispatch(fetchSingleGameChara(id));
    history.push("/shoujo_game");
  };

  const getCharaStat = (chara_id: number) => {
    if (chara_id === 3) {
      setValue(0);
      console.log("this is the " + value);
      getCharaStat(value);
    }
    const data = gameState.game_chara.find(
      (el: GameChara) => el.id === chara_id + 1
    );

    return (
      <div className="single_chara_box">
        <span
          className="chara_stat stat_top red"
          style={{
            background: data.chara_color,
            borderBottom: data.chara_color,
          }}
        >
          {data.chara_name}
        </span>
        <span className="chara_stat" style={{ borderColor: data.chara_color }}>
          Chara HP:{data.chara_hp}
        </span>
        <span className="chara_stat" style={{ borderColor: data.chara_color }}>
          Chara Attack:{data.chara_attack}
        </span>
        <span className="chara_stat" style={{ borderColor: data.chara_color }}>
          Chara Defense:{data.chara_defense}
        </span>
        <span className="chara_stat" style={{ borderColor: data.chara_color }}>
          Chara Magic:{data.chara_magic}
        </span>
        <span className="chara_stat" style={{ borderColor: data.chara_color }}>
          Chara Magic Defense:{data.chara_magic_defense}
        </span>
        <span className="chara_stat" style={{ borderColor: data.chara_color }}>
          Chara Special Attack:{data.chara_special_attack}
        </span>
        <span className="chara_stat" style={{ borderColor: data.chara_color }}>
          Chara Special Defense:{data.chara_special_defense}
        </span>
        <span className="chara_stat" style={{ borderColor: data.chara_color }}>
          Chara Special Speed:{data.chara_speed}
        </span>
        <span
          className="chara_stat red"
          style={{
            background: data.chara_color,
            borderBottom: data.chara_color,
          }}
        >
          Spells
        </span>
        {data.chara_spells.map((el: string) => (
          <span
            className="chara_stat"
            style={{ borderColor: data.chara_color }}
          >
            {el}
          </span>
        ))}
      </div>
    );
  };

  const handleValue = (e: any) => {
    console.log(e);
    if (e === 4) {
      setValue(0);
    } else {
      setValue(e);
    }
  };

  return (
    <div className="select_chara">
      <div className="chara_stats_box">
        {gameState.game_chara !== undefined
          ? getCharaStat(value === 3 ? 0 : value)
          : null}
      </div>
      <Carousel
        arrows
        value={value}
        onChange={(e) => handleValue(e === 3 ? 0 : e)}
      >
        {studentArr.map((el: any, index: number) => (
          <img
            src={el.default}
            alt="chara"
            className={index === 0 ? "img_chara big" : "img_chara"}
          />
        ))}
      </Carousel>
      <div>
        <button className="enter_btn" onClick={() => enterTheGame(value)}>
          Enter the Arena
        </button>
      </div>
    </div>
  );
};

export default Select_chara;
