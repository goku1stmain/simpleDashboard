import React from "react";
import "./SideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import DeliveryDiningSharpIcon from "@mui/icons-material/DeliveryDiningSharp";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"> Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2SharpIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ProductionQuantityLimitsSharpIcon className="icon" />
            <span>orders</span>
          </li>
          <li>
            <DeliveryDiningSharpIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsSharpIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveRoundedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <HealthAndSafetyRoundedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USERS</p>
          <li>
            <PeopleAltRoundedIcon className="icon" />
            <span>profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default SideBar;
