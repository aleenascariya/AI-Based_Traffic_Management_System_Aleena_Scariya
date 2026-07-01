import { Activity } from "lucide-react";

interface HeaderProps {
  latency: string;
  version: string;
  streamStatus: string;
}

export default function Header({
  latency,
  version,
  streamStatus,
}: HeaderProps) {
  return (
    <header className="h-16 shrink-0 border-b border-white/5 bg-[#14171D] flex items-center justify-between px-6 z-10">

      <div className="flex items-center gap-3">

        <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-400/50 rounded flex items-center justify-center">

          <div className="w-4 h-4 bg-cyan-400 rounded-sm shadow-[0_0_12px_rgba(34,211,238,0.7)] animate-pulse" />

        </div>

        <div>

          <span className="text-xl font-extrabold tracking-tight text-white uppercase">
            NeuralTraffic
            <span className="text-cyan-400 ml-1">
              AI
            </span>
          </span>

          <span className="ml-3 px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] rounded uppercase font-bold tracking-widest hidden sm:inline">
            {version}
          </span>

        </div>

      </div>

      <div className="flex items-center gap-6 text-sm">

        <div className="hidden md:flex flex-col items-end">

          <span className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">
            AI Latency
          </span>

          <span className="text-cyan-400 font-mono text-xs font-semibold">
            {latency}
          </span>

        </div>

        <div className="flex flex-col items-end">

          <span className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">
            Dynamic Stream
          </span>

          <span className="text-white font-mono text-xs flex items-center gap-2">

            <Activity className="w-3 h-3 text-emerald-400" />

            {streamStatus}

          </span>

        </div>

      </div>

    </header>
  );
}
