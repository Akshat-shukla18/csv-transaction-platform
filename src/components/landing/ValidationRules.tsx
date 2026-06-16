"use client";

import { CheckCircle2 } from "lucide-react";

const rules = [
  "Required Fields",
  "Country Validation",
  "Phone Validation",
  "Date Validation",
  "Duplicate Detection",
  "Amount Verification"
];

export default function ValidationRules() {

  return (
    <section className="mt-20">

      <h2 className="text-4xl font-bold mb-10">
        Validation Engine
      </h2>

      <div
        className="
        glass-card
        rounded-[32px]
        p-10
        "
      >

        <div className="grid md:grid-cols-2 gap-6">

          {rules.map(rule => (

            <div
              key={rule}
              className="flex gap-3 items-center"
            >
              <CheckCircle2
                className="text-green-400"
              />

              <span>{rule}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}