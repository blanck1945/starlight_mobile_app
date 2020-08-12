import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postChara } from "../../../store/axiosfunc/axiosfunc";
import { CharaType } from "../../../store/interface/interface";

const Post_Character = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit, reset } = useForm();
  const submit = (values: any) => submitForm(values);

  const submitForm = (values: any) => {
    const postData: CharaType = {
      id: 55,
      chara_name: values.chara_name,
      chara_school: values.chara_school,
      chara_voice: values.chara_voice,
      chara_club: values.chara_club,
      chara_color: values.chara_color,
      chara_student_id: parseInt(values.chara_student_id),
      chara_description: values.chara_description,
      chara_profile_img: values.chara_profile_img[0].name,
      chara_revue_img: values.chara_revue_img[0].name,
      chara_student_img: values.chara_student_img[0].name,
    };
    dispatch(postChara(postData));
    reset();
  };

  return (
    <form className="post_form" onSubmit={handleSubmit(submit)}>
      <h3>Post Character to DB</h3>
      <div className="form_div">
        <label className="form_label">Character Name</label>
        <input
          type="text"
          placeholder="Chara Name"
          name="chara_name"
          ref={register}
          className="form_inp"
        />
      </div>
      <div className="form_div">
        <label className="form_label">Character School</label>
        <select name="chara_school" className="form_inp" ref={register}>
          <option value="Seisho Music Academy 99th Class">
            Seisho Music Academy 99th Class
          </option>
          <option value="Rinmeikan Girls School">Rinmeikan Girls School</option>
          <option value="Frontier School of Arts">
            Frontier School of Arts
          </option>
          <option value="Siegfeld Institute of Music">
            Siegfeld Institute of Music
          </option>
        </select>
      </div>
      <div className="form_div">
        <label className="form_label">Character Club</label>
        <select name="chara_club" className="form_inp" ref={register}>
          <option value="Actor Training Department Student Number">
            Actor Training Department Student Number
          </option>
          <option value="Performance Department ">
            Performance Department{" "}
          </option>
          <option value="Stage Expression Course">
            Stage Expression Course
          </option>
          <option value="Acting Department">Acting Department</option>
        </select>
      </div>
      <div className="form_div">
        <label className="form_label">Character Grade/Id</label>
        <input
          className="form_inp"
          type="text"
          name="chara_student_id"
          placeholder="Grade/Id"
          ref={register}
        />
      </div>
      <div className="form_div">
        <label className="form_label">Character Voice</label>
        <input
          type="text"
          className="form_inp"
          placeholder="Character Voice"
          name="chara_voice"
          ref={register}
        />
      </div>
      <div className="form_div">
        <label className="form_label">Character Color Code</label>
        <input
          type="text"
          placeholder="Color Code"
          name="chara_color"
          className="form_inp"
          ref={register}
        />
      </div>
      <div className="form_div">
        <label className="form_label">Character Profile Image</label>
        <input
          type="file"
          name="chara_profile_img"
          className="form_inp file_load"
          ref={register}
        />
      </div>
      <div className="form_div">
        <label className="form_label">Character Revue Image</label>
        <input
          type="file"
          name="chara_revue_img"
          className="form_inp file_load"
          ref={register}
        />
      </div>
      <div className="form_div">
        <label className="form_label">Character Student Image</label>
        <input
          type="file"
          name="chara_student_img"
          className="form_inp file_load"
          ref={register}
        />
      </div>
      <div className="form_div">
        <textarea
          name="chara_description"
          className="form_text"
          ref={register}
        ></textarea>
      </div>
      <div className="form_btn_box">
        <button className="form_btn" onClick={() => reset()}>
          Reset
        </button>
        <button className="form_btn">Post</button>
      </div>
    </form>
  );
};

export default Post_Character;
