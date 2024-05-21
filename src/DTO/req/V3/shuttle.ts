export interface reqAppShuttleGetAllOrderV2 {
    page: number;
    limit: number;
    typeTrip: string;
    orderId: string;
}

export interface reqAppShuttleCreateOrderV2 {
    tokenData: string;
    paymentMethod: string;
    typeOrder: string;
    useCashback: boolean;

    voucherCode?: string;
    voucherEventCode?: string;
    isWallet?: boolean;
}

export interface reqAppShuttleReorderV2 {
    orderId: string;
    departureDate: string;

    returnDate?: string;
}

export interface reqAppShuttleCheckPriceV2 {
    userBooking: reqAppShuttleCheckPriceUserBookingV2;
    orderData: reqAppShuttleCheckPriceOrderDataV2[];
    typeOrder: string;
    isInsurance: boolean;

    isConnecting?: boolean;
    isReturn?: boolean;
    totalPrice?: number;
    totalInsurance?: number;
    tokenData?: string;
}

export interface reqAppShuttleCheckPriceUserBookingV2 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppShuttleCheckPriceOrderDataV2 {
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
    traveler: reqAppShuttleCheckPriceTravelerV2[];
    totalPriceTraveler: number;

    totalPriceTravelerPrev?: number;
    totalPriceInsurance?: number;
}

export interface reqAppShuttleCheckPriceTravelerV2 {
    name: string;
    title: string;
    idLayout: string;
    seatNumber: string;
    price: number;
    priceNormal: number;
    pricePromo: number;

    passengerIdentity?: string;
    priceInsurance?: number;
    promoCode?: string;
}

export interface reqAppTravelokaCheckPriceV2 {
    orderData: reqAppTravelokaCheckPriceOrderDataV2[];
    userBooking: reqAppTravelokaCheckPriceUserBookingV2;
    typeOrder: string;
}

export interface reqAppTravelokaCheckPriceUserBookingV2 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppTravelokaCheckPriceOrderDataV2 {
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
    busTripCode: null;
    seatClass: string;
    seatSubclass: string;
    traveler: reqAppTravelokaCheckPriceTravelerV2[];
    totalPriceTraveler: number;
}

export interface reqAppTravelokaCheckPriceTravelerV2 {
    name: string;
    title: string;
    idLayout: string;
    seatNumber: string;
    passengerIdentity: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
    promoCode: string;
}

export interface reqAppTiketuxCheckPriceV2 {
    userBooking: reqAppTiketuxCheckPriceUserBookingV2;
    orderData: reqAppTiketuxCheckPriceOrderDataV2[];

    isInsurance?: boolean;
    isReturn?: boolean;
    isConnecting?: boolean;
    totalPrice?: number;
    totalInsurance?: number;
    tokenData?: string;
}

export interface reqAppTiketuxCheckPriceUserBookingV2 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppTiketuxCheckPriceOrderDataV2 {
    departureDate: string;
    departureTime: string;
    estimatedTravelTime: number;
    departureCounter: string;
    departureCounterId: string;
    departureCity: string;
    destinationCounterId: string;
    destinationCounter: string;
    destinationCity: string;
    scheduleCode: string;
    traveler: reqAppTiketuxCheckPriceTravelerV2[];

    totalPriceTraveler?: number;
    totalPriceTravelerPrev?: number;
    totalPriceInsurance?: number;
}

export interface reqAppTiketuxCheckPriceTravelerV2 {
    name: string;
    title: string;
    idLayout: string;
    seatNumber: string;
    promoCode: string;

    price?: number;
    priceNormal?: number;
    pricePromo?: number;
    priceInsurance?: number;
}

export interface reqAppAsalTiketuxV2 {
    search: string;
    lat: string;
    long: string;
}

export interface reqAppTujuanTiketuxV2 {
    departureCounter: string;
    isTraveloka: boolean;
}

export interface reqAppJadwalTiketuxV2 {
    departureDate: string;
    departureCounter: string;
    destinationCounter: string;
    qty: number;
    isReturn: boolean;

    isTraveloka?: boolean;
    searchDeparture?: string;
    searchDestination?: string;
    departureDateReturn?: string;
    departureCounterReturn?: string;
    destinationCounterReturn?: string;
}

export interface reqAppKursiTiketuxV2 {
    scheduleCode: string;
    departureDate: string;
    departureCounter: string;
    destinationCounter: string;

    isInsurance?: boolean;
    isReturn?: boolean;
    isConnecting?: boolean;
    isTraveloka?: boolean;
    scheduleCodeReturn?: string;
    departureDateReturn?: string;
    departureCounterReturn?: string;
    destinationCounterReturn?: string;
}