import * as React from "react";
import Title_Header from "./title_header/Title_Header";
import Youtube_banner from "../home_header/youtube_banner/Youtube_banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { SeijouSchool, RinmeikanSchool } from "../../utils/photo_arr";

import "./Characters.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { setSingleChara } from "../../store/actions/actions/charaActions";
import { GlobalState, CharaType } from "../../store/interface/interface";
import { fetchAllDataFromJson } from "../../store/axiosfunc/axios_dev-json";

const Characters = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const charaState = useSelector((state: GlobalState) => state.charaReducer);
  console.log(charaState.charas);

  const fetchSingle = async (id: number) => {
    await dispatch(setSingleChara(id));

    history.push("/single");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (charaState.charas.length === 0) {
      dispatch(fetchAllDataFromJson());
    }
    document.title = "Characters | Shoujo Kageki Revue Starlight";
  }, []);

  return (
    <div className="chara_box">
      <Title_Header label={"Characters"} />
      <div className="chara_school top">
        <img
          src={SeijouSchool.school_img}
          alt="seijou"
          className="school_banner"
        />
        <div className="school_para">
          {SeijouSchool.school_description.map((el: string, index: number) => (
            <h3 className="para_text" key={index}>
              {el}
            </h3>
          ))}
        </div>
      </div>
      <div className="profile_chara">
        {Object.values(SeijouSchool.photo_arr).length !== 0 ? (
          Object.values(SeijouSchool.photo_arr).map(
            (el: any, index: number) => (
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                key={el.default}
              >
                <LazyLoadImage
                  effect="blur"
                  src={el.default}
                  alt="karen"
                  className="profile_img"
                  onClick={() => fetchSingle(index + 1)}
                />
              </motion.div>
            )
          )
        ) : (
          <h3>Nothing to Iterate</h3>
        )}
      </div>
      <div className="chara_school">
        <img
          src={RinmeikanSchool.school_img}
          alt="seijou"
          className="school_banner"
        />
        <div className="school_para">
          {RinmeikanSchool.school_description.map(
            (el: string, index: number) => (
              <h3 className="para_text" key={index}>
                {el}
              </h3>
            )
          )}
        </div>
      </div>
      <div className="profile_chara">
        {Object.values(RinmeikanSchool.photo_arr).length !== 0 ? (
          Object.values(RinmeikanSchool.photo_arr).map(
            (el: any, index: number) => (
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                key={el.default}
                className="motion_div"
              >
                <LazyLoadImage
                  effect="blur"
                  src={el.default}
                  alt="karen"
                  className={
                    index === 3 || index === 4
                      ? "profile_img z-in"
                      : "profile_img"
                  }
                  onClick={() => fetchSingle(index + 1)}
                />
              </motion.div>
            )
          )
        ) : (
          <h3>Nothing to Iterate</h3>
        )}
      </div>
      <Youtube_banner />
    </div>
  );
};

export default Characters;
