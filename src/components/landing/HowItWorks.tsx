"use client";

import {
  Upload,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Download
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload CSV",
    desc: "Import transaction datasets securely."
  },
  {
    icon: Sparkles,
    title: "Clean Data",
    desc: "Normalize dates, phones and countries."
  },
  {
    icon: ShieldCheck,
    title: "Validate Records",
    desc: "Detect duplicates and invalid entries."
  },
  {
    icon: BarChart3,
    title: "Generate Analytics",
    desc: "Create charts and quality metrics."
  },
  {
    icon: Download,
    title: "Export Results",
    desc: "Download processed CSV outputs."
  }
];

export default function HowItWorks() {
  return (
    <section className="mt-16">

      <h2 className="text-4xl font-bold mb-10">
        How It Works
      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        {steps.map((step) => {

          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="
              glass-card
              rounded-[32px]
              p-6
              text-center
              hover:scale-105
              transition
              "
            >
              <div
                className="
                h-16
                w-16
                mx-auto
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-violet-500
                flex
                items-center
                justify-center
                mb-4
                "
              >
                <Icon size={28} />
              </div>

              <h3 className="font-bold">
                {step.title}
              </h3>

              <p className="text-zinc-400 text-sm mt-2">
                {step.desc}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}