import React from 'react'
import './Topbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  return (
    <div className="dashboard__topbar">
        <div className="dashboard__topbar--left">
          <div className="dashboard__profile">
            <span className="dashboard__profile--notification">5</span>
            <img
              className="dashboard__profile--img"
              src="/profile.png"
              alt=""
            />
          </div>

          <div className="dashboard__greeting">
            <h1 className="dashboard__greeting--title">Good Morning Oguz</h1>
            <h5 className="dashboard__greeting--sub">
              Here are your stats for Today, 24 Aug 2020
            </h5>
          </div>
        </div>
        <div className="dashboard__actions">
          <button className="dashboard__action">
            <FontAwesomeIcon
              className="dashboard__action--icon dashboard__icon--left"
              icon={faCalendar}
            />
            Today
          </button>
          <h5 className="dashboard__actions--sub">compared to</h5>
          <button className="dashboard__action">
            Today
            <FontAwesomeIcon
              className="dashboard__action--icon dashboard__icon--right"
              icon={faAngleDown}
            />
          </button>
        </div>
      </div>
  )
}

export default Topbar