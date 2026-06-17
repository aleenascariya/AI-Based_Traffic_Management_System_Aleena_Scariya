export type LaneDirection =
  | "North"
  | "East"
  | "South"
  | "West";

export type ControlMode =
  | "adaptive"
  | "fixed";

export interface Vehicle {
  id: number;
  lane: LaneDirection;
}

export interface TrafficSignal {
  lane: LaneDirection;
  color: "red" | "green";
}
