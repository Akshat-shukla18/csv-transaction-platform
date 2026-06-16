"use client";

import Papa from "papaparse";
import { splitRecords } from "@/lib/splitter";

interface Props {
  rows: any[];
}

export default function SplitDownload({
  rows,
}: Props) {

  if (rows.length <= 1000) {
    return null;
  }

  const handleDownload = () => {

    const chunks =
      splitRecords(rows, 1000);

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
          `transactions_part_${index + 1}.csv`;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
      }
    );
  };

  const totalParts = Math.ceil(
    rows.length / 1000
  );

  return (
    <div
      className="
      glass-card
      rounded-[24px]
      p-6
      mt-6
      "
    >
      <h3 className="text-xl font-semibold">
        Large File Detected
      </h3>

      <p className="text-zinc-400 mt-2">
        {rows.length.toLocaleString()} valid
        records will be split into
        {` ${totalParts} `}
        downloadable files.
      </p>

      <button
        onClick={handleDownload}
        className="
        mt-4
        px-6
        py-3
        rounded-xl
        bg-gradient-to-r
        from-violet-500
        to-indigo-600
        hover:scale-105
        transition
        "
      >
        Download Split Files
      </button>
    </div>
  );
}