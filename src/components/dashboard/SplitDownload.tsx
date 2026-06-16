"use client";

import { useState } from "react";
import Papa from "papaparse";
import { splitRecords } from "@/lib/splitter";

interface Props {
  validRows: any[];
  invalidRows?: any[];
}

export default function SplitDownload({
  validRows = [],
  invalidRows = [],
}: Props) {

  const [splitSize, setSplitSize] =
    useState(1000);

  const handleValidDownload = () => {

    const chunks =
      splitRecords(
        validRows,
        splitSize
      );

    chunks.forEach(
      (chunk, index) => {

        const csv =
          Papa.unparse(chunk);

        const blob =
          new Blob(
            [csv],
            {
              type: "text/csv",
            }
          );

        const url =
          URL.createObjectURL(blob);

        const link =
          document.createElement("a");

        link.href = url;

        link.download =
          `valid_part_${index + 1}.csv`;

        document.body.appendChild(
          link
        );

        link.click();

        document.body.removeChild(
          link
        );

        URL.revokeObjectURL(
          url
        );

      }
    );
  };

  const handleInvalidDownload =
    () => {

      if (
        !invalidRows.length
      ) {
        return;
      }

      const chunks =
        splitRecords(
          invalidRows,
          splitSize
        );

      chunks.forEach(
        (chunk, index) => {

          const csv =
            Papa.unparse(chunk);

          const blob =
            new Blob(
              [csv],
              {
                type:
                  "text/csv",
              }
            );

          const url =
            URL.createObjectURL(
              blob
            );

          const link =
            document.createElement(
              "a"
            );

          link.href = url;

          link.download =
            `invalid_part_${index + 1}.csv`;

          document.body.appendChild(
            link
          );

          link.click();

          document.body.removeChild(
            link
          );

          URL.revokeObjectURL(
            url
          );

        }
      );
    };

  const validParts =
    Math.max(
      1,
      Math.ceil(
        validRows.length /
          splitSize
      )
    );

  const invalidParts =
    invalidRows.length > 0
      ? Math.ceil(
          invalidRows.length /
            splitSize
        )
      : 0;

  return (
    <div
      className="
      glass-card
      rounded-[32px]
      p-6
      mt-6
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        File Processing
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        "
      >

        <div
          className="
          bg-white/5
          rounded-2xl
          p-4
          "
        >
          <p className="text-zinc-400">
            Split Size
          </p>

          <select
            value={splitSize}
            onChange={(e) =>
              setSplitSize(
                Number(
                  e.target.value
                )
              )
            }
            className="
            mt-3
            w-full
            bg-white/10
            rounded-xl
            p-3
            "
          >
            <option value={500}>
              500 Rows
            </option>

            <option value={1000}>
              1000 Rows
            </option>

            <option value={2000}>
              2000 Rows
            </option>

            <option value={5000}>
              5000 Rows
            </option>

          </select>

        </div>

        <div
          className="
          bg-white/5
          rounded-2xl
          p-4
          "
        >
          <p className="text-zinc-400">
            Valid Chunks
          </p>

          <p
            className="
            text-3xl
            font-bold
            mt-2
            "
          >
            {validParts}
          </p>

          <p className="text-xs text-zinc-500 mt-2">
            Based on
            {" "}
            {validRows.length}
            {" "}
            records
          </p>

        </div>

        <div
          className="
          bg-white/5
          rounded-2xl
          p-4
          "
        >
          <p className="text-zinc-400">
            Invalid Chunks
          </p>

          <p
            className="
            text-3xl
            font-bold
            mt-2
            "
          >
            {invalidParts}
          </p>

          <p className="text-xs text-zinc-500 mt-2">
            Based on
            {" "}
            {invalidRows.length}
            {" "}
            records
          </p>

        </div>

      </div>

      <div
        className="
        flex
        flex-wrap
        gap-4
        mt-8
        "
      >

        <button
          onClick={
            handleValidDownload
          }
          className="
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          hover:scale-105
          transition
          "
        >
          Download Valid CSVs
        </button>

        <button
          onClick={
            handleInvalidDownload
          }
          disabled={
            invalidRows.length ===
            0
          }
          className="
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-red-500
          to-orange-600
          disabled:opacity-50
          hover:scale-105
          transition
          "
        >
          Download Invalid CSVs
        </button>

      </div>

    </div>
  );
}