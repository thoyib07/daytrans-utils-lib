import { OrderData } from "@app/legacy";

type OrderDataV3Base = Omit<
  OrderData, 
  'destinationCounterId' |
  'destinationCounter' |
  'destinationCity'
>;

export interface OrderDataV3 extends OrderDataV3Base {
  arrivalCounterId: string;
  arrivalCounter: string;
  arrivalCity: string;
}