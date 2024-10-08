import { reqAppShuttleCheckPriceV2 } from "../../../req/V2/shuttle"
export interface baseTiketuxAsalTujuanV2 {
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
  kode: string;
  nama: string;
  telpon: string;
  alamat: string;
  latitude: string;
  longitude: string;
  kota: string;
  code: string;
  
  img?: string | null;
  group?: string | null;
  kode_kota?: string | "";
  flag_aktif?: number | 0;
  flag_agen?: number | 0;
  flag_bandara?: number | 0;
  flag_virtual_outlet?: number | 0;
  url_map_tujuan?: string | "";
  list_img?: any[];
  min_tarif?: number | 0;
  max_tarif?: number | 0;
  range_tarif?: string | "";
  range_tarif_pp?: string | "";
  cabang_tujuan?: string | "";
  kota_tujuan?: string | "";
  url_map?: string | null;
  distance?: number | 0;
}

export interface resAPITiketuxJadwalSchedule {
  id_produk: string;
  kode_produk?: string;
  rute: string;
  id_outlet_pickup: string;
  nama_outlet_pickup: string;
  alamat_outlet_pickup: string;
  maps_outlet_pickup: string;
  id_outlet_dropoff: string;
  nama_outlet_dropoff: string;
  alamat_outlet_dropoff: string;
  maps_outlet_dropoff: string;
  estimasi_waktu_tempuh?: number;
  estimasi_waktu_tempuh_menit: number;
  estimasi_waktu_tempuh_str: string;
  tgl_berangkat_induk: string;
  tgl_berangkat: string;
  jam_berangkat: string;
  tgl_sampai?: string;
  jam_sampai?: string;
  max_waktu_book?: string;
  id_layanan?: string;
  nama_layanan: string;
  tipe_kendaraan?: string;
  tarif?: number;
  range_tarif: string;
  max_tarif: number;
  min_tarif: number;
  range_tarif_disc: string;
  min_tarif_disc: number;
  max_tarif_disc: number;
  biaya_addon_mutasi?: number;
  jumlah_kursi: number;
  sisa_kursi: number;
  kursi_terisi?: number;
  keterangan?: string;
  is_jadwal_dioperasikan?: string;
  is_jadwal_lewat?: number;
  show_btn_wa?: number;
  is_waktu_verify?: number;
  is_waktu_verify_maskapai?: number;
  is_pilih_kursi?: number;
  show_area_antar_jemput?: number;
  is_transit: number;
  is_connecting: number;
  operator: string;
  detail_rute?: string;
  harga_tiket?: number;
  layout_kursi?: number;
  jumlah_booking?: number;
  is_sold: boolean;
  promo: resAPITiketuxJadwalPromo[];
  list_transit: resAPITiketuxJadwalListTransit[];
  list_transit_connecting: resAPITiketuxJadwalListTransitConnecting[];
  list_connecting: resAPITiketuxJadwalListTransitConnecting[];
}

export interface resAPITiketuxJadwalListTransitConnecting {
  tgl_berangkat: string;
  jam_berangkat: string;
  id_produk?: string;
  kode_produk?: string;
  id_outlet_pickup?: string;
  nama_outlet_pickup: string;
  kota_outlet_pickup?: string;
  id_outlet_dropoff?: string;
  nama_outlet_dropoff?: string;
  kota_outlet_dropoff?: string;
  ewt_connecting?: number;
  tarif?: number;
  min_tarif?: number;
  max_tarif?: number;
  waktu_tunggu?: number;
  tgl_sampai?: string;
  jam_sampai?: string;
}

export interface resAPITiketuxJadwalListTransit {
  nama: string;
  ewt_menit: number;
  jam: string;
}

export interface resAPITiketuxJadwalPromo {
  kode_promo: string;
  nama_promo: string;
  nominal: number;
  kursi: string;
}

