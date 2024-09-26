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
    typeOrder: "TIKETUX" | "TRAVELOKA",
    isInsurance: boolean;
    isConnecting: boolean;
    isReturn: boolean;

    // totalPrice?: number | 0;
    // totalInsurance?: number | 0;
}
export interface reqAppShuttleCheckPriceOrderDataV3 {
    typeTrip: "PERGI" | "PULANG";
    departure: {
        date: string,
        time: string,
        counterId: string,
        counterName: string,
        city: string,
        linkMap?: string | ""
    },
    destination: {
        date: string,
        time: string,
        counterId: string,
        counterName: string,
        city: string,
        linkMap?: string | ""
    },
    scheduleCode: string;
    traveler: reqAppShuttleCheckPriceTravelerV3[],
    totalPrice: {   
        new: number | 0;
        old: number | 0;
    },
    totalInsurance: {   
        new: number | 0;
        old: number | 0;
    }
}

export interface reqAppShuttleCheckPriceTravelerV3 {
    name: string,
    title: string,
    seatIdLayout?: string,
    seatNumber: string,
    price: {
        amount: number | 0,
        normal: number | 0,
        promo: number | 0,
        insurance: number | 0,
    },
    passengerIdentity?: string | "-",
    promoCode?: string | ""
}

/**
 * API Check Price Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/check/price
 */
export interface reqAppShuttleCheckPriceTravelokaV3 extends baseShuttleCheckPriceV2<baseShuttleCheckPriceUserBookingV3, reqAppShuttleCheckPriceTravelokaOrderDataV3> {
}

export interface reqAppShuttleCheckPriceTravelokaOrderDataV3 extends Pick<reqAppShuttleCheckPriceOrderDataV3, "departure" | "destination" | "scheduleCode" | "totalPrice"> {
    traveler: reqAppShuttleTravelokaCheckPriceTravelerV3[],
    routeId: string;
    providerId: string;
    providerName: string;
    busTripCode: string | null;
    seatClass: string;
    seatSubclass: string;
}


export interface reqAppShuttleTravelokaCheckPriceTravelerV3 extends Omit<reqAppShuttleCheckPriceTravelerV3, "promoCode"> {
    codePromo?: string | "";
}