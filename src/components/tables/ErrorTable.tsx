"use client";

interface Props {
  errors: any[];
}

export default function ErrorTable({
  errors
}: Props) {
  if (!errors.length) return null;

  return (
    <div
      className="
      mt-8
      rounded-[32px]
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      overflow-hidden
      "
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold">
          Validation Errors
        </h2>
      </div>

      <div className="max-h-[500px] overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-slate-900">
            <tr>
              <th className="p-4 text-left">Row</th>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Field</th>
              <th className="p-4 text-left">Error</th>
            </tr>
          </thead>

          <tbody>
            {errors.map((err, idx) => (
              <tr
                key={idx}
                className="border-t border-white/5"
              >
                <td className="p-4">
                  {err.row_number}
                </td>

                <td className="p-4">
                  {err.order_id}
                </td>

                <td className="p-4">
                  {err.field_name}
                </td>

                <td className="p-4 text-red-400">
                  {err.error_message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}