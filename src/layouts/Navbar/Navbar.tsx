import * as React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const logo = require("../../assets/nav/logo.jpg");

const Navbar = () => {
  const [scroll, setScroll] = React.useState<number>(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset);
    };
  }, [scroll]);

  return (
    <div className={scroll < 75 ? "navbar" : "navbar small_nav"}>
      <div
        className={
          scroll === 0 ? "white_overlay" : "white_overlay small_overlay"
        }
      >
        <div>
          <img src={logo.default} alt="logo" className="logo"></img>
        </div>
        <div className="nav_item_box">
          <NavLink to="" className="nav_item">
            Home
          </NavLink>
          <NavLink to="/news" className="nav_item">
            News
          </NavLink>
          <NavLink to="/game" className="nav_item">
            Game
          </NavLink>
          <NavLink to="/chara" className="nav_item">
            Characters
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

///          src="https://static.zerochan.net/Shoujo%E2%98%86Kageki.Revue.Starlight.-ReLIVE-.full.2553649.png"
