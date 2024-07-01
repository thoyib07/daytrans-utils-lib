import { reqAppShuttleCheckPriceTravelokaV2, reqAppShuttleCheckPriceV2 } from "../../../req/V2/shuttle";
import { resAPITiketuxJadwalSchedule, resAPITiketuxKursi } from "./tiketux";

/**
 * API Detail Order Shuttel
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/:orderId
 */
export interface resAppShuttleGetDetailOrderV2 {
    id: number;
    customerId: number;
    orderId: string;
    bookingName: string;
    bookingTitle: string;
    bookingPhone: string;
    bookingEmail: string;
    bookingCode: string;
    pnrCode: string;
    providerName: string;
    departureDate: string;
    arrivalDate: string;
    departureCounter: string;
    departureCounterId: string;
    destinationCounter: string;
    destinationCounterId: string;
    departureCity: string;
    destinationCity: string;
    scheduleCode: string;
    totalAmount: number;
    totalInsurance: number;
    typeTrip: string;
    isConnecting: boolean;
    isPP: boolean;
    otp: string;
    cashbackPoint: number;
    useCashback: boolean;
    paidStatus: string;
    bookingStatus: string;
    typeOrder: string;
    createdAt: string;
    updatedAt: string;
    traveler: resAppShuttleGetDetailOrderTravelerV2[];
    review: any;
    payment: resAppShuttleGetDetailOrderPaymentV2[];
}

export interface resAppShuttleGetDetailOrderPaymentV2 {
    id: number;
    customerId: number;
    orderId: string;
    invoiceNo: string;
    paymentCode: string;
    paymentPrefix: string;
    paymentAmount: number;
    serviceFee: number;
    serviceFeeInfo: string;
    walletUse: number;
    addictUse: number;
    addictReward: number;
    discountCode: string;
    discountPrice: number;
    discountEventCode: string;
    discountEventPrice: number;
    paymentMethod: string;
    paymentStatus: string;
    expiredTime: string;
    paidTime: string;
    createdAt: string;
    updatedAt: string;
}

export interface resAppShuttleGetDetailOrderTravelerV2 {
    id: number;
    orderId: string;
    name: string;
    title: string;
    seatNumber: number;
    tiketNumber: string;
    qrcode: string;
    price: number;
    pricePromo: number;
    priceNormal: number;
    insured: boolean;
    priceInsurance: number;
    createdAt: string;
    updatedAt: string;
}

/**
 * API List Order Shuttle
 * @link {{BASE_URL_SHUTTLE}}v2/app/order
 */
export interface resAppShuttleGetAllOrderV2 {
    id: number;
    customerId: number;
    orderId: string;
    bookingName: string;
    bookingTitle: string;
    bookingPhone: string;
    bookingEmail: string;
    bookingCode: string;
    pnrCode: string;
    providerName: string;
    departureDate: string;
    arrivalDate: string;
    departureCounter: string;
    departureCounterId: string;
    destinationCounter: string;
    destinationCounterId: string;
    departureCity: string;
    destinationCity: string;
    scheduleCode: string;
    totalAmount: number;
    totalInsurance: number;
    typeTrip: string;
    isConnecting: boolean;
    isPP: boolean;
    otp: string;
    cashbackPoint: number;
    useCashback: boolean;
    paidStatus: string;
    bookingStatus: string;
    typeOrder: string;
    createdAt: string;
    updatedAt: string;
    traveler: resAppShuttleGetAllOrderTravelerV2[];
    review: any;
    payment: resAppShuttleGetAllOrderPaymentV2[];
}

export interface resAppShuttleGetAllOrderPaymentV2 {
    id: number;
    orderId: string;
    paymentCode: string;
    paymentPrefix: string;
    paymentAmount: number;
    serviceFee: number;
    serviceFeeInfo: string;
    walletUse: number;
    addictUse: number;
    addictReward: number;
    discountCode: string;
    discountPrice: number;
    discountEventCode: string;
    discountEventPrice: number;
    paymentMethod: string;
    paymentStatus: string;
    expiredTime: string;
    paidTime: string;
    '3dsData': string;
}

