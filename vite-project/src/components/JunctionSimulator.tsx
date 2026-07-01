import type { CSSProperties } from "react";
import type { LaneDirection, Vehicle } from "../types";

interface JunctionSimulatorProps {
  vehicles: Vehicle[];
  activeLane: LaneDirection;
}

const lightPosition: Record<LaneDirection, CSSProperties> = {
  North: {
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
  },
  South: {
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
  },
  East: {
    right: 20,
    top: "50%",
    transform: "translateY(-50%)",
  },
  West: {
    left: 20,
    top: "50%",
    transform: "translateY(-50%)",
  },
};

export function JunctionSimulator({
  vehicles,
  activeLane,
}: JunctionSimulatorProps) {
  const getLaneCount = (lane: LaneDirection) =>
    vehicles.filter((vehicle) => vehicle.lane === lane).length;

  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-2xl bg-[#11151C]">

      {/* Vertical Road */}
      <div className="absolute left-1/2 top-0 h-full w-28 -translate-x-1/2 bg-[#2B313C]" />

      {/* Horizontal Road */}
      <div className="absolute left-0 top-1/2 h-28 w-full -translate-y-1/2 bg-[#2B313C]" />

      {/* Vertical Lane Divider */}
<div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2">
  <div className="h-full border-l-2 border-dashed border-yellow-300/60"></div>
</div>

{/* Horizontal Lane Divider */}
<div className="absolute top-1/2 left-0 h-1 w-full -translate-y-1/2">
  <div className="w-full border-t-2 border-dashed border-yellow-300/60"></div>
</div>

      {/* Junction */}
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-slate-700 to-slate-800" />

      {/* Road Labels */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-bold text-white">
        NORTH
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-bold text-white">
        SOUTH
      </div>

      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-sm font-bold text-white">
        WEST
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold text-white">
        EAST
      </div>

      {/* Zebra Crossings */}

<div className="absolute left-1/2 top-[105px] -translate-x-1/2 flex gap-1">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="h-10 w-2 bg-white/80 rounded-sm" />
  ))}
</div>

<div className="absolute left-1/2 bottom-[105px] -translate-x-1/2 flex gap-1">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="h-10 w-2 bg-white/80 rounded-sm" />
  ))}
</div>

<div className="absolute top-1/2 left-[105px] -translate-y-1/2 flex flex-col gap-1">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="w-10 h-2 bg-white/80 rounded-sm" />
  ))}
</div>

<div className="absolute top-1/2 right-[105px] -translate-y-1/2 flex flex-col gap-1">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="w-10 h-2 bg-white/80 rounded-sm" />
  ))}
</div>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-3xl text-white/60">
  ↓
</div>

<div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-3xl text-white/60">
  ↑
</div>

<div className="absolute left-20 top-1/2 -translate-y-1/2 text-3xl text-white/60">
  →
</div>

<div className="absolute right-20 top-1/2 -translate-y-1/2 text-3xl text-white/60">
  ←
</div>

      {/* Traffic Lights */}
      {(["North", "East", "South", "West"] as LaneDirection[]).map((lane) => (
        <div
          key={lane}
          style={lightPosition[lane]}
          className="absolute flex flex-col items-center"
        >
          <div
            className={`h-7 w-7 rounded-full border-2 transition-all duration-500 ${
              activeLane === lane
                ? "border-green-300 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
                : "border-red-300 bg-red-500"
            }`}
          />

          <span className="mt-2 text-xs font-semibold text-slate-300">
            {getLaneCount(lane)}
          </span>
        </div>
      ))}

      {/* Vehicles */}
      {vehicles.map((vehicle, index) => {
        let style: CSSProperties = {};

        switch (vehicle.lane) {
          case "North":
            style = {
              left: "50%",
              top: 60 + index * 22,
              transform: "translateX(-50%)",
            };
            break;

          case "South":
            style = {
              left: "50%",
              bottom: 60 + index * 22,
              transform: "translateX(-50%)",
            };
            break;

          case "East":
            style = {
              right: 60 + index * 22,
              top: "50%",
              transform: "translateY(-50%)",
            };
            break;

          case "West":
            style = {
              left: 60 + index * 22,
              top: "50%",
              transform: "translateY(-50%)",
            };
            break;
        }

        return (
          <div
            key={vehicle.id}
            style={style}
            className="
absolute
h-5
w-10
rounded-lg
border
border-cyan-200
bg-gradient-to-r
from-cyan-300
to-cyan-500
shadow-[0_0_15px_rgba(34,211,238,0.8)]
transition-all
duration-500
"
          />
        );
      })}

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#1B2028] px-5 py-2 text-sm text-white">
        Active Signal:
        <span className="ml-2 font-bold text-green-400">
          {activeLane}
        </span>
      </div>
    </div>
  );
}
