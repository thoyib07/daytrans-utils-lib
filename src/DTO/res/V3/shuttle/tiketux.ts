import { reqAppShuttleCheckPriceV2 } from "../../../req/V2/shuttle"
import { resAPITiketuxJadwalSchedule, resAPITiketuxKursi } from "../../V2/shuttle";
export interface baseTiketuxAsalTujuanV3 {
  outlet: resAPITiketuxOutlet[];
  kota: resAPITiketuxKota[];
}

export interface resAPITiketuxKota {
  nama: string;
  kode: string;

  kodeTraveloka?: string | "";
  group?: string | "";
  img?: string | "";
}

export interface resAPITiketuxOutlet {
  id: string;
  group: string;
  kode: string;
  nama: string;
  telpon: string;
  alamat: string;
  latitude: string;
  longitude: string;
  kota: string;
  flag_agen: string;
  flag_aktif: string;
  img: string | null;
  code: string;

  kode_kota?: string | "";
  flag_bandara?: number | 0;
  flag_virtual_outlet?: number | 0;
  url_map_tujuan?: string | "";
  list_img?: any[];
  min_tarif?: number | 0;
  max_tarif?: number | 0;
  range_tarif?: string | "";
  cabang_tujuan?: string | "";
  kota_tujuan?: string | "";
  url_map?: string | null;
  distance?: number | 0;
}

/**
 * API Asal Tiketux
 * @link {{BASE_URL_SHUTTLE}}V3/app/tiketux/asal2?search={{SEARCH_ASAL}}&lat={{LAT}}&long={{LONG}}
 */
export interface resAppTiketuxAsalV3 extends baseTiketuxAsalTujuanV3 { }

/**
 * API Tujuan Tiketux
 * @link {{BASE_URL_SHUTTLE}}V3/app/tiketux/tujuan2?asal={{ASAL}}&search={{SEARCH_TUJUAN}}
 */
export interface resAppTiketuxTujuanV3 extends baseTiketuxAsalTujuanV3 { }

/**
 * API Jadwal Tiketux
 * @link {{BASE_URL_SHUTTLE}}v3/app/tiketux/jadwal?departureDate={{departureDate}}&departureCounter={{departureCounter}}&destinationCounter={{destinationCounter}}&qty={{qty}}
 */
export interface resAppTiketuxJadwalV3 {
  schedule: resAPITiketuxJadwalSchedule[];
  departureCounter: string[];
  destinationCounter: string[];
}

/**
 * API Kursi Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/tiketux/kursi?scheduleCode={{scheduleCode}}&departureCounter={{departureCounter}}&destinationCounter={{destinationCounter}}&departureDate={{departureDate}}&isReturn={{isReturn}}&isInsurance={{isInsurance}}&isTraveloka={{isTraveloka}}
 */
export interface resAppTiketuxKursiV3 extends resAPITiketuxKursi { }