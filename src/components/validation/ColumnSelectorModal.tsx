"use client";

interface Props {
  isOpen: boolean;
  fileName: string;
  rowCount: number;
  columns: string[];

  selectedColumns: string[];

  setSelectedColumns: (
    cols: string[]
  ) => void;

  onProcess: () => void;
}

export default function ColumnSelectorModal({
  isOpen,
  fileName,
  rowCount,
  columns,
  selectedColumns,
  setSelectedColumns,
  onProcess,
}: Props) {

  if (!isOpen) return null;

  const toggleColumn = (
    column: string
  ) => {

    if (
      selectedColumns.includes(
        column
      )
    ) {

      setSelectedColumns(
        selectedColumns.filter(
          c => c !== column
        )
      );

    } else {

      setSelectedColumns([
        ...selectedColumns,
        column
      ]);

    }
  };

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-[100]
      "
    >

      <div
        className="
        glass-card
        rounded-[32px]
        p-8
        w-full
        max-w-2xl
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          mb-4
          "
        >
          Configure Validation
        </h2>

        <div
          className="
          bg-white/5
          rounded-2xl
          p-4
          mb-6
          "
        >

          <p>
            <strong>File:</strong>{" "}
            {fileName}
          </p>

          <p>
            <strong>Rows:</strong>{" "}
            {rowCount}
          </p>

          <p>
            <strong>Columns:</strong>{" "}
            {columns.length}
          </p>

        </div>

        <h3
          className="
          text-lg
          font-semibold
          mb-3
          "
        >
          Select Required Columns
        </h3>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-3
          "
        >

          {columns.map(
            (column) => (

              <label
                key={column}
                className="
                flex
                items-center
                gap-2
                bg-white/5
                rounded-xl
                p-3
                cursor-pointer
                "
              >

                <input
                  type="checkbox"
                  checked={
                    selectedColumns.includes(
                      column
                    )
                  }
                  onChange={() =>
                    toggleColumn(
                      column
                    )
                  }
                />

                <span>
                  {column}
                </span>

              </label>

            )
          )}

        </div>

        <div
          className="
          flex
          gap-3
          mt-6
          "
        >

          <button
            onClick={() =>
              setSelectedColumns(
                columns
              )
            }
            className="
            px-4
            py-2
            rounded-xl
            bg-cyan-600
            "
          >
            Select All
          </button>

          <button
            onClick={() =>
              setSelectedColumns(
                []
              )
            }
            className="
            px-4
            py-2
            rounded-xl
            bg-red-600
            "
          >
            Clear All
          </button>

          <button
            onClick={onProcess}
            className="
            ml-auto
            px-6
            py-2
            rounded-xl
            bg-violet-600
            "
          >
            Process CSV
          </button>

        </div>

      </div>

    </div>
  );
}