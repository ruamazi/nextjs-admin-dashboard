"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import s from "./chart.module.css";

const Chart = () => {
  const data = [
    {
      name: "Mon",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Tue",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Wed",
      visit: 2000,
      click: 9800,
    },
    {
      name: "Thu",
      visit: 2780,
      click: 3908,
    },
    {
      name: "Fri",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Sat",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Sun",
      visit: 3490,
      click: 4300,
    },
  ];

  return (
    <div className={s.container}>
      <h2 className={s.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#0000006b", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
