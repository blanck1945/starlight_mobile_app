import * as React from "react";
import Title_Header from "../characters/title_header/Title_Header";
import Option_item from "./Options_item/Option_item";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import Youtube_banner from "../home_header/youtube_banner/Youtube_banner";
import Game_btn from "./game_btn/Game_btn";
import Game_dis from "./Game_dis/Game_dis";
import { gameData, GameArray } from "../../utils/game_data";
import "./Game_Page.scss";

const Game_page = () => {
  const [value, setvalue] = React.useState<string>("Story");
  const [index, setIndex] = React.useState<number>(1);
  const [leftBtn, setLeftBtn] = React.useState<string>("Tips");
  const [rightBtn, setRightBtn] = React.useState<string>("Revues");

  const toogleMenu = (key: string, id: number) => {
    setvalue(key);
    setIndex(id);
  };

  const setBtnHeader = () => {
    const btn_left = gameData.filter((el: any) => el.id === index - 1);
    const btn_right = gameData.filter((el: any) => el.id === index + 1);

    if (value === "Story") {
      setLeftBtn("Tips");
      setRightBtn("Revues");
    } else if (value === "Growth") {
      setLeftBtn("Revues");
      setRightBtn("Story");
    } else {
      setLeftBtn(btn_left[0].type);
      setRightBtn(btn_right[0].type);
    }
  };

  React.useEffect(() => {
    setBtnHeader();
  }, [value]);

  return (
    <div className="game_page">
      <Title_Header label={"Game"} />
      <div className="game_box">
        <div className="game_option_bar">
          <Option_item
            label={"Story"}
            id={1}
            active={value === "Story" ? true : false}
            func={toogleMenu}
          />
          <Option_item
            label={"Revues"}
            id={2}
            active={value === "Revues" ? true : false}
            func={toogleMenu}
          />
          <Option_item
            label={"Growth"}
            id={3}
            active={value === "Growth" ? true : false}
            func={toogleMenu}
          />
          <Option_item label={"Vs.Revue"} id={4} active={false} />
          <Option_item label={"My Theater"} id={5} active={false} />
          <Option_item label={"Tips"} id={6} active={false} />
        </div>
        <div className="game_data_box">
          <Game_dis value={value} />
        </div>
        <div className="game_btn_box">
          <Game_btn label={leftBtn} Icon={IoMdArrowDropleft} left={true} />
          <Game_btn label={rightBtn} Icon={IoMdArrowDropright} right={true} />
        </div>
      </div>
      <Youtube_banner />
    </div>
  );
};

export default Game_page;
