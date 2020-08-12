import * as React from "react";
import Title_Header from "./title_header/Title_Header";
import Youtube_banner from "../home_header/youtube_banner/Youtube_banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const school = require("../../assets/school-header/ttl-seisho.png");
const karen = require("../../assets/profile_img/img-seisho-karen.png");
const hikari = require("../../assets/profile_img/img-seisho-hikari.png");
const mahiru = require("../../assets/profile_img/img-seisho-mahiru.png");
const tendou = require("../../assets/profile_img/img-seisho-maya.png");

import "./Characters.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState, CharaType } from "../../store/interface/interface";
import { fetchCharas, fetchSingleChara } from "../../store/axiosfunc/axiosfunc";

const Characters = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const charaState = useSelector((state: GlobalState) => state.charaReducer);

  const fetchSingle = (id: number) => {
    dispatch(fetchSingleChara(id));
    history.push("/single");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCharas());
  }, []);

  const schoolArr = [
    "An academy made with the purpose of fostering those with talent for performance.",
    "Has a proud history of 100 years. The school is divided into the Actor Training Department,",
    " in which students learn to be stage actresses, and the Stage Production Department, in which students learn how to work behind the scenes.",
  ];

  return (
    <div className="chara_box">
      <Title_Header label={"Characters"} />
      <div className="chara_school">
        <img src={school.default} alt="seijou" className="school_banner" />
        <div className="school_para">
          {schoolArr.map((el: any, index: number) => (
            <h3 className="para_text" key={index}>
              {el}
            </h3>
          ))}
        </div>
      </div>
      <div className="profile_chara">
        {charaState.charas.length !== 0 ? (
          charaState.charas.map((el: CharaType) => (
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              key={el.id}
            >
              <LazyLoadImage
                effect="blur"
                src={"assets/" + el.chara_profile_img}
                alt="karen"
                className="profile_img"
                onClick={() => fetchSingle(el.id)}
              />
            </motion.div>
          ))
        ) : (
          <h3>Nothing to Iterate</h3>
        )}
      </div>
      <Youtube_banner />
    </div>
  );
};

export default Characters;
