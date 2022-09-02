import React from "react";
import "./head.scss";
import logo from "../assets/logo.svg";
import noti from "../assets/noti.svg";
import home from "../assets/home.svg";
import menu from "../assets/main.svg";

const Head = () => {
  return (
    <div className="head">
      <img src={logo} alt="logo"></img>
      <div className="head-title">Restoner</div>
      <input
        className="head-search"
        type="text"
        placeholder="Buscar negocio"
      ></input>
      <div className="icon">
        <img src={home} alt="home"></img>
      </div>
      <div className="icon">
        <img src={menu} alt="menu"></img>
      </div>
      <div className="icon">
        <img src={noti} alt="noti"></img>
      </div>
    </div>
  );
};

export default Head;
