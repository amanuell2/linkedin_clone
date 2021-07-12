import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1504080732612-a30435d38d96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://media-exp3.licdn.com/dms/image/C4D03AQGZ9WzxpEx-7g/profile-displayphoto-shrink_100_100/0/1609764219245?e=1631145600&v=beta&t=MxQ80etyUZoL8Zv8a1GI1ijgSDA9wbwiNx1_F127Sq0"
        />

        <h2>Amanuel Tadesse</h2>
        <h4>Frontend Developer at Bluechips</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">226</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed your posts</p>
          <p className="sidebar__statNumber">77</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React js")}
        {recentItem("Programming")}
        {recentItem("Software enginnering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
