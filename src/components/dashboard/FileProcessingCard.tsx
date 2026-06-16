"use client";

import { useMemo } from "react";

interface Props {
  validRows: any[];
  invalidRows: any[];
}

export default function FileProcessingCard({
  validRows,
  invalidRows,
}: Props) {

  const splitSize = 1000;

  const validParts =
    Math.ceil(
      validRows.length /
      splitSize
    );

  const invalidParts =
    Math.ceil(
      invalidRows.length /
      splitSize
    );

  return (
    <div
      className="
      glass-card
      rounded-[32px]
      p-6
      "
    >

      <h2
        className="
        text-xl
        font-bold
        mb-4
        "
      >
        File Processing
      </h2>

      <div className="space-y-3">

        <div>
          Split Size
        </div>

        <select
          className="
          bg-white/10
          px-4
          py-3
          rounded-xl
          "
        >
          <option>
            500
          </option>

          <option>
            1000
          </option>

          <option>
            2000
          </option>

          <option>
            5000
          </option>
        </select>

        <div className="pt-4">

          Valid Files:
          {" "}
          {validParts}

        </div>

        <div>

          Invalid Files:
          {" "}
          {invalidParts}

        </div>

      </div>

    </div>
  );
}