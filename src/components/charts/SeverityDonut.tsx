import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Critical", value: 4 },
  { name: "High", value: 6 },
  { name: "Medium", value: 3 },
  { name: "Low", value: 2 }
];

const COLORS = ["#ff3b3b", "#ff6b35", "#ffb020", "#00c48c"];

export default function SeverityDonut() {
  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={80}
        label
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}