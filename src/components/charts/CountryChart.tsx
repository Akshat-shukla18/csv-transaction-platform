"use client";
import PaymentChart
from "@/components/charts/PaymentChart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CountryChart({
  rows
}:{
  rows:any[]
}){

  const map =
    rows.reduce(
      (acc,row)=>{
        acc[row.country] =
          (acc[row.country] || 0)+1;
        return acc;
      },
      {} as Record<string,number>
    );

  const data =
    Object.entries(map).map(
      ([country,count])=>({
        country,
        count
      })
    );

  if(!data.length)
    return null;

  return(
    <div
      className="
      rounded-[32px]
      bg-white/5
      p-6
      mt-8
      "
    >
      <h2 className="mb-4">
        Country Distribution
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <XAxis dataKey="country"/>
            <YAxis/>
            <Tooltip/>
           <Bar
 dataKey="count"
 fill="#06b6d4"
 radius={[10,10,0,0]}
/>
          </BarChart>
        </ResponsiveContainer>
        

      </div>
    </div>
  );
}