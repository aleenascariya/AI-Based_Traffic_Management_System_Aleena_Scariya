import { useState } from "react";
import {
  ControlMode,
  Vehicle,
} from "../types";

export function useTrafficEngine() {
  const [controlMode, setControlMode] =
    useState<ControlMode>("adaptive");

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [allVehicles, setAllVehicles] =
  useState<Vehicle[]>([]);
  
  const handleInjectVehicle = (
	  lane: Vehicle["lane"]
  ) => {
  const newVehicle: Vehicle = {
	  id: Date.now(),
	  lane,
  };
  setAllVehicles((prev) => [
    ...prev,
    newVehicle,
  ]);
};

  const getLaneCounts = () => ({
  North: 0,
  East: 0,
  South: 0,
  West: 0,
});

  return {
    controlMode,
    setControlMode,
    isPlaying,
    setIsPlaying,
    getLaneCounts,
    allVehicles,
    setAllVehicles,
    handleInjectVehicle,
  };
}
