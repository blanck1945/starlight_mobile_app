import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../../../store/actions/actions/utilsActions";
import { GlobalState } from "../../../store/interface/interface";

interface PageNavProps {
  label1: string;
  label2: string;
  label3?: string;
  extra?: boolean;
  query?: string;
}

const Page_nav = ({ label1, label2, label3, extra, query }: PageNavProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="form_btn"
        onClick={() => dispatch(setEditMode(label1))}
      >
        {label1}
      </button>
      <button
        className={
          query === "Characters" ? "form_btn active_form_btn" : "form_btn"
        }
        onClick={() => dispatch(setEditMode(label2))}
      >
        {label2}
      </button>
      {extra === true && (
        <button
          className="form_btn"
          onClick={() => dispatch(setEditMode(label3))}
        >
          {label3}
        </button>
      )}
    </>
  );
};

export default Page_nav;
