import MetricCard from "./MetricCard";

export default function StatsGrid({
  metrics
}: {
  metrics: any;
}) {

  if (!metrics) return null;

  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-3
      xl:grid-cols-6
      gap-4
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

      <MetricCard
  title="Split Files"
  value={metrics.splitParts}
/>
    </div>
  );
}