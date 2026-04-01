import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { time: "12:00", events: 1 },
  { time: "12:01", events: 3 },
  { time: "12:02", events: 5 },
  { time: "12:03", events: 2 }
];

export default function TimelineChart() {
  return (
    <LineChart width={400} height={250} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="events" stroke="#00d4ff" />
    </LineChart>
  );
}