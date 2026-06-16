"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#8b5cf6",
  "#6366f1",
  "#14b8a6"
];

export default function PaymentChart({
  rows
}:{
  rows:any[]
}) {

  const counts =
    rows.reduce(
      (acc,row)=>{

        const mode =
          row.payment_mode || "Unknown";

        acc[mode] =
          (acc[mode] || 0) + 1;

        return acc;

      },
      {} as Record<string,number>
    );

  const data =
    Object.entries(counts).map(
      ([name,value])=>({
        name,
        value
      })
    );

  if(!data.length)
    return null;

  return (
    <div
      className="
      rounded-[32px]
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      p-6
      mt-8
      "
    >
      <h2 className="text-xl mb-4">
        Payment Mode Distribution
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {data.map(
                (_,index)=>(
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                        COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
            <Legend />

          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}