import React from "react";
import "./NavBar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder="...search"></input>
          <SearchRoundedIcon />
        </div>

        <div className="items">
          <div className="item">
            <LanguageRoundedIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon />
          </div>{" "}
          <div className="item">
            <NotificationsNoneOutlinedIcon />
          </div>{" "}
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
          </div>{" "}
          <div className="item">
            <FormatListBulletedOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
