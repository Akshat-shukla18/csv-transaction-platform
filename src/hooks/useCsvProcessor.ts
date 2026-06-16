"use client";

import { useState, useCallback } from "react";
import { parseCsv } from "@/lib/parser";
import { cleanTransactions } from "@/lib/cleaner";
import { validateTransactions } from "@/lib/validator";

export interface DashboardMetrics {
  totalRecords: number;
  validRecords: number;
  invalidRecords: number;
  countriesDetected: number;
  successRate: number;
  dataQualityScore: number;
  splitParts: number;
}

export function useCsvProcessor() {
  const [loading, setLoading] = useState(false);

  const [rawData, setRawData] = useState<any[]>([]);
  const [cleanData, setCleanData] = useState<any[]>([]);
  const [errors, setErrors] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [metrics, setMetrics] =
    useState<DashboardMetrics | null>(null);
const [hasUploaded, setHasUploaded] =
  useState(false);
  const processFile = useCallback(
    async (file: File) => {

      setLoading(true);

      try {
      setHasUploaded(true);
        const parsed = await parseCsv(file);

        setRawData(parsed);

        const cleanedResult =
          cleanTransactions(parsed);

        setStats(cleanedResult.stats);

        const validationResult =
          validateTransactions(
            cleanedResult.cleaned
          );

        setCleanData(
          validationResult.validRecords
        );

        setErrors(
          validationResult.errors
        );

        const total =
          cleanedResult.cleaned.length;

        const valid =
          validationResult.validRecords.length;

        const invalid = total - valid;

        const countries =
          new Set(
            cleanedResult.cleaned.map(
              (r) => r.country
            )
          ).size;

        const successRate =
          total > 0
            ? Number(
                ((valid / total) * 100)
                  .toFixed(2)
              )
            : 0;
            const splitParts =Math.ceil(valid / 1000);

     setMetrics({
  totalRecords: total,
  validRecords: valid,
  invalidRecords: invalid,
  countriesDetected: countries,
  successRate,
  dataQualityScore: successRate,
  splitParts
});

      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    loading,
    hasUploaded,
    processFile,
    rawData,
    cleanData,
    errors,
    stats,
    metrics
  };
}