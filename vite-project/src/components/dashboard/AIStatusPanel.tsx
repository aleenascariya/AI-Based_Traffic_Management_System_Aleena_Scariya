import Card from "../ui/Card";
import StatusBadge from "../ui/StatusBadge";
import { BrainCircuit } from "lucide-react";

interface AIStatusPanelProps {
  controlMode: "adaptive" | "fixed";
}

export default function AIStatusPanel({
  controlMode,
}: AIStatusPanelProps) {
  const adaptive = controlMode === "adaptive";

  return (
    <Card
      title="AI Status"
      icon={<BrainCircuit size={18} className="text-cyan-400" />}
    >
      <div className="space-y-5">

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Controller
          </span>

          <StatusBadge
            status={adaptive ? "success" : "warning"}
          />

        </div>

        <div className="rounded-xl border border-white/5 bg-[#1A1D24] p-4">

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Current Mode
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            {adaptive ? "Adaptive AI" : "Fixed Clock"}
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            {adaptive
              ? "AI is actively optimizing signal timings based on live traffic density."
              : "Signal timings follow predefined intervals."}
          </p>

        </div>

      </div>
    </Card>
  );
}
