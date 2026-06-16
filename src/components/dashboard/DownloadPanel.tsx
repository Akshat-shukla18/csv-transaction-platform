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
  mt-10
  flex
  gap-8
  flex-wrap
  "
>

  {/* Clean CSV Button */}
  <div
    className="
    p-[3px]
    rounded-3xl
    bg-[linear-gradient(90deg,#00ffff,#8b5cf6,#ff00ff,#00ffff)]
    bg-[length:300%_300%]
    animate-[cosmic_6s_linear_infinite]
    "
  >
    <button
      onClick={() =>
        downloadCsv(
          "clean_transactions.csv",
          cleanData
        )
      }
      className="
      px-12
      py-6
      text-xl
      font-bold
      rounded-3xl
      bg-slate-900
      text-white
      shadow-[0_0_25px_rgba(0,255,255,0.5)]
      transition-all
      duration-300
      hover:bg-cyan-600
      hover:text-white
      hover:cursor-pointer
      hover:animate-bounce
      hover:shadow-[0_0_40px_rgba(0,255,255,0.9)]
      "
    >
      📥 Download Clean CSV
    </button>
  </div>

  {/* Errors CSV Button */}
  <div
    className="
    p-[3px]
    rounded-3xl
    bg-[linear-gradient(90deg,#ff0000,#ff00ff,#8b5cf6,#ff0000)]
    bg-[length:300%_300%]
    animate-[cosmic_6s_linear_infinite]
    "
  >
    <button
      onClick={() =>
        downloadCsv(
          "validation_errors.csv",
          errors
        )
      }
      className="
      px-12
      py-6
      text-xl
      font-bold
      rounded-3xl
      bg-slate-900
      text-white
      shadow-[0_0_25px_rgba(255,0,0,0.5)]
      transition-all
      duration-300
      hover:bg-red-600
      hover:text-white
      hover:cursor-pointer
      hover:animate-[cosmicPop_0.8s_ease-in-out_infinite]
      hover:shadow-[0_0_40px_rgba(255,0,0,0.9)]
      "
    >
      ⚠️ Download Errors CSV
    </button>
  </div>

</div>
  );
}