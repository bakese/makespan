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
 * `DeliveryRecord` type, single delivery record as a subtype of type `DeliverySchedule`.
 */
export type DeliveryRecord =
  | Record<Delivery["uuid"], Record<"deliveryTime", number>>
  | Record<Delivery["uuid"], "Undeliverable: Not Enough Vehicles">;

/**
 * `DeliverySchedule` type, schedule of type `Delivery`.
 */
export type DeliverySchedule = {
  makespan: number | undefined;
  deliveries: DeliveryRecord | undefined;
};
