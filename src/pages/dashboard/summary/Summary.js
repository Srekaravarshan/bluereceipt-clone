import React from 'react'
import './Summary.css'

function Summary() {
    var summaryData = [
        {
          title: "Total Revenue",
          amount: "$32,621.72",
          subtitle: "433 Orders",
          change: "+12.5%",
          positive: true,
        },
        {
          title: "Subscribers",
          amount: "484,205",
          subtitle: "$56 Average Orders",
          change: "+32.5%",
          positive: true,
        },
        {
          title: "Conversations",
          amount: "552,553",
          subtitle: "5min Average Response time",
          change: "-3.4%",
          positive: false,
        },
        {
          title: "Popup Conversion Rate",
          amount: "25%",
          subtitle: "5% Sales Conversion Rate",
          change: "+32.5%",
          positive: true,
        },
      ];
    
  return (
    <div className="dashboard__summary">
        {summaryData.map((item, index) => (
          <div className="summary" key={index}>
            <h2 className={"summary__title"+(item.positive?"":" negative")}>
              {item.title}
              <span>{item.change}</span>
            </h2>
            <h1 className="summary__amount">{item.amount}</h1>
            <h5 className="summary__subtitle">{item.subtitle}</h5>
          </div>
        ))}
      </div>
  )
}

export default Summary