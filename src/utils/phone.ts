export function cleanPhone(phone: string): string {
  return phone
    .replace(/\+91/g, "")
    .replace(/\+65/g, "")
    .replace(/[- ]/g, "")
    .replace(/\D/g, "");
}

