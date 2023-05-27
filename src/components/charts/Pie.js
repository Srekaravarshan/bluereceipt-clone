/* eslint-disable no-shadow */
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./Pie.css";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 134, color: "#0083ff" },
  { name: "B", value: 46, color: "#e0e6f4" },
];
const cx = 150;
const cy = 100;
const iR = 80;
const oR = 100;
const value = 130;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  //   const length = (iR + 2 * oR) / 3;
  const length = iR / 2;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    // <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
    <path
      d={`M${xba} ${yba} L${xbb} ${ybb} L 180.7115 74.3582 A 1 1 0 0 0 177 72 L 151.1698 101.7861`}
      stroke="#none"
      fill={color}
    />,
    <circle
      cx={x0}
      cy={y0}
      r={12}
      fill={color}
      stroke="white"
      strokeWidth="10"
    />,
  ];
};

export default class AmountChart extends PureComponent {
  render() {
    return (
      <div className="chart">
      <div className="semi-circle">
        <div className="dot dot__1" style={{rotate:`${22.5 * 0}deg`}}></div>
        <div className="dot dot__2" style={{rotate:`${22.5 * 1}deg`}}></div>
        <div className="dot dot__3" style={{rotate:`${22.5 * 2}deg`}}></div>
        <div className="dot dot__4" style={{rotate:`${22.5 * 3}deg`}}></div>
        <div className="dot dot__5" style={{rotate:`${22.5 * 4}deg`}}></div>
        <div className="dot dot__6" style={{rotate:`${22.5 * 5}deg`}}></div>
        <div className="dot dot__7" style={{rotate:`${22.5 * 6}deg`}}></div>
        <div className="dot dot__8" style={{rotate:`${22.5 * 7}deg`}}></div>
        <div className="dot dot__9" style={{rotate:`${22.5 * 8}deg`}}></div>
      </div>
        <div className="chart__pin" />
        <img src="/assets/arrow.svg" alt="" className="chart__arrow" />

        <PieChart width={300} height={120}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#e0e6f4"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {/* {needle(value, data, cx, cy, iR, oR, "#0083ff")} */}
        </PieChart>
      </div>
    );
  }
}
