import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../store/interface/interface";

import "./Post_Page.scss";
import "./Post_Form.scss";
import { setEditMode } from "../../store/actions/actions/utilsActions";
import Page_nav from "./page_nav/page_nav";
import Post_Character from "./post_character/post_character";
import Login from "./login/login";

const Post_Page = ({}) => {
  const state = useSelector((state: GlobalState) => state.serverReducer);
  const [token, setToken] = React.useState<string>(undefined);

  React.useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, [state.token]);

  console.log(token);

  return (
    <div className="post_page">
      <div className="post_page_nav">
        {state.edit_mode === "Back" && (
          <Page_nav label1={"Characters"} label2={"Events"} />
        )}
        {state.edit_mode === "Characters" && (
          <Page_nav
            label1={"Back"}
            label2={"Post"}
            label3={"Modified"}
            extra={true}
            query={state.edit_mode}
          />
        )}
        {state.edit_mode === "Events" && (
          <Page_nav
            label1={"Back"}
            label2={"Post"}
            label3={"Modified"}
            extra={true}
            query={state.edit_mode}
          />
        )}
      </div>
      <div className="post_dis">
        {state.edit_mode === "Back" && (
          <div className={token === null ? "post_home" : "post_log"}>
            {token === null ? (
              <Login />
            ) : (
              <h3 className="post_header">
                Welcome to the Starlight DB Interface
              </h3>
            )}
          </div>
        )}
        {state.edit_mode === "Characters" && <Post_Character />}
        {state.edit_mode === "Events" && <h3>Event Edit mode</h3>}
      </div>
    </div>
  );
};

export default Post_Page;
