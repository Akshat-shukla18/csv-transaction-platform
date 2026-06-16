"use client";

import { downloadCsv }
from "@/lib/exporter";

interface Props {
  cleanData:any[];
  errors:any[];
}

export default function DownloadPanel({
  cleanData,
  errors
}:Props){

  if(
    !cleanData.length &&
    !errors.length
  ){
    return null;
  }

  return(
    <div
      className="
      mt-8
      flex
      gap-4
      "
    >

      <button
        onClick={()=>
          downloadCsv(
            "clean_transactions.csv",
            cleanData
          )
        }
        className="
        px-6
        py-3
        rounded-xl
       bg-gradient-to-r
from-cyan-500
to-cyan-700
shadow-lg
hover:scale-105
transition
        "
      >
        Download Clean CSV
      </button>

      <button
        onClick={()=>
          downloadCsv(
            "validation_errors.csv",
            errors
          )
        }
        className="
        px-6
        py-3
        rounded-xl
       bg-gradient-to-r
from-red-500
to-red-700
shadow-lg
hover:scale-105
transition
        "
      >
        Download Errors CSV
      </button>

    </div>
  );
}