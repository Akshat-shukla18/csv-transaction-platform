export function formatDate(date: string): string {
  const d = new Date(date);

  if (isNaN(d.getTime())) {
    return date;
  }

  return d.toISOString().split("T")[0];
}

export function formatTime(time: string): string {
  const d = new Date(`1970-01-01T${time}`);

  if (isNaN(d.getTime())) {
    return time;
  }

  return d.toTimeString().split(" ")[0];
}