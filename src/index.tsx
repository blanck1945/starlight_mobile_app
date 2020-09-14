import * as React from "react";
import * as reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/navbar";
import Home_header from "./components/home_header/Home_header";
import Characters from "./components/characters/Characters";
import Main_footer from "./components/home_header/main_footer/Main_footer";
import Chara_SIngle_page from "./components/chara_single_page/Chara_SIngle_page";
import News from "./components/news/News";
import Game_page from "./components/game_page/Game_page";

import { store } from "./store/store";
import { Provider, useSelector } from "react-redux";
import "./main.scss";
import Event_Single_Page from "./components/event_single_page/Event_Single_Page";
import { GlobalState } from "./store/interface/interface";
import Post_Page from "./components/post_page/Post_Page";
import Shoujo_Revue_Game from "./components/shoujo_revue_game/Shoujo_Revue_Game";
import Select_chara from "./components/select_chara/Select_chara";
const crown = require("./assets/utils-img/btn-switch-revue-visible-karen.png");

const App: React.FunctionComponent = () => {
  const state = useSelector((state: GlobalState) => state.serverReducer);

  React.useEffect(() => {
    window.document.title = state.page_title;
  }, [state.page_title]);

  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home_header />
        </Route>
        <Route path="/chara" component={Characters} />
        <Route path="/single" component={Chara_SIngle_page} />
        <Route path="/news" component={News} />
        <Route path="/game" component={Game_page} />
        <Route path="/single_event" component={Event_Single_Page} />
        <Route path="/post_page" component={Post_Page} />
        <Route path="/select_chara" component={Select_chara} />
        <Route path="/shoujo_game" component={Shoujo_Revue_Game} />
      </Switch>
      <Main_footer />
    </div>
  );
};

reactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