export interface resAppShuttleGetAllOrderTravelerV2 {
    id: number;
    orderId: string;
    name: string;
    title: string;
    noKTP: string;
    seatNumber: string;
    tiketNumber: string;
    qrcode: string;
    price: number;
    pricePromo: number;
    priceNormal: number;
    insured: boolean;
    priceInsurance: number;
    createdAt: string;
    updatedAt: string;
}

/**
 * API Eticket Shuttle
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/eticket/:orderId
 */
export interface resAppShuttleEticketV2 extends resAppShuttleGetDetailOrderV2 { }

/**
 * API Reorder Shuttle
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/reorder
 */
export interface resAppShuttleReorderV2 {
    order: resAppShuttleReorderOrderV2[];
    screen: string;
    message: string;
    dataCheck: string;
    dataSchedule: resAPITiketuxJadwalSchedule;
    dataSeat: resAPITiketuxKursi[];
}

export interface resAppShuttleReorderOrderV2 {
    id: number;
    customerId: number;
    orderId: string;
    bookingName: string;
    bookingTitle: string;
    bookingPhone: string;
    bookingEmail: string;
    bookingCode: string;
    pnrCode: string;
    providerId: string;
    providerName: string;
    departureDate: string;
    arrivalDate: string;
    departureCounter: string;
    departureCounterId: string;
    destinationCounter: string;
    destinationCounterId: string;
    departureCity: string;
    destinationCity: string;
    scheduleCode: string;
    totalAmount: number;
    totalInsurance: number;
    paidStatus: string;
    bookingStatus: string;
    otp: string;
    typeTrip: string;
    isConnecting: boolean;
    isPP: boolean;
    cashbackPoint: number;
    useCashback: boolean;
    typeOrder: string;
    addictRewardStatus: string;
    mainOrder: boolean;
    version: string;
    platform: string;
    createdAt: string;
    updatedAt: string;
    traveler: resAppShuttleGetAllOrderTravelerV2[];
}

/**
 * API Order Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/order
 */
export interface resAppShuttleOrderV2 {
    orderData: resAppShuttleOrderOrderDataV2[];
    payment: resAppShuttleOrderPaymentV2;
}

export interface resAppShuttleOrderPaymentV2 {
    customerId: number;
    orderId: string;
    invoiceNo: string;
    paymentCode: string;
    paymentPrefix: string;
    paymentAmount: number;
    serviceFee: number;
    serviceFeeInfo: string;
    walletUse: number;
    addictUse: number;
    discountCode: string;
    discountPrice: number;
    paymentMethod: string;
    paymentStatus: string;
    paidTime: string;
    expiredTime: string;
    bookingStatus: any[];
}

export interface resAppShuttleOrderOrderDataV2 {
    customerId: number;
    orderId: string;
    bookingName: string;
    bookingTitle: string;
    bookingPhone: string;
    bookingEmail: string;
    bookingCode: string;
    providerId: string;
    providerName: string;
    departureDate: string;
    arrivalDate: string;
    departureCounter: string;
    departureCounterId: string;
    destinationCounter: string;
    destinationCounterId: string;
    departureCity: string;
    destinationCity: string;
    scheduleCode: string;
    totalAmount: number;
    totalInsurance: number;
    typeTrip: string;
    traveler: resAppShuttleOrderTravelerV2[];
    cashbackPoint: number;
    useCashback: boolean;
    typeOrder: string;
    version: string;
    platform: string;
}

export interface resAppShuttleOrderTravelerV2 {
    orderId: number;
    scheduleCode: string;
    name: string;
    title: string;
    idLayout: string;
    seatNumber: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
    tiketNumber: string;
    qrcode: string;
    insured: boolean;
    priceInsurance: number;
}

/**
 * API Check Price Tiketux
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/check/price
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/check/price
 */
export interface resAppShuttleCheckPriceV2 extends reqAppShuttleCheckPriceV2 {
    totalInsurance: number;
    totalPrice: number;
    tokenData: string;
}

/**
 * API Check Price Traveloka Shuttle
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v2/app/order/check/price
 */
export interface resAppShuttleCheckPriceTravelokaV2 extends reqAppShuttleCheckPriceTravelokaV2 {
    totalInsurance: number;
    totalPrice: number;
    tokenData: string;
}