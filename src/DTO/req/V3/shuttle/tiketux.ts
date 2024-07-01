export interface baseTiketuxKursiV3 {
  destinationCounter: string;
  departureCounter: string;
  departureDate: string;
  scheduleCode: string;
}
/**
 * API Asal Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/tiketux/asal2?search={{SEARCH}}&lat={{LAT}}&long={{LONG}}
 */
export interface reqAppTiketuxAsalV3 {
  search: string;
  lat: string;
  long: string;
}

/**
 * API Tujuan Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/tiketux/tujuan2?departureCounter={{departureCounter}}&search={{SEARCH}}
 */
export interface reqAppTiketuxTujuanV3 extends Pick<baseTiketuxKursiV3, "departureCounter"> {
  search: string;
  isTraveloka: false;
}

/**
 * API Jadwal Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/tiketux/jadwal?departureDate={{departureDate}}&departureCounter={{departureCounter}}&destinationCounter={{destinationCounter}}&qty={{qty}}
 */
export interface reqAppTiketuxJadwalV3 extends Omit<baseTiketuxKursiV3, "scheduleCode"> {
  qty: number;
  isReturn: boolean;
  isTraveloka: false;

  searchDeparture?: string | "";
  searchDestination?: string | "";
  departureDateReturn?: string | "";
  departureCounterReturn?: string | "";
  destinationCounterReturn?: string | "";
}

/**
 * API Kursi Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/tiketux/kursi?scheduleCode={{scheduleCode}}&departureCounter={{departureCounter}}&destinationCounter={{destinationCounter}}&departureDate={{departureDate}}&isReturn={{isReturn}}&isInsurance={{isInsurance}}&isTraveloka={{isTraveloka}}
 */
export interface reqAppTiketuxKursiV3 extends baseTiketuxKursiV3 {
  isTraveloka: false;

  isInsurance?: boolean | false;
  isReturn?: boolean | false;
  isConnecting?: boolean | false;
  scheduleCodeReturn?: string | "";
  departureDateReturn?: string | "";
  departureCounterReturn?: string | "";
  destinationCounterReturn?: string | "";
}

/**
 * API Check Price Tiketux
 * @method POST
 * @link {{BASE_URL_SHUTTLE}}v3/app/order/check/price
 */
// export interface reqAppTiketuxCheckPriceV3 {
//   userBooking: reqAppTiketuxCheckPriceUserBookingV3;
//   orderData: reqAppTiketuxCheckPriceOrderDataV3[];
//   typeOrder: string;

//   isInsurance: boolean;
//   isReturn: boolean;
//   isConnecting: boolean;
//   totalPrice?: number | 0;
//   totalInsurance?: number | 0;
//   tokenData?: string | "";
// }

// export interface reqAppTiketuxCheckPriceUserBookingV3 {
//   name: string;
//   title: string;
//   phone: string;
//   email: string;
// }

// export interface reqAppTiketuxCheckPriceOrderDataV3 {
//   departureDate: string;
//   departureTime: string;
//   departureCounter: string;
//   departureCounterId: string;
//   departureCity: string;
//   destinationCounterId: string;
//   destinationCounter: string;
//   destinationCity: string;
//   estimatedTravelTime: number;
//   scheduleCode: string;
//   traveler: reqAppTiketuxCheckPriceTravelerV3[];
  
//   totalPriceTraveler?: number | 0;
//   totalPriceTravelerPrev?: number | 0;
//   totalPriceInsurance?: number | 0;
// }

// export interface reqAppTiketuxCheckPriceTravelerV3 {
//   name: string;
//   title: string;
//   idLayout?: string | "";
//   seatNumber: string;
  
//   promoCode?: string | "";
//   price?: number | 0;
//   priceNormal?: number | 0;
//   pricePromo?: number | 0;
//   priceInsurance?: number | 0;
// }