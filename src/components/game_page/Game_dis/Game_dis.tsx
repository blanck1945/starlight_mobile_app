import * as React from "react";

import { gameData, GameArray } from "../../../utils/game_data";
import Image_item from "../Image_item/Image_item";

interface GameDisProps {
  value: string;
}

const Game_dis = ({ value }: GameDisProps) => {
  const data = gameData.filter((el: GameArray) => el.type === value);

  return (
    <div className="game_dis">
      {data.map((el: GameArray, index: number) => (
        <div key={index}>
          <Image_item img={el.header1} img_alt={"img"} header={true} />
          <Image_item img={el.photo_1} img_alt={"img"} text={el.text1} />
          <Image_item img={el.header2} img_alt={"img"} header={true} />
          <Image_item img={el.photo_2} img_alt={"img"} text={el.text2} />
          <Image_item img={el.header3} img_alt={"img"} header={true} />
          <Image_item img={el.photo_3} img_alt={"img"} text={el.text3} />
          <Image_item img={el.header4} img_alt={"img"} header={true} />
          <Image_item img={el.photo_4} img_alt={"img"} text={el.text4} />
          <Image_item img={el.header5} img_alt={"img"} header={true} />
          <Image_item img={el.photo_5} img_alt={"img"} text={el.text5} />
        </div>
      ))}
    </div>
  );
};

export default Game_dis;
