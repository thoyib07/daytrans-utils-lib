import { resAppTravelokaBoardingPointV2, resAppTravelokaCityV2, resAppTravelokaInventoryV2, resAppTravelokaSeatV2 } from "../../V2/shuttle";
/**
 * API City Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/traveloka/city
 */
export interface resAppTravelokaCityV3 extends resAppTravelokaCityV2 { }

/**
 * API Boarding Points Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/traveloka/boardingPoints
 */
export interface resAppTravelokaBoardingPointV3 extends resAppTravelokaBoardingPointV2 { }

/**
 * API Inventory Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/traveloka/inventory
 */
export interface resAppTravelokaInventoryV3 extends resAppTravelokaInventoryV2 { }

/**
 * API Inventory Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/traveloka/seat
 */
export interface resAppTravelokaSeatV3 extends resAppTravelokaSeatV2 { }