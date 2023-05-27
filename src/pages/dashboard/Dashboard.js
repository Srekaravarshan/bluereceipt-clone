import "./Dashboard.css";

import React from "react";

import ChartLine from "../../components/charts/ChartLine";
import Topbar from "./topbar/Topbar";
import Summary from "./summary/Summary";
import Bottom from "./bottom/Bottom";

function Dashboard() {
 

  return (
    <div className="dashboard">
      <Topbar/>
      <Summary/>
      <div className="dashboard__chart">
        <ChartLine/>
      </div>
      <Bottom/>
    </div>
  );
}

export default Dashboard;
