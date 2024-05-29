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

    voucherCode?: string;
    voucherEventCode?: string;
    isWallet?: boolean;
}

export interface reqAppShuttleReorderV3 {
    orderId: string;
    departureDate: string;

    returnDate?: string;
}

export interface reqAppShuttleCheckPriceV3 {
    userBooking: reqAppShuttleCheckPriceUserBookingV3;
    orderData: reqAppShuttleCheckPriceOrderDataV3[];
    typeOrder: string;
    totalPrice: number | 0;
    isInsurance: boolean;

    isConnecting: boolean;
    isReturn: boolean;
    totalInsurance?: number;
    tokenData?: string;
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

    totalPriceTravelerPrev?: number;
    totalPriceInsurance?: number;
}

export interface reqAppShuttleCheckPriceTravelerV3 {
    name: string;
    title: string;
    idLayout?: string | "";
    seatNumber: string;
    price: number;
    priceNormal: number;
    pricePromo: number;

    passengerIdentity?: string;
    priceInsurance?: number;
    promoCode?: string;
}

export interface reqAppTravelokaCheckPriceV3 {
    orderData: reqAppTravelokaCheckPriceOrderDataV3[];
    userBooking: reqAppTravelokaCheckPriceUserBookingV3;
    typeOrder: string;
}

export interface reqAppTravelokaCheckPriceUserBookingV3 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppTravelokaCheckPriceOrderDataV3 {
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
    traveler: reqAppTravelokaCheckPriceTravelerV3[];
    totalPriceTraveler: number;
}

export interface reqAppTravelokaCheckPriceTravelerV3 {
    name: string;
    title: string;
    idLayout?: string | "";
    seatNumber: string;
    passengerIdentity: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
    
    promoCode?: string;
    priceInsurance?: number;
}

export interface reqAppTiketuxCheckPriceV3 {
    userBooking: reqAppTiketuxCheckPriceUserBookingV3;
    orderData: reqAppTiketuxCheckPriceOrderDataV3[];
    typeOrder: string;

    isInsurance: boolean;
    isReturn: boolean;
    isConnecting: boolean;
    totalPrice?: number;
    totalInsurance?: number;
    tokenData?: string;
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
    
    totalPriceTraveler?: number;
    totalPriceTravelerPrev?: number;
    totalPriceInsurance?: number;
}

export interface reqAppTiketuxCheckPriceTravelerV3 {
    name: string;
    title: string;
    idLayout?: string | "";
    seatNumber: string;
    
    promoCode?: string;
    price?: number;
    priceNormal?: number;
    pricePromo?: number;
    priceInsurance?: number;
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

    isTraveloka?: boolean;
    searchDeparture?: string;
    searchDestination?: string;
    departureDateReturn?: string;
    departureCounterReturn?: string;
    destinationCounterReturn?: string;
}

export interface reqAppKursiTiketuxV3 {
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