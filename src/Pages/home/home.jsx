import React from "react";
import "./home.scss";
import SideBar from "../../components/Sidebar/SideBar";
import NavBar from "../../components/Navbar/NavBar";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        homeContainer
      </div>
    </div>
  );
};

export default Home;
