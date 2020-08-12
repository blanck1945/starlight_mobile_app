import * as React from "react";
import { useForm } from "react-hook-form";

import "./login.scss";
import { UserType, GlobalState } from "../../../store/interface/interface";
import { useDispatch, useSelector } from "react-redux";
import { logUser } from "../../../store/axiosfunc/axiosfunc";

const Login = () => {
  const dispatch = useDispatch();
  const { register, errors, reset, handleSubmit } = useForm();
  const submit = (values: any) => sendUser(values);
  const state = useSelector((state: GlobalState) => state.serverReducer);

  const sendUser = (values: UserType) => {
    console.log(values);
    const user = {
      ...values,
    };

    dispatch(logUser(user));
  };

  return (
    <div className="login_form">
      <form className="post_form" onSubmit={handleSubmit(submit)}>
        <h3 className="form_header">Please Login to use the DB</h3>
        <div className="form_div">
          <label className="form_label">Username</label>
          <input
            type="text"
            className="form_inp"
            placeholder="Username"
            ref={register}
            name="username"
          />
        </div>
        <div className="form_div">
          <label className="form_label">Password</label>
          <input
            type="password"
            className="form_inp"
            placeholder="Password"
            ref={register}
            name="password"
          />
        </div>
        <div className="form_div">
          <label className="form_label">Personal Code Number</label>
          <input
            type="text"
            className="form_inp"
            placeholder="Persona Code Number"
            ref={register}
            name="personal_user_code"
          />
        </div>
        {state?.server_res?.msg !== undefined && state.token === 0 ? (
          <div className="error_div">
            <h3 className="error_text">{state.server_res.msg}</h3>
          </div>
        ) : null}
        <button className="form_btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
