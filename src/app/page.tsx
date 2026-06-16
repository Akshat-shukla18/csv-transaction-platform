"use client";
import { useState } from "react";
import CsvUploader from "@/components/upload/CsvUploader";
import StatsGrid from "@/components/dashboard/StatsGrid";
import CleaningStats from "@/components/dashboard/CleaningStats";
import DownloadPanel from "@/components/dashboard/DownloadPanel";
import Sidebar from "@/components/layout/Sidebar";

import ErrorTable from "@/components/tables/ErrorTable";
import PreviewTable from "@/components/tables/PreviewTable";

import ColumnSelectorModal
from "@/components/validation/ColumnSelectorModal";

import CountryChart from "@/components/charts/CountryChart";
import PaymentChart from "@/components/charts/PaymentChart";

import HeroStats from "@/components/landing/HeroStats";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import ValidationRules from "@/components/landing/ValidationRules";
import OutputGeneration from "@/components/landing/OutputGeneration";
import SampleCsv from "@/components/landing/SampleCsv";
import SplitDownload from "@/components/dashboard/SplitDownload";
import { useCsvProcessor } from "@/hooks/useCsvProcessor";

export default function HomePage() {
  const {
    loading,
    processFile,
    metrics,
    cleanData,
    errors,
    stats,
    hasUploaded,
  } = useCsvProcessor();

 


  const [uploadedFile,
setUploadedFile] =
useState<File | null>(null);

const [detectedColumns,
setDetectedColumns] =
useState<string[]>([]);

const [selectedColumns,
setSelectedColumns] =
useState<string[]>([]);

const [showModal,
setShowModal] =
useState(false);

 const [rowCount, setRowCount] =
  useState(0);

  const [requiredFields, setRequiredFields] =
  useState<string[]>([]);

  

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-indigo-950
      to-slate-950
      text-white
      p-8
    "
    >
     <Sidebar
  hasUploaded={hasUploaded}
/>
      <div
  className="
  ml-72
  max-w-7xl
  "
>

        {/* Header */}

        <div className="mb-8">
          <h1
            className="
            text-6xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-violet-400
            to-indigo-400
            bg-clip-text
            text-transparent
            "
          >
            CSV's Transaction
          </h1>

          <p className="text-zinc-400 mt-2">
            Transaction Validation & Processing Platform
          </p>
        </div>

        {/* Feature Banner */}

        {!hasUploaded && (
          <div
            className="
            glass-card
            rounded-[32px]
            p-6
            mb-8
            bg-gradient-to-r
            from-cyan-500/10
            via-violet-500/10
            to-indigo-500/10
            "
          >
            <h2 className="text-2xl font-bold">
              Clean • Validate • Analyze • Export
            </h2>

            <p className="text-zinc-400 mt-2">
              Upload transaction CSV files, automatically clean
              data, validate records, generate analytics,
              export validated datasets and split large files
              into downloadable chunks.
            </p>
          </div>
        )}

        {/* Upload Area */}
        <section id = "upload">
       <CsvUploader
  onFileSelect={async (
    file
  ) => {

    const text =
      await file.text();

      const lines =
  text.split("\n");

setRowCount(
  Math.max(
    lines.length - 1,
    0
  )
);

    const firstLine =
      text
        .split("\n")[0]
        .trim();

    const cols =
      firstLine
        .split(",")
        .map(c =>
          c.trim()
        );

    setUploadedFile(file);

    setDetectedColumns(
      cols
    );

    setSelectedColumns(
      cols
    );

    setShowModal(true);

  }}
/>
        </section>
        <ColumnSelectorModal
  isOpen={showModal}
  fileName={
    uploadedFile?.name ??
    ""
  }
  rowCount={
    rowCount
  }
  columns={
    detectedColumns
  }
  selectedColumns={
    selectedColumns
  }
  setSelectedColumns={
    setSelectedColumns
  }
  onProcess={() => {

    if (
      uploadedFile
    ) {

      processFile(
        uploadedFile
      );

      setShowModal(
        false
      );

    }

  }}
/>

        {/* Processing State */}

        {loading && (
          <div
            className="
            mt-6
            rounded-xl
            bg-white/5
            p-4
            "
          >
            Processing CSV...
          </div>
        )}

        {/* Landing Sections */}

        {!hasUploaded && (
          <>
            <HeroStats />

            <HowItWorks />

            <Features />

            <ValidationRules />

            <OutputGeneration />

            <SampleCsv />
          </>
        )}

        {/* Dashboard */}

        {hasUploaded && (
          <>
          <section id ="analytics">
            <div className="mt-8">
              <StatsGrid metrics={metrics} />
            </div>
                    <SplitDownload
  validRows={cleanData}
  invalidRows={[]}
/>

            <CleaningStats
              stats={stats}
            />
            </section>

<section id="distribution">
            <CountryChart
              rows={cleanData}
            />
  

            <PaymentChart
              rows={cleanData}
            />
            </section>

            <section id="preview">
  <PreviewTable
    rows={cleanData}
  />
</section>
<section
  id="downloads"
  className="mt-16"
>

  <h2
    className="
    text-3xl
    font-bold
    mb-6
    "
  >
    Export Results
  </h2>

  <DownloadPanel
    cleanData={cleanData}
    errors={errors}
  />

  

</section>
           <section id="errors">
  <ErrorTable
    errors={errors}
  />
   
</section>
          </>
        )}

      </div>
    </main>
  );
}