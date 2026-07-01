import PrimaryButton from "../ui/PrimaryButton";
import {
  BrainCircuit,
  Car,
  TrafficCone,
  Settings,
  Play,
  Pause,
} from "lucide-react";

interface SidebarProps {
  engine: any;
}

export default function Sidebar({ engine }: SidebarProps) {
  return (
    <aside className="rounded-2xl border border-white/10 bg-[#14171D] p-6 shadow-lg">

      {/* AI CONTROL */}
      <div className="space-y-4 border-b border-white/10 pb-6">

        <div className="flex items-center gap-2">
          <BrainCircuit size={18} className="text-cyan-400" />
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            AI CONTROL
          </h3>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-[#16222B] p-4">
          <p className="text-xs uppercase text-slate-400">
            Current Mode
          </p>

          <h2 className="mt-1 text-3xl font-bold text-white">
            {engine.controlMode === "adaptive"
              ? "Adaptive AI"
              : "Fixed Clock"}
          </h2>
        </div>

        <PrimaryButton
          onClick={() => engine.setControlMode("adaptive")}
        >
          Adaptive AI
        </PrimaryButton>

        <PrimaryButton
          onClick={() => engine.setControlMode("fixed")}
        >
          Fixed Clock
        </PrimaryButton>

        <PrimaryButton
          onClick={() =>
            engine.setIsPlaying(!engine.isPlaying)
          }
        >
          {engine.isPlaying ? (
            <>
              <Pause size={18} className="inline mr-2" />
              Pause Simulation
            </>
          ) : (
            <>
              <Play size={18} className="inline mr-2" />
              Start Simulation
            </>
          )}
        </PrimaryButton>

      </div>

      {/* VEHICLE INJECTION */}

      <div className="space-y-4 border-b border-white/10 py-6">

        <div className="flex items-center gap-2">
          <Car size={18} className="text-cyan-400" />

          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            VEHICLE INJECTION
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2">

          <PrimaryButton
            onClick={() => engine.handleInjectVehicle("North")}
          >
            North
          </PrimaryButton>

          <PrimaryButton
            onClick={() => engine.handleInjectVehicle("East")}
          >
            East
          </PrimaryButton>

          <PrimaryButton
            onClick={() => engine.handleInjectVehicle("South")}
          >
            South
          </PrimaryButton>

          <PrimaryButton
            onClick={() => engine.handleInjectVehicle("West")}
          >
            West
          </PrimaryButton>

        </div>

      </div>

      {/* PHASE OVERRIDES */}

      <div className="space-y-4 border-b border-white/10 py-6">

        <div className="flex items-center gap-2">
          <TrafficCone size={18} className="text-cyan-400" />

          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            PHASE OVERRIDES
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2">

          <PrimaryButton
            onClick={() => engine.handleOverrideLane("North")}
          >
            North
          </PrimaryButton>

          <PrimaryButton
            onClick={() => engine.handleOverrideLane("East")}
          >
            East
          </PrimaryButton>

          <PrimaryButton
            onClick={() => engine.handleOverrideLane("South")}
          >
            South
          </PrimaryButton>

          <PrimaryButton
            onClick={() => engine.handleOverrideLane("West")}
          >
            West
          </PrimaryButton>

        </div>

      </div>

      {/* SIMULATION CONTROLS */}

      <div className="space-y-4 pt-6">

        <div className="flex items-center gap-2">
          <Settings size={18} className="text-cyan-400" />

          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            SIMULATION CONTROLS
          </h3>
        </div>

        <PrimaryButton
          onClick={engine.generateDemoTraffic}
        >
          Generate Demo Traffic
        </PrimaryButton>

        <PrimaryButton
          onClick={engine.clearVehicles}
        >
          Clear Vehicles
        </PrimaryButton>

        <PrimaryButton
          onClick={engine.resetDashboard}
        >
          Reset Dashboard
        </PrimaryButton>

      </div>

    </aside>
  );
}
