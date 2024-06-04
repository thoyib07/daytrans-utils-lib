export interface reqAppShuttleGetDetailOrderV2 {
    orderId: string;
}

export interface reqAppShuttleGetAllOrderV2 {
    page: number;
    limit: number;
    typeTrip: string;
    orderId: string;
}

export interface reqAppShuttleReorderV2 {
    orderId: string;
    departureDate: string;

    returnDate?: string;
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

export interface reqAppShuttleCheckPriceV2 {
    userBooking: reqAppShuttleCheckPriceUserBookingV2;
    orderData: reqAppShuttleCheckPriceOrderDataV2[];
    typeOrder: string;
    isasuransi: boolean;

    isconnecting?: boolean;
    ispp?: boolean;
    totalPrice?: number;
    totalInsurance?: number;
}

export interface reqAppShuttleCheckPriceUserBookingV2 {
    nama: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppShuttleCheckPriceOrderDataV2 {
    // typeTrip: string;
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
    id_layout: string;
    seatNumber: string;
    price: number;
    priceNormal: number;
    pricePromo: number;

    passengerIdentity?: string;
    priceInsurance?: number;
    kodePromo?: string;
}

export interface reqAppShuttleCheckPriceTravelokaV2 {
    orderData: reqAppShuttleCheckPriceTravelokaOrderDataV2[];
    userBooking: reqAppShuttleCheckPriceTravelokaUserBookingV2;
    typeOrder: string;
}

export interface reqAppShuttleCheckPriceTravelokaUserBookingV2 {
    nama: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppShuttleCheckPriceTravelokaOrderDataV2 {
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
    traveler: reqAppShuttleCheckPriceTravelokaTravelerV2[];
    totalPriceTraveler: number;
}

export interface reqAppShuttleCheckPriceTravelokaTravelerV2 {
    name: string;
    title: string;
    id_layout: string;
    seatNumber: string;
    passengerIdentity: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
    kodePromo: string;
}

export interface reqAppTiketuxCheckPriceV2 {
    userBooking: reqAppTiketuxCheckPriceUserBookingV2;
    orderData: reqAppTiketuxCheckPriceOrderDataV2[];
    typeOrder: string;

    isasuransi?: boolean;
    ispp?: boolean;
    isconnecting?: boolean;
    totalPrice?: number;
    totalInsurance?: number;
    tokenData?: string;
}

export interface reqAppTiketuxCheckPriceUserBookingV2 {
    nama: string;
    title: string;
    phone: string;
    email: string;
}

export interface reqAppTiketuxCheckPriceOrderDataV2 {
    typeTrip: string;
    departureDate: string;
    departureTime: string;
    departureCounter: string;
    departureCounterId: string;
    departureCity: string;

    estimatedTravelTime: number;

    destinationCounter: string;
    destinationCounterId: string;
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
    id_layout: string;
    seatNumber: string;
    promoCode: string;

    passengerIdentity?: string;
    price?: number;
    priceNormal?: number;
    pricePromo?: number;
    priceInsurance?: number;
    kodePromo?: string;
}

export interface reqAppTiketuxAsalV2 {
    search: string;
    lat: string;
    long: string;
}

export interface reqAppTiketuxTujuanV2 {
    asal: string;
    isTraveloka: boolean;
    search?: string;
}

export interface reqAppTiketuxJadwalV2 {
    tgl_berangkat: string;
    asal: string;
    tujuan: string;
    jumlahpenumpang: number;

    ispp?: boolean;
    isTraveloka?: boolean;
    search_asal?: string;
    search_tujuan?: string;
    tgl_berangkat_pp?: string;
    asal_pp?: string;
    tujuan_pp?: string;
}

export interface reqAppTiketuxKursiV2 {
    kode_jadwal: string;
    tgl_berangkat: string;
    asal: string;
    tujuan: string;

    isasuransi?: boolean;
    ispp?: boolean;
    isconnecting?: boolean;
    isTraveloka?: boolean;
    kode_jadwal_pp?: string;
    tgl_berangkat_pp?: string;
    asal_pp?: string;
    tujuan_pp?: string;
}
export interface reqAppTravelokaCityV2 {
    limit: number,
    page: number,
    search: string
}