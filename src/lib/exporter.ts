import Papa from "papaparse";

export function downloadCsv(
  filename: string,
  data: any[]
) {

  const csv =
    Papa.unparse(data);

  const blob =
    new Blob(
      [csv],
      { type: "text/csv" }
    );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    filename;

  link.click();

  URL.revokeObjectURL(url);
}