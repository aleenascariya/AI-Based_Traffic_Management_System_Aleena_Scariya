import type { CSSProperties } from "react";
import type { LaneDirection, Vehicle } from "../types";

interface JunctionSimulatorProps {
  vehicles: Vehicle[];
  activeLane: LaneDirection;
}

const lightPosition: Record<LaneDirection, CSSProperties> = {
  North: {
    top: 35,
    left: "50%",
    transform: "translateX(-50%)",
  },
  South: {
    bottom: 35,
    left: "50%",
    transform: "translateX(-50%)",
  },
  East: {
    right: 35,
    top: "50%",
    transform: "translateY(-50%)",
  },
  West: {
    left: 35,
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
    <div className="relative min-h-[500px] w-full overflow-hidden rounded-2xl bg-[#11151C]">

      {/* Vertical Road */}
      <div className="absolute left-1/2 top-0 h-full w-32 -translate-x-1/2 bg-[#343B48]" />

      {/* Horizontal Road */}
      <div className="absolute left-0 top-1/2 h-32 w-full -translate-y-1/2 bg-[#343B48]" />

      {/* Vertical Lane Divider */}
<div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2">
  <div className="h-full border-l-2 border-dashed border-yellow-300/60"></div>
</div>

{/* Horizontal Lane Divider */}
<div className="absolute top-1/2 left-0 h-1 w-full -translate-y-1/2">
  <div className="w-full border-t-2 border-dashed border-yellow-300/60"></div>
</div>

      {/* Junction */}
      <div
  className="
  absolute
  z-10
  left-1/2
  top-1/2
  h-32
  w-32
  -translate-x-1/2
  -translate-y-1/2
  rounded-xl
  border
  border-cyan-500/30
  bg-[#3A4252]
  "
/>

      {/* Road Labels */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-white">
        NORTH
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-bold text-white">
        SOUTH
      </div>

      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-sm font-bold text-white">
        WEST
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-white">
        EAST
      </div>

      {/* Zebra Crossings */}

<div className="absolute left-1/2 top-[130px] -translate-x-1/2 flex gap-1">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="h-10 w-2 bg-white/80 rounded-sm" />
  ))}
</div>

<div className="absolute left-1/2 bottom-[130px] -translate-x-1/2 flex gap-1">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="h-10 w-2 bg-white/80 rounded-sm" />
  ))}
</div>

<div className="absolute top-1/2 left-[130px] -translate-y-1/2 flex flex-col gap-1">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="w-10 h-2 bg-white/80 rounded-sm" />
  ))}
</div>

<div className="absolute top-1/2 right-[130px] -translate-y-1/2 flex flex-col gap-1">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="w-10 h-2 bg-white/80 rounded-sm" />
  ))}
</div>

      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-3xl text-white/60">
  ↓
</div>

<div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-3xl text-white/60">
  ↑
</div>

<div className="absolute left-32 top-1/2 -translate-y-1/2 text-3xl text-white/60">
  →
</div>

<div className="absolute right-32 top-1/2 -translate-y-1/2 text-3xl text-white/60">
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
      top: 170 + index * 55,
      transform: "translateX(-50%) rotate(90deg)",
    };
    break;

  case "South":
    style = {
      left: "50%",
      bottom: 170 + index * 55,
      transform: "translateX(-50%) rotate(-90deg)",
    };
    break;

  case "East":
    style = {
      right: 170 + index * 55,
      top: "50%",
      transform: "translateY(-50%) rotate(180deg)",
    };
    break;

  case "West":
    style = {
      left: 170 + index * 55,
      top: "50%",
      transform: "translateY(-50%)",
    };
    break;
}

        return (
  <div
    key={vehicle.id}
    style={style} 
    className={`absolute z-50 transition-all duration-500`}
  >
    <div className="relative">

      {/* Wheels */}
      <div className="absolute -left-1 top-1 h-2 w-1 rounded-full bg-gray-900"></div>
      <div className="absolute -left-1 bottom-1 h-2 w-1 rounded-full bg-gray-900"></div>

      <div className="absolute -right-1 top-1 h-2 w-1 rounded-full bg-gray-900"></div>
      <div className="absolute -right-1 bottom-1 h-2 w-1 rounded-full bg-gray-900"></div>

      {/* Car Body */}
      <div className="h-7 w-14 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-[0_0_15px_rgba(34,211,238,0.9)] border border-cyan-200">

        {/* Windshield */}
        <div className="absolute left-3 top-1 h-5 w-8 rounded bg-cyan-100/50"></div>

        {/* Headlights */}
        <div className="absolute -right-0.5 top-2 h-1 w-1 rounded-full bg-yellow-300"></div>
        <div className="absolute -right-0.5 bottom-2 h-1 w-1 rounded-full bg-yellow-300"></div>

        {/* Tail Lights */}
        <div className="absolute -left-0.5 top-2 h-1 w-1 rounded-full bg-red-500"></div>
        <div className="absolute -left-0.5 bottom-2 h-1 w-1 rounded-full bg-red-500"></div>

      </div>

    </div>
  </div>
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
