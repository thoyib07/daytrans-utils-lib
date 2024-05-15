export interface reqAppGetAllOrderV2 {
    page: number;
    limit: number;
    typeTrip: string;
    orderId: string;
}

export interface reqAppCreateOrderV2 {
    tokenData: string;
    paymentMethod: string;
    typeOrder: string;
    useCashback: boolean;

    voucherCode?: string;
    voucherEventCode?: string;
    isWallet?: boolean;
}

export interface reqAppReorderV2 {
    orderId: string;
    departureDate: string;
    returnDate?: string;
}

export interface reqAppCheckPriceV2 {
    userBooking: reqAppCheckPriceUserBookingV2;
    orderData: reqAppCheckPriceOrderDataV2[];
    typeOrder: string;
    isInsurance: boolean;

    isConnecting?: boolean;
    isReturn?: boolean;
    totalPrice?: number;
    totalInsurance?: number;
}

interface reqAppCheckPriceUserBookingV2 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

interface reqAppCheckPriceOrderDataV2 {
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
    traveler: reqAppCheckPriceTravelerV2[];
    totalPriceTraveler: number;

    totalPriceInsurance?: number;
}

interface reqAppCheckPriceTravelerV2 {
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

export interface reqAppCheckPriceTravelokaV2 {
    orderData: reqAppCheckPriceTravelokaOrderDataV2[];
    userBooking: reqAppCheckPriceTravelokaUserBookingV2;
    typeOrder: string;
}

interface reqAppCheckPriceTravelokaUserBookingV2 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

interface reqAppCheckPriceTravelokaOrderDataV2 {
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
    traveler: reqAppCheckPriceTravelokaTravelerV2[];
    totalPriceTraveler: number;
}

interface reqAppCheckPriceTravelokaTravelerV2 {
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

export interface reqAppCheckPriceTiketuxV2 {
    userBooking: reqAppCheckPriceTiketuxUserBookingV2;
    orderData: reqAppCheckPriceTiketuxOrderDataV2[];
    isInsurance?: boolean;
    isReturn?: boolean;
    isConnecting?: boolean;
}

interface reqAppCheckPriceTiketuxUserBookingV2 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

interface reqAppCheckPriceTiketuxOrderDataV2 {
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
    traveler: reqAppCheckPriceTiketuxTravelerV2[];
    totalPriceTraveler?: number;
}

interface reqAppCheckPriceTiketuxTravelerV2 {
    name: string;
    title: string;
    idLayout: string;
    seatNumber: string;
    promoCode: string;
    price?: number;
    priceNormal?: number;
    pricePromo?: number;
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
    searchDeparture?: string;
    searchDestination?: string;

    isReturn: boolean;
    isTraveloka?: boolean;

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