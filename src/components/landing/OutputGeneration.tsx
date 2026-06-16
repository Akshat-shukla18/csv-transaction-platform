"use client";

import {
  FileCheck,
  FileWarning,
  SplitSquareVertical
} from "lucide-react";

export default function OutputGeneration() {
  return (
    <section className="mt-20">

      <h2 className="text-4xl font-bold mb-10">
        Output Generation
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div
          className="
          glass-card
          rounded-[32px]
          p-8
          "
        >
          <FileCheck
            size={40}
            className="text-green-400 mb-4"
          />

          <h3 className="text-xl font-semibold">
            Clean Output File
          </h3>

          <p className="text-zinc-400 mt-3">
            Generate a cleaned and validated
            transaction dataset containing
            only approved records.
          </p>

          <div
            className="
            mt-4
            text-cyan-400
            font-medium
            "
          >
            clean_transactions.csv
          </div>

        </div>

        <div
          className="
          glass-card
          rounded-[32px]
          p-8
          "
        >
          <FileWarning
            size={40}
            className="text-red-400 mb-4"
          />

          <h3 className="text-xl font-semibold">
            Error Report
          </h3>

          <p className="text-zinc-400 mt-3">
            Detailed validation report
            containing row numbers,
            fields and error messages.
          </p>

          <div
            className="
            mt-4
            text-red-400
            font-medium
            "
          >
            validation_errors.csv
          </div>

        </div>

        <div
          className="
          glass-card
          rounded-[32px]
          p-8
          "
        >
          <SplitSquareVertical
            size={40}
            className="text-violet-400 mb-4"
          />

          <h3 className="text-xl font-semibold">
            Automatic CSV Splitting
          </h3>

          <p className="text-zinc-400 mt-3">
            Files larger than 1000 records
            are automatically split into
            manageable chunks.
          </p>

          <div
            className="
            mt-4
            text-violet-400
            font-medium
            "
          >
            transactions_part_1.csv
          </div>

        </div>

      </div>

    </section>
  );
}