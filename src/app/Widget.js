import "./Widget.css";
import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import { FiberManualRecord } from "@material-ui/icons";
const Widget = () => {
  const newArticle = (heading, subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
  return (
    <div className="Widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newArticle("Coding night", "sample project for Coding night")}
      {newArticle("GDA Addis", "sample project for Coding night")}
      {newArticle("Demo Coding night", "sample project for Coding night")}
      {newArticle("Amanuel is back", "sample project for Coding night")}
    </div>
  );
};

export default Widget;
