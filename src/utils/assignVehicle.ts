import { planes, trucks } from "../dummyData/dummyVehicles";
import { Delivery, DeliverySchedule } from "../types/deliveries";
import { TransportVehicles, Vehicle } from "../types/vehicles";

export default async function (
  vehicles: Vehicle,
  vehicleNeeded: TransportVehicles,
  schedule: DeliverySchedule,
  currentDelivery: Delivery
): Promise<void> {
  let selectedVehicle = Number(
    Object.keys(vehicles)[0]
  ) as keyof typeof vehicles;

  let targetVehicleType = vehicleNeeded === "Truck" ? trucks : planes;

  targetVehicleType[selectedVehicle].numAvailable -= 1;

  //update makespan - highest single duration
  if (schedule.makespan === undefined || schedule.makespan < selectedVehicle) {
    schedule.makespan = selectedVehicle;
  }

  if (schedule.deliveries === undefined) {
    schedule.deliveries = {};
  }

  //update schedule
  if (!schedule.deliveries[currentDelivery.uuid]) {
    schedule.deliveries[currentDelivery.uuid] = {
      deliveryTime: selectedVehicle,
    };
  } else {
    schedule.deliveries[currentDelivery.uuid] = {
      deliveryTime: selectedVehicle,
    };
  }
}
