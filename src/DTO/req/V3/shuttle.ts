export interface reqAppShuttleGetAllOrderV3 {
    page: number;
    limit: number;
    typeTrip: string;
    orderId: string;
}

export interface reqAppShuttleCreateOrderV3 {
    tokenData: string;
    paymentMethod: string;
    typeOrder: string;
    useCashback: boolean;
    isInsurance: boolean;
    isConnecting: boolean;
    isReturn: boolean;

    voucherCode?: string | "";
    voucherEventCode?: string | "";
    isWallet?: boolean | false;
}

export interface reqAppShuttleReorderV3 {
    orderId: string;
    departureDate: string;

    returnDate?: string | "";
}

export interface reqAppShuttleCheckPriceV3 {
    userBooking: reqAppShuttleCheckPriceUserBookingV3;
    orderData: reqAppShuttleCheckPriceOrderDataV3[];
    typeOrder: string;
    totalPrice: number | 0;
    isInsurance: boolean;

    isConnecting: boolean;
    isReturn: boolean;
    totalInsurance?: number | 0;
    tokenData?: string | "";
}

export interface reqAppShuttleCheckPriceUserBookingV3 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppShuttleCheckPriceOrderDataV3 {
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
    traveler: reqAppShuttleCheckPriceTravelerV3[];
    totalPriceTraveler: number;

    totalPriceTravelerPrev?: number | 0;
    totalPriceInsurance?: number | 0;
}

export interface reqAppShuttleCheckPriceTravelerV3 {
    name: string;
    title: string;
    idLayout?: string | "";
    seatNumber: string;
    price: number;
    priceNormal: number;
    pricePromo: number;

    passengerIdentity?: string | "";
    priceInsurance?: number | 0;
    promoCode?: string | "";
}

export interface reqAppShuttleCheckPriceTravelokaV3 {
    orderData: reqAppShuttleCheckPriceTravelokaOrderDataV3[];
    userBooking: reqAppShuttleCheckPriceTravelokaUserBookingV3;
    typeOrder: string;
}

export interface reqAppShuttleCheckPriceTravelokaUserBookingV3 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppShuttleCheckPriceTravelokaOrderDataV3 {
    departureDate: string;
    departureTime: string;
    departureCounterId: string;
    departureCounter: string;
    departureCity: string;

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
    traveler: reqAppShuttleCheckPriceTravelokaTravelerV3[];
    totalPriceTraveler: number;
}

export interface reqAppShuttleCheckPriceTravelokaTravelerV3 {
    name: string;
    title: string;
    idLayout?: string | "";
    seatNumber: string;
    passengerIdentity: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
    
    promoCode?: string | "";
    priceInsurance?: number | 0;
}

export interface reqAppTiketuxCheckPriceV3 {
    userBooking: reqAppTiketuxCheckPriceUserBookingV3;
    orderData: reqAppTiketuxCheckPriceOrderDataV3[];
    typeOrder: string;

    isInsurance: boolean;
    isReturn: boolean;
    isConnecting: boolean;
    totalPrice?: number | 0;
    totalInsurance?: number | 0;
    tokenData?: string | "";
}

export interface reqAppTiketuxCheckPriceUserBookingV3 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppTiketuxCheckPriceOrderDataV3 {
    departureDate: string;
    departureTime: string;
    departureCounter: string;
    departureCounterId: string;
    departureCity: string;
    destinationCounterId: string;
    destinationCounter: string;
    destinationCity: string;
    estimatedTravelTime: number;
    scheduleCode: string;
    traveler: reqAppTiketuxCheckPriceTravelerV3[];
    
    totalPriceTraveler?: number | 0;
    totalPriceTravelerPrev?: number | 0;
    totalPriceInsurance?: number | 0;
}

export interface reqAppTiketuxCheckPriceTravelerV3 {
    name: string;
    title: string;
    idLayout?: string | "";
    seatNumber: string;
    
    promoCode?: string | "";
    price?: number | 0;
    priceNormal?: number | 0;
    pricePromo?: number | 0;
    priceInsurance?: number | 0;
}

export interface reqAppAsalTiketuxV3 {
    search: string;
    lat: string;
    long: string;
}

export interface reqAppTujuanTiketuxV3 {
    departureCounter: string;
    isTraveloka: boolean;
}

export interface reqAppJadwalTiketuxV3 {
    departureDate: string;
    departureCounter: string;
    destinationCounter: string;
    qty: number;
    isReturn: boolean;

    isTraveloka?: boolean | false;
    searchDeparture?: string | "";
    searchDestination?: string | "";
    departureDateReturn?: string | "";
    departureCounterReturn?: string | "";
    destinationCounterReturn?: string | "";
}

export interface reqAppKursiTiketuxV3 {
    scheduleCode: string;
    departureDate: string;
    departureCounter: string;
    destinationCounter: string;

    isInsurance?: boolean | false;
    isReturn?: boolean | false;
    isConnecting?: boolean | false;
    isTraveloka?: boolean | false;
    scheduleCodeReturn?: string | "";
    departureDateReturn?: string | "";
    departureCounterReturn?: string | "";
    destinationCounterReturn?: string | "";
}