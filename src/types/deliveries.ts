import { TransportVehicles } from "./vehicles";

/**
 * `Delivery` type, use it when creating and using `deliveries`.
 */
export type Delivery = {
  uuid: string;
  duration: number;
  transportVehicles: TransportVehicles[];
  size: DeliverySize;
  weight: number;
  fragile?: boolean;
  perishable?: boolean;
};

/**
 * `DeliverySize` type, used as a subtype of a  `Delivery`.
 */
type DeliverySize = {
  width: number;
  height: number;
  length: number;
};
