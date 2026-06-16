export function splitRecords(
  records: any[],
  chunkSize = 1000
) {
  const chunks = [];

  for (
    let i = 0;
    i < records.length;
    i += chunkSize
  ) {
    chunks.push(
      records.slice(i, i + chunkSize)
    );
  }

  return chunks;
}