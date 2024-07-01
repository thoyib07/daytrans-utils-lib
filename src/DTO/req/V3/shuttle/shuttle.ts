import { baseShuttleCheckPriceOrderDataV2, baseShuttleCheckPriceTravelerV2, baseShuttleCheckPriceUserBookingV2, baseShuttleCheckPriceV2, reqAppShuttleCheckPriceTravelokaOrderDataV2 } from "../../V2/shuttle";

/**
 * API Detail Order Shuttel
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/:orderId
 */
export interface reqAppShuttleGetDetailOrderV3 {
    orderId: string;
}

/**
 * API All Order Shuttel
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/order
 */
export interface reqAppShuttleGetAllOrderV3 {
    page: number;
    limit: number;
    typeTrip: string;
    orderId: string;
}

/**
 * API Eticket Shuttle
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/eticket/:orderId
 */
export interface reqAppShuttleEticketV3 extends reqAppShuttleGetDetailOrderV3 { }

/**
 * API Reorder Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/reorder
 */
export interface reqAppShuttleReorderV3 {
    orderId: string;
    departureDate: string;

    returnDate?: string | "";
}

/**
 * API Order Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/order
 */
export interface reqAppShuttleCreateOrderV3 {
    tokenData: string;
    paymentMethod: string;
    typeOrder: string;
    useCashback: boolean;

    voucherCode?: string | "";
    voucherEventCode?: string | "";
    isWallet?: boolean | false;
}

/**
 * API Check Price Tiketux Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/check/price
 */
export interface baseShuttleCheckPriceUserBookingV3 extends Omit<baseShuttleCheckPriceUserBookingV2, "nama"> {
    name: string;
}
export interface reqAppShuttleCheckPriceV3 extends baseShuttleCheckPriceV2<baseShuttleCheckPriceUserBookingV3, reqAppShuttleCheckPriceOrderDataV3>{
    isInsurance: boolean;
    isConnecting: boolean;
    isReturn: boolean;

    totalPrice?: number | 0;
    totalInsurance?: number | 0;
}
export interface reqAppShuttleCheckPriceOrderDataV3 extends baseShuttleCheckPriceOrderDataV2<reqAppShuttleCheckPriceTravelerV3> {
    typeTrip: string;

    estimatedTravelTime: number;
    destinationCounterId: string;
    destinationCounter: string;
    destinationCity: string;
    scheduleCode: string;

    totalPriceTravelerPrev?: number | 0;
    totalPriceInsurance?: number | 0;
}

export interface reqAppShuttleCheckPriceTravelerV3 extends baseShuttleCheckPriceTravelerV2 {
    idLayout?: string | "";

    passengerIdentity?: string | "";
    priceInsurance?: number | 0;
    promoCode?: string | "";
}

/**
 * API Check Price Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/check/price
 */
export interface reqAppShuttleCheckPriceTravelokaV3 extends baseShuttleCheckPriceV2<baseShuttleCheckPriceUserBookingV3, reqAppShuttleCheckPriceTravelokaOrderDataV2> {
}