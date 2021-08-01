import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";
function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className="HeaderOption" onClick={onClick}>
      {Icon && <Icon className="HeaderOption__icon" />}
      {avatar && (
        <Avatar className="HeaderOption__icon" src={user?.photoURL}></Avatar>
      )}
      <h3 className="HeaderOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
