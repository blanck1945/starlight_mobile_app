import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Chara_Single_Page.scss";
import Youtube_banner from "../home_header/youtube_banner/Youtube_banner";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState, Photo, CharaType } from "../../store/interface/interface";
import { cleanSingleChara } from "../../store/actions/actions/charaActions";
import { revueArr, studentArr } from "../../utils/student_photo";
import { Link } from "react-router-dom";
import { fetchSingleDevChara } from "../../store/axiosfunc/axiosfunc";

const flower = require("../../assets/utils-img/btn-switch-uniform-visible-karen.png");
const crown = require("../../assets/utils-img/btn-switch-revue-visible-karen.png");

const Chara_SIngle_page = () => {
  const dispatch = useDispatch();
  const [img, setImg] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const charaState = useSelector((state: GlobalState) => state.charaReducer);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    return () => dispatch(cleanSingleChara());
  }, []);

  const getRevuePhoto = () => {
    const photo: any = revueArr.find(
      (el: any, index: number) =>
        index === charaState?.single_chara?.chara_revue_img
    );

    return photo.default;
  };

  const getStudentPhoto = () => {
    const photo: any = studentArr.find(
      (el: any, index: number) =>
        index === charaState?.single_chara?.chara_student_img
    );
    return photo.default;
  };

  const consoleId = (id: number) => {
    if (id === 0) {
      dispatch(fetchSingleDevChara(6));
    } else if (id === 7) {
      dispatch(fetchSingleDevChara(1));
    } else {
      dispatch(fetchSingleDevChara(id));
    }
  };

  return (
    <div className="chara_single_div">
      {charaState.single_chara ? (
        <div
          className="chara_single_page"
          style={{ background: charaState.single_chara.chara_color }}
        >
          <h4 className="single_overlay">
            {charaState.single_chara.chara_name}
          </h4>
          <div className="chara_data">
            <div className="data_top">
              <img src={flower.default} alt="flower" className="flower_logo" />
              <div className="top_school">
                <h4>{charaState.single_chara.chara_school}</h4>
                <h4>
                  Actor Training Department Student Number{" "}
                  {charaState.single_chara.chara_student_id}
                </h4>
              </div>
            </div>
            <div className="data_center">
              <h3 className="center_name">
                {charaState.single_chara.chara_name}
              </h3>
              <h4 className="center_voice">
                Voice: {charaState.single_chara.chara_voice}
              </h4>
              <div className="img_btn_box">
                <img
                  src={crown.default}
                  alt="crown"
                  onClick={() => setImg(true)}
                  className="img_btn"
                />
                <span>--</span>
                <img
                  src={flower.default}
                  onClick={() => {
                    setLoading(true);
                    setImg(false);
                    setLoading(false);
                  }}
                  alt="flower"
                  className="img_btn"
                />
              </div>
              <div className="chara_description_box">
                {charaState.single_chara?.chara_description?.map(
                  (el: string) => (
                    <h3 className="description_item">{el}</h3>
                  )
                )}
              </div>
            </div>
          </div>
          <motion.div
            className="chara_img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LazyLoadImage
              effect="blur"
              src={
                charaState.single_chara !== undefined && img === true
                  ? getRevuePhoto()
                  : getStudentPhoto()
              }
              className={loading ? "profile_img opa" : "profile_img"}
            />
          </motion.div>
        </div>
      ) : (
        <div className="chara_single_page"></div>
      )}
      <div className="next_box">
        <span
          className="box_span"
          onClick={() => consoleId(charaState.single_chara.id - 1)}
        >
          <IoIosArrowBack className="next_icon icon_left" />
          Back
        </span>
        <Link to="/chara" className="box_span links">
          List
        </Link>
        <span
          className="box_span right"
          onClick={() => consoleId(charaState.single_chara.id + 1)}
        >
          Next
          <IoIosArrowForward className="next_icon icon_right" />
        </span>
      </div>
      <Youtube_banner />
    </div>
  );
};

export default Chara_SIngle_page;
