interface Props {
  title: string;
  value: string | number;
}

export default function MetricCard({
  title,
  value
}: Props) {
  return (
    <div
      className="
      rounded-[32px]
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-6
      shadow-xl
    "
    >
      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );
}