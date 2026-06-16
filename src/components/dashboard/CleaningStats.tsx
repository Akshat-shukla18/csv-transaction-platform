"use client";

export default function CleaningStats({
  stats
}:{
  stats:any
}) {

  if(!stats)
    return null;

  return (
    <div
      className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-4
      mt-8
      "
    >

      <div className="rounded-3xl bg-white/5 p-6">
        <p>Phone Fixed</p>
        <h2>{stats.phone_fixed_count}</h2>
      </div>

      <div className="rounded-3xl bg-white/5 p-6">
        <p>Country Fixed</p>
        <h2>{stats.country_fixed_count}</h2>
      </div>

      <div className="rounded-3xl bg-white/5 p-6">
        <p>Date Fixed</p>
        <h2>{stats.date_fixed_count}</h2>
      </div>

      <div className="rounded-3xl bg-white/5 p-6">
        <p>Time Fixed</p>
        <h2>{stats.time_fixed_count}</h2>
      </div>

    </div>
  );
}