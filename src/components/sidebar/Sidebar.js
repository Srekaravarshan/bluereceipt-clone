import "./Sidebar.css";
import "font-awesome/css/font-awesome.min.css";

import React from "react";
import { SidebarData } from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://assets.website-files.com/6076eab79e12ed151f2a03f6/6076eec561cd5d0f52ca83f8_Branding.svg"
          loading="lazy"
          alt=""
          className="sidebar__logo"
        ></img>
        <div className="sidebar__scroll">
          <FontAwesomeIcon className="sidebar__search--icon" icon={faSearch} />
          <input className="sidebar__search" type="text" />
          <ul className="sidebar__items">
            <li className="sidebar__item sidebar__item--selected">
              <Link to="/">
                <FontAwesomeIcon
                  className="sidebar__item--icon"
                  icon={faHouse}
                />
                <span className="sidebar__item--title">Dashboard</span>
              </Link>
            </li>
            <div className="sidebar__divider"></div>
            {SidebarData.map((item, index) => {
              return (
                <li className="sidebar__item" key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="sidebar__item--title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sidebar__profile">
        <img className="sidebar__profile--img" src="/profile.png" alt="" />

        <div className="sidebar__profile--col">
          <h1 className="sidebar__profile--name">Oguz Yagiz Kara</h1>
          <h5 className="sidebar__profile--sub">Store Name</h5>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
