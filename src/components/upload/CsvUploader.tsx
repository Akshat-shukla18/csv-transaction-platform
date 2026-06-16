"use client";

import { Upload } from "lucide-react";
import { useRef } from "react";

interface Props {
  onFileSelect: (file: File) => void;
}

export default function CsvUploader({
  onFileSelect
}: Props) {

  const inputRef =
    useRef<HTMLInputElement>(null);

  const handleFile = (
    file: File
  ) => {

    if (
      file.type !==
      "text/csv"
    ) {
      alert(
        "Only CSV files allowed"
      );
      return;
    }

    onFileSelect(file);
  };

  return (
    <div
      className="
      glass-card
rounded-[32px]
border-2
border-dashed
border-cyan-500/30
p-20
text-center
cursor-pointer
transition-all
duration-300
hover:border-cyan-400
hover:scale-[1.01]
    "
      onClick={() =>
        inputRef.current?.click()
      }
      onDragOver={(e) =>
        e.preventDefault()
      }
      onDrop={(e) => {

        e.preventDefault();

        const file =
          e.dataTransfer.files[0];

        if (file) {
          handleFile(file);
        }
      }}
    >
      <Upload
        size={64}
 className="
 mx-auto
 text-cyan-400
 mb-6
      "
      />

      <h3 className="text-xl font-semibold">
        Upload CSV File
      </h3>

      <p className="text-zinc-400 mt-2">
        Drag & Drop or Click
      </p>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".csv"
        onChange={(e) => {

          const file =
            e.target.files?.[0];

          if (file)
            handleFile(file);
        }}
      />
    </div>
  );
}