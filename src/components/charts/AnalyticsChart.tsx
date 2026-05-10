import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Mon",
    xp: 50,
  },
  {
    day: "Tue",
    xp: 80,
  },
  {
    day: "Wed",
    xp: 120,
  },
  {
    day: "Thu",
    xp: 150,
  },
  {
    day: "Fri",
    xp: 200,
  },
];

export default function AnalyticsChart() {
  return (
    <div
      className="
        h-64
        rounded-3xl
        bg-white
        p-4
        shadow-sm
      "
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={data}>
          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="xp"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}