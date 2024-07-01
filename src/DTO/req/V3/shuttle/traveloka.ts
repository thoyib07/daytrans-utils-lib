/**
 * API City Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/traveloka/city
 */
export interface reqAppTravelokaCityV3 {
  cityCode: string;
  cityName: string;
}

/**
 * API Boarding Points Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/traveloka/boardingPoints
 */
export interface reqAppTravelokaBoardingPointV3 {
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
 * @link {{BASE_URL_SHUTTLE}}v3/app/traveloka/inventory
 */
export interface reqAppTravelokaInventoryV3 {
  responseStatus: string;
  responseMessage: string;
  searchStatus: string;
  departResult: reqAppTravelokaInventoryDepartResultV3;
  returnResult: reqAppTravelokaInventoryDepartResultV3;
  pollingData: reqAppTravelokaInventoryPollingDataV3;
}

export interface reqAppTravelokaInventoryPollingDataV3 {
  pollingStatus: string;
  pollingDelayMillis: any;
}

export interface reqAppTravelokaInventoryDepartResultV3 {
  departureCounter: string[];
  destinationCounter: string[];
  inventories: reqAppTravelokaInventoryDepartResultInventoryV3[];
  otherRouteSuggestions: reqAppTravelokaInventoryDepartResultOtherRouteSuggestionV3[];
  }
  
export interface reqAppTravelokaInventoryDepartResultOtherRouteSuggestionV3 {
  originCode: string;
  destinationCode: string;
}

export interface reqAppTravelokaInventoryDepartResultInventoryV3 {
  routeSequence: string;
  status: string;
  originPointDetail: reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailV3;
  destinationPointDetail: reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailV3;
  providerId: string;
  providerCommercialName: string;
  routeId: string;
  skuId: string;
  oldFare: reqAppTravelokaInventoryDepartResultInventoryFareV3;
  fare: reqAppTravelokaInventoryDepartResultInventoryFareV3;
  duration: reqAppTravelokaInventoryDepartResultInventoryHourMinuteV3;
  numOfSeatsAvailable: number;
  seatCapacity: number;
  seatLayout: string;
  seatClass: string;
  seatSubClass: string;
  busType: string;
  fleetName: string;
  busTripCode: string;
  requiresPassengerIds: boolean;
  seatMapAvailable: boolean;
  shouldExchangeEticket: boolean;
  facilities: string[][];
  productType: string;
}

export interface reqAppTravelokaInventoryDepartResultInventoryFareV3 {
  currencyValue: reqAppTravelokaInventoryDepartResultInventoryFareCurrencyValueV3;
  numOfDecimalPoint: number;
}

export interface reqAppTravelokaInventoryDepartResultInventoryFareCurrencyValueV3 {
  currency: string;
  amount: number;
}

export interface reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailV3 {
  pointCode: string;
  pointName: string;
  cityCode: string;
  cityName: string;
  geoPoint: reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailGeoPointV3;
  localTime: reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailLocalTimeV3;
}

export interface reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailLocalTimeV3 {
  specificDate: reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailLocalTimeSpecificDateV3;
  timeZoneId: string;
}

export interface reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailLocalTimeSpecificDateV3 {
  monthDayYear: reqAppTravelokaInventoryDepartResultInventoryMonthDayYearV3;
  hourMinute: reqAppTravelokaInventoryDepartResultInventoryHourMinuteV3;
}

export interface reqAppTravelokaInventoryDepartResultInventoryHourMinuteV3 {
  hour: number;
  minute: number;
}

export interface reqAppTravelokaInventoryDepartResultInventoryMonthDayYearV3 {
  month: number;
  day: number;
  year: number;
}

export interface reqAppTravelokaInventoryDepartResultInventoryOriginPointDetailGeoPointV3 {
  longitude: number;
  latitude: number;
}

/**
 * API Inventory Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/traveloka/seat
 */
export interface reqAppTravelokaSeatV3 {
  responseStatus: string;
  responseMessage: string;
  status: string;
  wagons: reqAppTravelokaSeatWagonV3[];
}

export interface reqAppTravelokaSeatWagonV3 {
  wagonId: string;
  wagonLabel: string;
  wagonGrids: reqAppTravelokaSeatWagonGridV3[][];
}

export interface reqAppTravelokaSeatWagonGridV3 {
  gridType: string;
  gridStatus: string;
  value: string;
}

/**
 * API Check Price Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/check/price
 */
// export interface reqAppTravelokaCheckPriceV3 extends reqAppShuttleCheckPriceTravelokaV2 {
//   totalInsurance: number;
//   totalPrice: number;
//   tokenData: string;
// }