import { Delivery, DeliverySchedule } from "../types/deliveries";
import availableVehicles from "./availableVehicles";

/**
 * This function is used for assigning deliveries to vehicles with the goal for minimizing the makespan.
 * @param deliveries - The deliveries to be made.
 * @param vehicles  - The vehicles avaiable to make the deliveries.
 * @returns Total time for deliveries, the makespan.
 */
async function scheduleDeliveries(
  deliveries: Delivery[]
): Promise<DeliverySchedule> {
  let schedule = { makespan: undefined, deliveries: undefined };

  //Iterate over deliveries
  for (let i = 0; i < deliveries.length; i++) {
    const currentDelivery = deliveries[i];
    const transportVehicles = currentDelivery.transportVehicles;

    //iterate over current deliveries transportVehicles
    for (let j = 0; j < transportVehicles.length; j++) {
      const vehicleNeeded = transportVehicles[j];
      try {
        const availableVehiclesX = await availableVehicles(
          currentDelivery,
          vehicleNeeded
        );

        console.log("availableVehicles", availableVehiclesX);
        //assign a vehicle and update count
        //update schedule
      } catch (err) {
        console.log("ERROR in scheduleDeliveries try catch::", err);
        break;
      }
    }
  }

  //handle error if there are not enough vehicles for deliveries
  return schedule;
}

export default scheduleDeliveries;
