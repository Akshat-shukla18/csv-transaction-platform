import { FIELD_ALIASES }
from "@/config/fieldAliases";

export function normalizeRecord(
  record: Record<string, any>
) {

  const normalized: Record<
    string,
    any
  > = {};

  Object.entries(
    FIELD_ALIASES
  ).forEach(
    ([target, aliases]) => {

      const found =
        Object.keys(record)
          .find(key =>
            aliases.includes(
              key.toLowerCase()
            )
          );

      if (found) {
        normalized[target] =
          record[found];
      }

    }
  );

  return normalized;
}