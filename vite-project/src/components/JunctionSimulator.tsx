import { LaneDirection, Vehicle } from "../types";

interface JunctionSimulatorProps {
  vehicles: Vehicle[];
  activeLane: LaneDirection;
}

export function JunctionSimulator({
  vehicles,
  activeLane,
}: JunctionSimulatorProps) {
  return (
    <div>
      <h2>Traffic Junction Simulator</h2>

      <p>Active Signal: {activeLane}</p>

      <p>Total Vehicles: {vehicles.length}</p>
    </div>
  );
}