export interface resAPITiketuxKursi {
  tipe_kendaraan: string;
  baris: string;
  kolom: string;
  kapasitas: string;
  no_manifest: string | null;
  kode_kendaraan: string | null;
  no_polisi: string | null;
  kode_driver: string | null;
  nama_driver: string | null;
  totalpenumpang: string;
  peta_layout: resAPITiketuxKursiPetaLayout[];
  asuransi: number | null;
  id_layout: string;
  idProduct?: null | string;
  
  petalayout?: {
    [key: string]: resAPITiketuxKursiPetaLayout;
  };
  isjemput?: string | "";
  jemputminfree?: string | "";
  jemputbiayadalamarea?: string | "";
  jemputmindalamarea?: string | "";
  jemputbiayaluararea?: string | "";
  jemputminluararea?: string | "";
  isantar?: string | "";
  antarminfree?: string | "";
  antarbiayadalamarea?: string | "";
  antarmindalamarea?: string | "";
  antarbiayaluararea?: string | "";
  antarminluararea?: string | "";
  peta_layout_pp?: resAPITiketuxKursiPetaLayout[];
  metodepenjualan?: null | string;
  totalkuota?: null | string;
  totalpenumpangagen?: number;
  totalpenumpang_pp?: string;
  metodepenjualan_pp?: string;
  totalkuota_pp?: string;
  totalpenumpangagen_pp?: string;
  baris_pp?: string;
  kolom_pp?: string;
  kapasitas_pp?: string;
  petalayout_pp?: {
    [key: string]: resAPITiketuxKursiPetaLayout;
  };
}

export interface resAPITiketuxKursiPetaLayout {
  row: number;
  col: number;
  asuransi: number;
  seatPrice: number;
  status: string;
  label: string;
  tglberangkat: null | string;
  idproduk: null | string;
  hargatiket: number;
  kodepromo: string;
  namapromo: string;
  nominal: number;
  totalbayar: number;
  issmoking: number;

  kodejadwal?: string | null;
  idoutletpickup?: null | string;
  idoutletdropoff?: null | string;
  dek?: null | string;
  notiket?: null | string;
  kodebooking?: null | string;
  nama?: null | string;
  namapenumpang?: string | null;
  istransit?: number;
  iscetaktiket?: null | string;
  jenispembayaran?: null | string;
  isboarding?: null | string;
  waktupesan?: null | string;
  isagenverified?: number;
}

/**
 * API Asal Tiketux
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/asal2?search={{SEARCH_ASAL}}&lat={{LAT}}&long={{LONG}}
 */
export interface resAppTiketuxAsalV2 extends baseTiketuxAsalTujuanV2 {
}

/**
 * API Tujuan Tiketux
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/tujuan2?asal={{ASAL}}&search={{SEARCH_TUJUAN}}
 */
export interface resAppTiketuxTujuanV2 extends baseTiketuxAsalTujuanV2 {
}

/**
 * API Jadwal Tiketux
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/jadwal?tgl_berangkat={{TGL_BERANGKAT}}&asal={{ASAL}}&tujuan={{TUJUAN}}&jumlahpenumpang={{JML_PENUMPANG}}
 */
export interface resAppTiketuxJadwalV2 {
  data: resAPITiketuxJadwalSchedule[];
  departureCounter?: {
    id: string;
    name: string;
  }[];
  destinationCounter?: {
    id: string;
    name: string;
  }[];
  paging?: any | "";
  pagingpp?: any | "";
}

/**
 * API Kursi Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/kursi?kode_jadwal={{KODE_JADWAL}}&tgl_berangkat={{TGL_BERANGKAT}}&isasuransi=true&asal={{ASAL}}&tujuan={{TUJUAN}}
 */
export interface resAppTiketuxKursiV2 extends resAPITiketuxKursi { }

/**
 * API Check Price Tiketux
 * @method GET
 * @link {{BASE_URL_SHUTTLE}}v2/app/tiketux/check/price
 */
export interface resAppTiketuxCheckPriceV2 extends reqAppShuttleCheckPriceV2 {
  totalInsurance: number;
  totalPrice: number;
  tokenData: string;
}