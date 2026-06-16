import Papa from "papaparse";

export function parseCsv(file: File) {
  return new Promise<any[]>((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,

      complete: (results) => {
        resolve(results.data);
      },

      error: (err) => {
        reject(err);
      }
    });
  });
}