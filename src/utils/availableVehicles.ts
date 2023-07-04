import { planes, trucks } from "../dummyData/dummyVehicles";
import { Delivery } from "../types/deliveries";
import { TransportVehicles, Vehicle } from "../types/vehicles";

/**
 * This function is used to determine if there is sufficient vehicle(s) for a delivery.
 * @param currentDelivery - The current delivery being used to check for an aviable vehicle. Type of `Delivery`.
 * @param vehicleNeeded  - The vehicle type needed. Type of `TransportVehicles`.
 * @returns Filtered object of transportVehicle that is available for currentDelivery based on sufficient duration and a vehicle being available.
 */
export default async function (
  currentDelivery: Delivery,
  vehicleNeeded: TransportVehicles
): Promise<Vehicle> {
  const targetVehicles = vehicleNeeded === "Truck" ? trucks : planes;

  const filteredVehicles = Object.fromEntries(
    Object.entries(targetVehicles).filter(([vehicleDuration, vehicle]) => {
      const numAvailable = vehicle.numAvailable;

      return (
        Number(vehicleDuration) >= currentDelivery.duration && numAvailable > 0
      );
    })
  );

  return filteredVehicles;
}
