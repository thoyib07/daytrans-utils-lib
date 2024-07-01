// export interface reqAppTiketuxCheckPriceV2<reqAppTiketuxCheckPriceUserBookingV2, reqAppTiketuxCheckPriceOrderDataV2> {
//   userBooking: reqAppTiketuxCheckPriceUserBookingV2;
//   orderData: reqAppTiketuxCheckPriceOrderDataV2[];
//   typeOrder: string;

//   isasuransi?: boolean | false;
//   ispp?: boolean | false;
//   isconnecting?: boolean | false;
// }

// export interface reqAppTiketuxCheckPriceUserBookingV2 {
//   nama: string;
//   title: string;
//   phone: string;
//   email: string;
// }

// export interface reqAppTiketuxCheckPriceOrderDataV2 {
//   typeTrip: string;
//   departureDate: string;
//   departureTime: string;
//   departureCounter: string;
//   departureCounterId: string;
//   departureCity: string;

//   estimatedTravelTime: number;
  
//   destinationCounter: string;
//   destinationCounterId: string;
//   destinationCity: string;
//   scheduleCode: string;
//   traveler: reqAppTiketuxCheckPriceTravelerV2[];

//   totalPriceTraveler?: number | 0;
//   totalPriceTravelerPrev?: number | 0;
//   totalPriceInsurance?: number | 0;
// }

// export interface reqAppTiketuxCheckPriceTravelerV2 {
//   name: string;
//   title: string;
//   id_layout: string;
//   seatNumber: string;
//   promoCode: string;

//   passengerIdentity?: string | "";
//   price?: number | 0;
//   priceNormal?: number | 0;
//   pricePromo?: number | 0;
//   priceInsurance?: number | 0;
//   kodePromo?: string | "";
// }
export interface baseTiketuxKursi {
  kode_jadwal: string;
  tgl_berangkat: string;
  asal: string;
  tujuan: string;
}

/**
 * API Asal Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/asal2?search={{SEARCH_ASAL}}&lat={{LAT}}&long={{LONG}}
 */
export interface reqAppTiketuxAsalV2 {
  search: string;
  lat: string;
  long: string;
}

/**
 * API Tujuan Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/tujuan2?asal={{ASAL}}&search={{SEARCH_TUJUAN}}
 */
export interface reqAppTiketuxTujuanV2 extends Pick<baseTiketuxKursi, "asal">{
  isTraveloka: false;
  
  search?: string | "";
}

/**
 * API Jadwal Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/jadwal?tgl_berangkat={{TGL_BERANGKAT}}&asal={{ASAL}}&tujuan={{TUJUAN}}&jumlahpenumpang={{JML_PENUMPANG}}
 */
export interface reqAppTiketuxJadwalV2 extends Omit<baseTiketuxKursi, "kode_jadwal"> {
  jumlahpenumpang: number;
  isTraveloka: false;

  ispp?: boolean | false;
  search_asal?: string | "";
  search_tujuan?: string | "";
  tgl_berangkat_pp?: string | "";
  asal_pp?: string | "";
  tujuan_pp?: string | "";
}

/**
 * API Kursi Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/kursi?kode_jadwal={{KODE_JADWAL}}&tgl_berangkat={{TGL_BERANGKAT}}&isasuransi=true&asal={{ASAL}}&tujuan={{TUJUAN}}
 */
export interface reqAppTiketuxKursiV2 extends baseTiketuxKursi {
  isTraveloka: false;

  isasuransi?: boolean | false;
  ispp?: boolean | false;
  isconnecting?: boolean | false;
  kode_jadwal_pp?: string | "";
  tgl_berangkat_pp?: string | "";
  asal_pp?: string | "";
  tujuan_pp?: string | "";
}