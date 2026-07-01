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

      {/* Junction */}
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-cyan-500/30 bg-[#3B4350]" />

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

      {/* Traffic Lights */}
      {(["North", "East", "South", "West"] as LaneDirection[]).map((lane) => (
        <div
          key={lane}
          style={lightPosition[lane]}
          className="absolute flex flex-col items-center"
        >
          <div
            className={`h-5 w-5 rounded-full border-2 transition-all duration-500 ${
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
            className="absolute h-4 w-8 rounded-md border border-cyan-300 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-500"
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
