import { Delivery } from "../types/deliveries";
import { Vehicle } from "../types/vehicles";

/**
 * This function is used for assigning deliveries to vehicles with the goal for minimizing the makespan.
 * @param deliveries - The deliveries to be made.
 * @param vehicles  - The vehicles avaiable to make the deliveries.
 * @returns Total time for deliveries, the makespan.
 */
async function assignDeliveries(
  deliveries: Delivery[],
  trucks: Vehicle,
  planes: Vehicle
): Promise<number> {
  let schedule;
  let trucksCopy = structuredClone(trucks);
  let planesCopy = structuredClone(planes);

  for (let i = 0; i < deliveries.length; i++) {
    const transportVehicles = deliveries[i].transportVehicles;

    for (let j = 0; j < transportVehicles.length; j++) {
      const currentVehicle = transportVehicles[j];
    }
  }

  return 10;
}

export default assignDeliveries;
