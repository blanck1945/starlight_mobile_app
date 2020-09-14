import * as React from "react";
import { motion } from "framer-motion";
const karen_sprite = require("../../assets/chara-img/Karen/karen_revue.png");
//const fireball = require("../../assets/magic/fireball_single.jpg");
const fireball_sprite = require("../../assets/magic/fireball_trans.png");

import "./Shoujo_Revue_Game.scss";
import { GlobalState } from "../../store/interface/interface";
import { useSelector } from "react-redux";
import { revueArr } from "../../utils/student_photo";

const Shoujo_Revue_Game = () => {
  const [attack, setAttack] = React.useState<boolean>(false);
  const [magic, setMagic] = React.useState<boolean>(false);
  const [fireball, setFireBall] = React.useState<boolean>(false);
  const [fireballAction, setFireBallAction] = React.useState<boolean>(false);

  const gameState = useSelector((state: GlobalState) => state.charaReducer);

  const charaAttack = () => {
    setAttack(true);
    setTimeout(() => {
      setAttack(false);
    }, 1000);
  };

  const summonFireball = () => {
    setMagic(false);
    setFireBall(true);
    setTimeout(() => {
      setFireBallAction(true);
    }, 1800);
    setTimeout(() => {
      setFireBall(false);
      setFireBallAction(false);
    }, 2900);
  };

  const getSprite = () => {
    const data: any = revueArr.find(
      (el: any, index: number) => index + 1 === gameState.single_game_chara.id
    );
    return data.default;
  };

  console.log(gameState);
  console.log(gameState.single_game_chara ? gameState.single_game_chara : null);

  return (
    <div className="shoujo_revue_game">
      <div className="shoujo_arena top">
        <div className="arena">
          <div className={attack ? "attack" : "static"}>
            <img
              src={gameState.single_game_chara ? getSprite() : null}
              alt="sprite"
              className="sprite"
            />
            {fireball ? (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src={fireball_sprite.default}
                alt="fireball"
                className={
                  fireballAction ? "magic magic_action" : "magic opacity"
                }
              ></motion.img>
            ) : null}
          </div>
        </div>
        <div className="chara_stats">
          <div className="stats_box">
            <h5 className="stat_item" onClick={() => charaAttack()}>
              Attack
            </h5>
            <h5 className="stat_item" onClick={() => setMagic(true)}>
              Magic
            </h5>
            <h5 className="stat_item">Special</h5>
            <h5 className="stat_item">Item</h5>
          </div>
          {magic ? (
            <div className="magic_menu">
              <h4 className="chara_magic" onClick={() => summonFireball()}>
                Fireball
              </h4>
              <h4 className="magic_text" onClick={() => setMagic(false)}>
                back
              </h4>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Shoujo_Revue_Game;
