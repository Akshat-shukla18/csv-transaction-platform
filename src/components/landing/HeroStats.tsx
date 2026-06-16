"use client";

const stats = [
  "5000+ Rows",
  "100+ Row Split",
  "Locations",
  " Validation Rules"
];

export default function HeroStats() {

  return (
    <div
      className="
      grid
      md:grid-cols-4
      gap-6
      mt-12
      "
    >

      {stats.map((item) => (

        <div
          key={item}
          className="
          glass-card
          rounded-[24px]
          p-6
          text-center
          "
        >
          <h3
            className="
            text-2xl
            font-bold
            text-cyan-400
            "
          >
            {item}
          </h3>
        </div>

      ))}

    </div>
  );
}