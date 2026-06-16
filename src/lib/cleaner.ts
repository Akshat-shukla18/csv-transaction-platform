import { cleanPhone } from "@/utils/phone";
import { normalizeCountry } from "@/utils/country";
import { formatDate, formatTime } from "@/utils/date";

export function cleanTransactions(records: any[]) {

  const stats = {
    phone_fixed_count: 0,
    country_fixed_count: 0,
    date_fixed_count: 0,
    time_fixed_count: 0
  };

  const cleaned = records.map(record => {

    const oldPhone = record.phone;
    const oldCountry = record.country;
    const oldDate = record.date;
    const oldTime = record.time;

    record.phone = cleanPhone(String(record.phone));
    record.country = normalizeCountry(String(record.country));
    record.date = formatDate(String(record.date));
    record.time = formatTime(String(record.time));

    if (oldPhone !== record.phone)
      stats.phone_fixed_count++;

    if (oldCountry !== record.country)
      stats.country_fixed_count++;

    if (oldDate !== record.date)
      stats.date_fixed_count++;

    if (oldTime !== record.time)
      stats.time_fixed_count++;

    return record;
  });

  return {
    cleaned,
    stats
  };
}