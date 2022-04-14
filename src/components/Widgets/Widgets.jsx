import React from "react";
import "./Widgets.scss";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
const Widgets = ({ type }) => {
  let data;
  if (type === "user") {
    data = {
      title: "user",
      isMoney: false,
      link: "see all users",
      icon: (
        <PersonOutlineOutlinedIcon
          className="icon"
          style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
        />
      ),
    };
  } else if (type === "earnings") {
    data = {
      title: "Earnings",
      isMoney: true,
      link: "view net earnings",
      icon: (
        <MonetizationOnOutlinedIcon
          className="icon"
          style={{ color: "green", backgroundColor: "#3cff0033" }}
        />
      ),
    };
  } else if (type === "order") {
    data = {
      title: "Orders",
      isMoney: false,
      link: "View all orders",
      icon: (
        <ShoppingBagOutlinedIcon
          className="icon"
          style={{ color: "goldenrod", backgroundColor: "#d6b61433" }}
        />
      ),
    };
  } else if (type === "balance") {
    data = {
      title: "Balance",
      isMoney: true,
      link: "See details",
      icon: (
        <AccountBalanceOutlinedIcon
          className="icon"
          style={{ color: "purple", backgroundColor: "#bf14ce33" }}
        />
      ),
    };
  } else {
    return;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}1000</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessOutlinedIcon />
          {100}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
