import MetricCard from "./MetricCard";

export default function StatsGrid({
  metrics
}: {
  metrics: any;
}) {

  if (!metrics) return null;

  return (
    <>
   <section className="
glass-card
rounded-[32px]
p-6
mb-8
">

  <h2
    className="
    text-sm
    uppercase
    tracking-widest
    text-cyan-400
    mb-4
    "
  >
    Record Summary
  </h2>

  <div
    className="
    grid
    md:grid-cols-3
    gap-6
    "
  >

    <MetricCard
      title="Total Records"
      value={metrics.totalRecords}
    />

    <MetricCard
      title="Valid Records"
      value={metrics.validRecords}
    />

    <MetricCard
      title="Invalid Records"
      value={metrics.invalidRecords}
    />

  </div>
</section>
<section className="
glass-card
rounded-[32px]
p-6
mb-8
">

  <h2
    className="
    text-sm
    uppercase
    tracking-widest
    text-violet-400
    mb-4
    "
  >
    Data Quality
  </h2>

  <div
    className="
    grid
    md:grid-cols-3
    gap-6
    "
  >

    <MetricCard
      title="Countries"
      value={metrics.countriesDetected}
    />

    <MetricCard
      title="Success Rate"
      value={`${metrics.successRate}%`}
    />

    <MetricCard
      title="Quality Score"
      value={`${metrics.dataQualityScore}%`}
    />

  </div>

</section>




 
</>
  );
}