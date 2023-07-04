import { Delivery, DeliverySchedule } from "../types/deliveries";
import assignVehicle from "./assignVehicle";
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

    //iterate over currentDelivery's specified transportVehicles order
    for (let j = 0; j < transportVehicles.length; j++) {
      const vehicleNeeded = transportVehicles[j];
      try {
        //determine if there is a vehicle available
        const vehicles = await availableVehicles(
          currentDelivery,
          vehicleNeeded
        );

        if (Object.keys(vehicles).length <= 0) {
          throw new Error("Error: Not Enough Vehicles to Make Delivery.");
        }

        //assign the vehicle and update schedule and makespan
        await assignVehicle(vehicles, vehicleNeeded, schedule, currentDelivery);
      } catch (err) {
        console.log(err);
        break;
      }
    }
  }

  //handle error if there are not enough vehicles for deliveries
  return schedule;
}

export default scheduleDeliveries;
