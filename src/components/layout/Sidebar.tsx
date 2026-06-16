"use client";

import {
  Upload,
  BarChart3,
  PieChart,
  ShieldAlert,
  Download,
  Table2,
  TrendingUp,
} from "lucide-react";

interface SidebarProps {
  hasUploaded: boolean;
}

export default function Sidebar({
  hasUploaded,
}: SidebarProps) {

  const links = [
    {
      id: "upload",
      label: "Upload CSV",
      icon: Upload,
    },
    {
      id: "analytics",
      label: "Success Rate",
      icon: TrendingUp,
    },
    {
      id: "distribution",
      label: "Distribution Charts",
      icon: PieChart,
    },
    {
      id: "preview",
      label: "Data Preview",
      icon: Table2,
    },
    {
      id: "errors",
      label: "Validation Errors",
      icon: ShieldAlert,
    },
    {
      id: "downloads",
      label: "Download CSV",
      icon: Download,
    },
  ];

  return (
    <aside
      className="
      fixed
      left-0
      top-0
      h-screen
      w-72
      glass-card
      border-r
      border-white/10
      p-6
      z-50
      "
    >
      <h1
        className="
        text-2xl
        font-black
        bg-gradient-to-r
        from-cyan-400
        via-violet-400
        to-indigo-400
        bg-clip-text
        text-transparent
        mb-8
        "
      >
        CSV's Transaction
      </h1>

      <nav className="space-y-3">

        {links.map((link) => {

          const Icon = link.icon;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              hover:bg-white/10
              transition-all
              "
            >
              <Icon size={18} />

              <span>
                {link.label}
              </span>
            </a>
          );
        })}

      </nav>

      <div
        className="
        absolute
        bottom-6
        left-6
        right-6
        glass-card
        rounded-2xl
        p-4
        "
      >
        <p className="text-xs text-zinc-400">
          Processing Engine
        </p>

        <h3 className="font-bold mt-1">
          5000+ Rows Supported
        </h3>
      </div>
    </aside>
  );
}