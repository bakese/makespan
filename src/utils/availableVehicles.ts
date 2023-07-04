import { planes, trucks } from "../dummyData/dummyVehicles";
import { Delivery } from "../types/deliveries";
import { TransportVehicles } from "../types/vehicles";

export default async function (
  currentDelivery: Delivery,
  vehicleNeeded: TransportVehicles
): Promise<{
  [k: string]: {
    numAvailable: number;
  };
}> {
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
