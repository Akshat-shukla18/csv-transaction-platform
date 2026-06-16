"use client";

interface Props {
  columns: string[];
  requiredFields: string[];
  setRequiredFields: (
    fields: string[]
  ) => void;
}

export default function
RequiredFieldSelector({
  columns,
  requiredFields,
  setRequiredFields,
}: Props) {

  const toggle = (
    column: string
  ) => {

    if (
      requiredFields.includes(
        column
      )
    ) {

      setRequiredFields(
        requiredFields.filter(
          f => f !== column
        )
      );

    } else {

      setRequiredFields([
        ...requiredFields,
        column,
      ]);

    }
  };

  return (
    <div
      className="
      glass-card
      rounded-[24px]
      p-6
      mt-6
      "
    >
      <h2
        className="
        text-xl
        font-semibold
        mb-4
        "
      >
        Required Fields
      </h2>

      <div
        className="
        grid
        md:grid-cols-4
        gap-3
        "
      >

        {columns.map(
          column => (

            <label
              key={column}
              className="
              flex
              items-center
              gap-2
              "
            >

              <input
                type="checkbox"
                checked={
                  requiredFields.includes(
                    column
                  )
                }
                onChange={() =>
                  toggle(column)
                }
              />

              {column}

            </label>

          )
        )}

      </div>
    </div>
  );
}