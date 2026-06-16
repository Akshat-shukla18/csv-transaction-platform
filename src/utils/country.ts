export function normalizeCountry(country: string): string {
  return country
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

