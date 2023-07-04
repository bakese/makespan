import { TransportVehicles } from "./vehicles";

/**
 * `Delivery` type, use it when creating and using `deliveries`.
 */
export type Delivery = {
  uuid: number;
  duration: number;
  transportVehicles: TransportVehicles[];
  size?: DeliverySize;
  weight?: number;
  fragile?: boolean;
  perishable?: boolean;
};

/**
 * `DeliverySize` type, used as a subtype of a  `Delivery`. Sizing is in inches.
 */
type DeliverySize = {
  width: number;
  height: number;
  length: number;
};

/**
 * `DeliverySchedule` type, schedule of type `Delivery`.
 */
export type DeliverySchedule = {
  makespan: number | undefined;
  deliveries:
    | Record<Delivery["uuid"], Record<"deliveryTime", number>>
    | Record<Delivery["uuid"], "Undeliverable: Not Enough Vehicles">
    | undefined;
};
