"use client";

const features = [
  "CSV Upload",
  "Data Cleaning",
  "Validation Engine",
  "Analytics Dashboard",
  "Error Management",
  "CSV Splitting"
];

export default function Features() {

  return (
    <section className="mt-20">

      <h2 className="text-4xl font-bold mb-10">
        Platform Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {features.map((feature) => (

          <div
            key={feature}
            className="
            glass-card
            rounded-[32px]
            p-8
            hover:border-cyan-500/30
            transition
            "
          >
            <h3 className="text-xl font-semibold">
              {feature}
            </h3>

            <p className="text-zinc-400 mt-3">
              Enterprise-grade processing
              and reporting capability.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}