import { Traveler } from "./traveler";

/**
 * @deprecated
 */
export interface OrderData {
  typeTrip: string;
  departureDate: string;
  departureTime: string;
  departureCounterId: string;
  departureCounter: string;
  departureCity: string;

  estimatedTravelTime: number;
  destinationCounterId: string;
  destinationCounter: string;
  destinationCity: string;
  scheduleCode: string;
  traveler: Traveler[];
  totalPriceTraveler: number;

  totalPriceTravelerPrev: number;
  totalPriceInsurance: number;
}