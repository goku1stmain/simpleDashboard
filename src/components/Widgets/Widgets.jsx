import React from "react";
import "./Widgets.scss";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const Widgets = ({ type }) => {
  let data;
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">21322</span>
        <span className="link">see all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessOutlinedIcon />
          20%
        </div>
        <PersonOutlineOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Widgets;
