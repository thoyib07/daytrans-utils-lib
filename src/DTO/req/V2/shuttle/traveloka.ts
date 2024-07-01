export interface baseTravelokaPaginate {
  limit: number;
  page: number;
}

/**
 * API City Traveloka
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/traveloka/city?page={{PAGE}}&limit={{LIMIT}}&search={{SEARCH}}
 */
export interface reqAppTravelokaCityV2 extends baseTravelokaPaginate {
  search: string;
}

/**
 * API Boarding Point Traveloka
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/traveloka/boardingPoints?page={{PAGE}}&limit={{LIMIT}}&cityCode={{CITY_CODE}}
 */
export interface reqAppTravelokaBoardingPointV2 extends baseTravelokaPaginate {
  cityCode: string;
  search: string;
}

/**
 * API Inventory Traveloka
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/traveloka/inventory?qty={{QTY}}&departureDate={{DEPARTURE_DATE}}&originCode={{ORIGIN_CODE}}&destinationCode={{DESTINATION_CODE}}
 */
export interface reqAppTravelokaInventoryV2 {
  qty: number;
  departureDate: string;
  originCode: string;
  destinationCode: string;
}

/**
 * API Seat Traveloka
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/traveloka/seat?routeId={{ROUTE_ID}}&skuId={{SKU_ID}}&providerId={{PROVIDER_ID}}&pickUpPointCode={{PICK_UP}}&dropOffPointCode={{DROP_OFF}}&departureDateTime={{DEPARTURE_DATE_TIME}}&arrivalDateTime={{ARRIVAL_DATE_TIME}}&qty={{QTY}}
 */
export interface reqAppTravelokaSeatV2 {
  routeId: string;
  skuId: string;
  providerId: string;
  pickUpPointCode: string;
  dropOffPointCode: string;
  departureDateTime: string;
  arrivalDateTime: string;
  qty: number;
}