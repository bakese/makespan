import type { Delivery } from "../types/deliveries";

const dummyDeliveries: Delivery[] = [
  {
    uuid: 1,
    duration: 250,
    transportVehicles: ["Truck"],
    size: {
      width: 12,
      height: 12,
      length: 12,
    },
    weight: 5,
    fragile: false,
    perishable: false,
  },
  //   {
  //     uuid: 2,
  //     duration: 500,
  //     transportVehicles: ["Truck", "Plane", "Truck"],
  //     size: {
  //       width: 24,
  //       height: 24,
  //       length: 5,
  //     },
  //     weight: 12,
  //     fragile: false,
  //     perishable: false,
  //   },
];

export default dummyDeliveries;
