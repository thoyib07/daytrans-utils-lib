import { reqAppShuttleCheckPriceTravelokaV3, reqAppShuttleCheckPriceV3 } from "../../../req/V3/shuttle";
import { resAppShuttleGetAllOrderV2, resAppShuttleGetDetailOrderV2, resAppShuttleOrderV2, resAppShuttleReorderV2 } from "../../V2/shuttle";

/**
 * API Detail Order Shuttel
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/:orderId
 */
export interface resAppShuttleGetDetailOrderV3 extends resAppShuttleGetDetailOrderV2 { } 

/**
 * API List Order Shuttle
 * @link {{BASE_URL_SHUTTLE}}v2/app/order
 */
export interface resAppShuttleGetAllOrderV3 extends resAppShuttleGetAllOrderV2 { }

/**
 * API Eticket Shuttle
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/eticket/:orderId
 */
export interface resAppShuttleEticketV2 extends resAppShuttleGetDetailOrderV2 { }

/**
 * API Reorder Shuttle
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/reorder
 */
export interface resAppShuttleReorderV3 extends resAppShuttleReorderV2 { }

/**
 * API Order Shuttle
 * @link {{BASE_URL_SHUTTLE}}v3/app/order
 */
export interface resAppShuttleOrderV3  extends resAppShuttleOrderV2 { }


/**
 * API Check Price Tiketux
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/check/price
 * @link {{BASE_URL_SHUTTLE}}v3/app/tiketux/check/price
 */
export interface resAppShuttleCheckPriceV3 extends reqAppShuttleCheckPriceV3 {
    totalInsurance: number;
    totalPrice: number;
    tokenData: string;
}

/**
 * API Check Price Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/check/price
 */
export interface resAppShuttleCheckPriceTravelokaV3 extends reqAppShuttleCheckPriceTravelokaV3 {
    totalInsurance: number;
    totalPrice: number;
    tokenData: string;
}