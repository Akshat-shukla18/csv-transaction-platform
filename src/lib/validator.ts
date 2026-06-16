import { PHONE_RULES } from "@/data/phoneRules";

const REQUIRED_FIELDS = [
  "order_id",
  "product_id",
  "quantity",
  "price",
  "total_amount",
  "country",
  "phone",
  "date",
  "time"
];

export function validateTransactions(records: any[]) {

  const errors: any[] = [];
  const validRecords: any[] = [];

  const seenOrders = new Set();

  records.forEach((record, index) => {

    let valid = true;

    REQUIRED_FIELDS.forEach(field => {

      if (
        record[field] === undefined ||
        record[field] === null ||
        record[field] === ""
      ) {
        valid = false;

        errors.push({
          row_number: index + 1,
          order_id: record.order_id || "",
          field_name: field,
          error_message: "Missing required field"
        });
      }
    });

    if (seenOrders.has(record.order_id)) {

      valid = false;

      errors.push({
        row_number: index + 1,
        order_id: record.order_id,
        field_name: "order_id",
        error_message: "Duplicate order_id"
      });

    } else {
      seenOrders.add(record.order_id);
    }

    const phoneLength =
      PHONE_RULES[record.country];

    if (
      phoneLength &&
      String(record.phone).length !== phoneLength
    ) {

      valid = false;

      errors.push({
        row_number: index + 1,
        order_id: record.order_id,
        field_name: "phone",
        error_message: "Invalid phone length"
      });
    }

    if (
      record.quantity * record.price !==
      record.total_amount
    ) {

      valid = false;

      errors.push({
        row_number: index + 1,
        order_id: record.order_id,
        field_name: "total_amount",
        error_message: "Amount mismatch"
      });
    }

    if (valid) {
      validRecords.push(record);
    }
  });

  return {
    validRecords,
    errors
  };
}