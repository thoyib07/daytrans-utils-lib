import { reqAppShuttleCheckPriceTravelokaV2 } from "../../../req/V2/shuttle"
/**
 * API City Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/traveloka/city
 */
export interface resAppTravelokaCityV2 {
  cityCode: string;
  cityName: string;
}

/**
 * API Boarding Points Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/traveloka/boardingPoints
 */
export interface resAppTravelokaBoardingPointV2 {
  pointCode: string;
  pointName: string;
  pointAddress: string;
  cityCode: string;
  longitude: string;
  latitude: string;
}

/**
 * API Inventory Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/traveloka/inventory
 */
export interface resAppTravelokaInventoryV2 {
  responseStatus: string;
  responseMessage: string | null;
  searchStatus: string;
  departResult: resAppTravelokaInventoryDepartResultV2;
  returnResult: resAppTravelokaInventoryDepartResultV2 | null;
  pollingData: resAppTravelokaInventoryPollingDataV2;
}

export interface resAppTravelokaInventoryPollingDataV2 {
  pollingStatus: string;
  pollingDelayMillis: any;
}

export interface resAppTravelokaInventoryDepartResultV2 {
  departureCounter?: string[];
  destinationCounter?: string[];
  inventories: resAppTravelokaInventoryDepartResultInventoryV2[];
  otherRouteSuggestions: resAppTravelokaInventoryDepartResultOtherRouteSuggestionV2[];
}
  
export interface resAppTravelokaInventoryDepartResultOtherRouteSuggestionV2 {
  originCode: string;
  destinationCode: string;
}

export interface resAppTravelokaInventoryDepartResultInventoryV2 {
  routeSequence: string;
  status: string;
  originPointDetail: resAppTravelokaInventoryDepartResultInventoryOriginPointDetailV2;
  destinationPointDetail: resAppTravelokaInventoryDepartResultInventoryOriginPointDetailV2;
  providerId: string;
  providerCommercialName: string;
  routeId: string;
  skuId: string;
  oldFare: resAppTravelokaInventoryDepartResultInventoryFareV2;
  fare: resAppTravelokaInventoryDepartResultInventoryFareV2;
  duration: resAppTravelokaInventoryDepartResultInventoryHourMinuteV2;
  durationStr: string; // additional
  departureDate: string; // additional
  departureTime: string; // additional
  arrivalDate: string; // additional
  arrivalTime: string; // additional
  numOfSeatsAvailable: number;
  seatCapacity: number;
  seatLayout: string;
  seatClass: string;
  seatSubClass: string;
  busType: string;
  fleetName?: string;
  busTripCode: string;
  requiresPassengerIds: boolean;
  seatMapAvailable: boolean;
  shouldExchangeEticket: boolean;
  facilities?: string[];
  productType?: string
}

export interface resAppTravelokaInventoryDepartResultInventoryFareV2 {
  currencyValue: resAppTravelokaInventoryDepartResultInventoryFareCurrencyValueV2;
  numOfDecimalPoint: number;
}

export interface resAppTravelokaInventoryDepartResultInventoryFareCurrencyValueV2 {
  currency: string;
  amount: number;
}

export interface resAppTravelokaInventoryDepartResultInventoryOriginPointDetailV2 {
  pointCode: string;
  pointName: string;
  cityCode: string;
  cityName: string;
  geoPoint: resAppTravelokaInventoryDepartResultInventoryOriginPointDetailGeoPointV2;
  localTime: resAppTravelokaInventoryDepartResultInventoryOriginPointDetailLocalTimeV2;
}

export interface resAppTravelokaInventoryDepartResultInventoryOriginPointDetailLocalTimeV2 {
  specificDate: resAppTravelokaInventoryDepartResultInventoryOriginPointDetailLocalTimeSpecificDateV2;
  timeZoneId: string;
}

export interface resAppTravelokaInventoryDepartResultInventoryOriginPointDetailLocalTimeSpecificDateV2 {
  monthDayYear: resAppTravelokaInventoryDepartResultInventoryMonthDayYearV2;
  hourMinute: resAppTravelokaInventoryDepartResultInventoryHourMinuteV2;
}

export interface resAppTravelokaInventoryDepartResultInventoryHourMinuteV2 {
  hour: string;
  minute: string;
}

export interface resAppTravelokaInventoryDepartResultInventoryMonthDayYearV2 {
  month: string;
  day: string;
  year: string;
}

export interface resAppTravelokaInventoryDepartResultInventoryOriginPointDetailGeoPointV2 {
  longitude: string;
  latitude: string;
}

/**
 * API Inventory Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/traveloka/seat
 */
export interface resAppTravelokaSeatV2 {
  responseStatus: string;
  responseMessage: string | null;
  status: string;
  wagons: resAppTravelokaSeatWagonV2[];
}

export interface resAppTravelokaSeatWagonV2 {
  wagonId: string;
  idProduct?: string;
  wagonLabel: string;
  wagonGrids: resAppTravelokaSeatWagonGridV2[][];
}

export interface resAppTravelokaSeatWagonGridV2 {
  gridType: string;
  gridStatus: string;
  value: string | null;
}