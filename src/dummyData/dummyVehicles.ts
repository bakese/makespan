import type { Vehicle } from "../types/vehicles";

export const dummyTrucks: Vehicle = {
  type: "Truck",
  duration: 350,
  numAvailable: 1,
};

export const dummyPlanes: Vehicle = {
  type: "Plane",
  duration: 350,
  numAvailable: 1,
};

export default {
  dummyTrucks,
  dummyPlanes,
};
