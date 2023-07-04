/**
 * `TransportVehicles` type, used as a subtype for the type of a vehicles.
 */
export type TransportVehicles = "Truck" | "Plane";

/**
 * `Vehicles` type, used as a type for vehicles.
 */
export type Vehicle = {
  [duration: number]: {
    numAvailable: number;
  };
};
