/**
 * API Detail Order Shuttel
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/:orderId
 */
export interface reqAppShuttleGetDetailOrderV2 {
    orderId: string;
}

/**
 * API List Order Shuttle
 * @method Get
 * @link {{BASE_URL_SHUTTLE}}v2/app/order
 */
export interface reqAppShuttleGetAllOrderV2 {
    page: number;
    limit: number;
    typeTrip: string;
    orderId: string;
}

/**
 * API Eticket Shuttle
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/eticket/:orderId
 */
export interface reqAppShuttleEticketV2 extends reqAppShuttleGetDetailOrderV2 { }

/**
 * API Reorder Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/reorder
 */
export interface reqAppShuttleReorderV2 {
    orderId: string;
    departureDate: string;

    returnDate?: string | "";
}

/**
 * API Order Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/order
 */
export interface reqAppShuttleCreateOrderV2 {
    tokenData: string;
    paymentMethod: string;
    typeOrder: string;
    useCashback: boolean;

    voucherCode?: string | "";
    voucherEventCode?: string | "";
    isWallet?: boolean | false;
}

export interface baseShuttleCheckPriceV2<UserBookingV2, OrderDataV2> {
    userBooking: UserBookingV2;
    orderData: OrderDataV2[];
    typeOrder: string;
}

export interface baseShuttleCheckPriceUserBookingV2 {
    nama: string;
    title: string;
    phone: string;
    email: string;
}

export interface baseShuttleCheckPriceOrderDataV2<OrderDataTravelerV2> {
    departureDate: string;
    departureTime: string;
    departureCounterId: string;
    departureCounter: string;
    departureCity: string;

    traveler: OrderDataTravelerV2[];
    totalPriceTraveler: number;
}

export interface baseShuttleCheckPriceTravelerV2 {
    name: string;
    title: string;
    seatNumber: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
}

/**
 * API Check Price Tiketux Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/check/price
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/check/price
 */
export interface reqAppShuttleCheckPriceV2 extends baseShuttleCheckPriceV2<baseShuttleCheckPriceUserBookingV2,reqAppShuttleCheckPriceOrderDataV2> {
    isasuransi: boolean | true;

    isconnecting?: boolean | false;
    ispp?: boolean | false;
    totalPrice?: number | 0;
    totalInsurance?: number | 0;
}

export interface reqAppShuttleCheckPriceOrderDataV2 extends baseShuttleCheckPriceOrderDataV2<reqAppShuttleCheckPriceTravelerV2> {
    // typeTrip: string;

    estimatedTravelTime: number;
    destinationCounterId: string;
    destinationCounter: string;
    destinationCity: string;
    scheduleCode: string;

    totalPriceTravelerPrev?: number | 0;
    totalPriceInsurance?: number | 0;
}

export interface reqAppShuttleCheckPriceTravelerV2 extends baseShuttleCheckPriceTravelerV2 {
    id_layout: string;

    passengerIdentity?: string | "";
    priceInsurance?: number | 0;
    kodePromo?: string | "";
}

/**
 * API Check Price Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/check/price
 */
export interface reqAppShuttleCheckPriceTravelokaV2 extends baseShuttleCheckPriceV2<baseShuttleCheckPriceUserBookingV2, reqAppShuttleCheckPriceTravelokaOrderDataV2> {
}

export interface reqAppShuttleCheckPriceTravelokaOrderDataV2 extends baseShuttleCheckPriceOrderDataV2<reqAppShuttleCheckPriceTravelokaTravelerV2> {
    arrivalDate: string;
    arrivalTime: string;
    arrivalCounterId: string;
    arrivalCounter: string;
    arrivalCity: string;

    routeId: string;
    skuId: string;
    providerId: string;
    providerName: string;
    busTripCode: string;
    seatClass: string;
    seatSubclass: string;
}

export interface reqAppShuttleCheckPriceTravelokaTravelerV2 extends baseShuttleCheckPriceTravelerV2 {
    idLayout?: string | "";
    passengerIdentity: string;
    promoCode?: string | "";
}