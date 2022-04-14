import React from "react";
import "./home.scss";
import SideBar from "../../components/Sidebar/SideBar";
import NavBar from "../../components/Navbar/NavBar";
import Widgets from "../../components/Widgets/Widgets";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
