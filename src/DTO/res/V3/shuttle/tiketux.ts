import { reqAppShuttleCheckPriceV2 } from "../../../req/V2/shuttle"
import { resAPITiketuxJadwalSchedule, resAPITiketuxKursi, resAPITiketuxKota, resAPITiketuxOutlet, resAppTiketuxJadwalV2 } from "../../V2/shuttle";
export interface baseTiketuxAsalTujuanV3 {
  outlet: resAPITiketuxOutlet[];
  kota: resAPITiketuxKota[];
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
export interface resAppTiketuxJadwalV3 extends Omit<resAppTiketuxJadwalV2,"data">{
  schedule: resAPITiketuxJadwalSchedule[];
}

/**
 * API Kursi Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v3/app/tiketux/kursi?scheduleCode={{scheduleCode}}&departureCounter={{departureCounter}}&destinationCounter={{destinationCounter}}&departureDate={{departureDate}}&isReturn={{isReturn}}&isInsurance={{isInsurance}}&isTraveloka={{isTraveloka}}
 */
export interface resAppTiketuxKursiV3 extends resAPITiketuxKursi { }