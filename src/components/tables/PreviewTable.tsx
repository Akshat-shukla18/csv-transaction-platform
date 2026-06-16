"use client";

import { useMemo, useState } from "react";

interface Props {
  rows: any[];
}

export default function PreviewTable({
  rows
}: Props) {

  const [search, setSearch] =
    useState("");

  const [country, setCountry] =
    useState("");

  const countries = useMemo(
    () =>
      Array.from(
        new Set(
          rows.map(
            (r) => r.country
          )
        )
      ),
    [rows]
  );

  const filtered = useMemo(
    () =>
      rows
        .filter((r) =>
          search
            ? String(r.order_id)
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true
        )
        .filter((r) =>
          country
            ? r.country === country
            : true
        )
        .slice(0, 100),
    [rows, search, country]
  );

  if (!rows.length) return null;

  return (
    <div
      className="
      mt-8
      rounded-[32px]
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      p-6
      "
    >
      <h2 className="text-xl font-semibold mb-4">
        Data Preview
      </h2>

      <div className="flex gap-4 mb-4">

        <input
          placeholder="Search order id..."
          className="
          bg-slate-900
          rounded-xl
          px-4
          py-2
          "
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
        />

        <select
          className="
          bg-slate-900
          rounded-xl
          px-4
          py-2
          "
          value={country}
          onChange={(e)=>
            setCountry(e.target.value)
          }
        >
          <option value="">
            All Countries
          </option>

          {countries.map((c)=>(
            <option
              key={c}
              value={c}
            >
              {c}
            </option>
          ))}
        </select>

      </div>

      <div className="overflow-auto max-h-[500px]">

        <table className="w-full">
          <thead
            className="
            sticky
            top-0
            bg-slate-900
            "
          >
            <tr>
              {(filtered.length > 0
  ? Object.keys(filtered[0])
  : []).map((key)=>(
                <th
                  key={key}
                  className="
                  p-3
                  text-left
                  "
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.map(
              (row,index)=>(
                <tr
                  key={index}
                  className="
                  border-t
                  border-white/5
                  "
                >
                  {Object.values(row).map(
                    (value,i)=>(
                      <td
                        key={i}
                        className="p-3"
                      >
                        {String(value)}
                      </td>
                    )
                  )}
                </tr>
              )
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
}