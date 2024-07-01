/**
 * API Region Kota
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/region/kota
 */
export interface reqAppKuyRegionKotaV2 {
  provinsi_id?: string;
}

/**
 * API Region Kecamatan
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/region/kecamatan
 */
export interface reqAppKuyRegionKecamatanV2 {
  kota_id?: string;
}

/**
 * API Region Kelurahan
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/region/kelurahan
 */
export interface reqAppKuyRegionKelurahanV2 {
  kecamatan_id?: string;
}

/**
 * API Find Kelurahan
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/find-kelurahan
 */
export interface reqAppKuyFindKelurahanV2 {
  provinsi_nama?: string;
  kota_nama: string;
  kecamatan_nama: string;
  kelurahan_nama?: string;
  kode_pos?: string;
}
export interface kuyPengirimPenerimaKelurahanId {
  pengirim_kelurahan_id: string;
  penerima_kelurahan_id: string;
  pengirim_lat: string;
  pengirim_lon: string;
  penerima_lat: string;
  penerima_lon: string;
}

/**
 * API Jenis Layanan KUY
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/jenisLayanan
 */
export interface reqAppKuyJenisLayananV2 extends Omit<kuyPengirimPenerimaKelurahanId, "pengirim_lat" | "pengirim_lon" | "penerima_lat" | "penerima_lon" > {
  tanggal: string;
  pengirim_lat?: string;
  pengirim_lon?: string;

  penerima_lat?: string;
  penerima_lon?: string;
}

/**
 * API Otlet KUY
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/outlet
 */
export interface reqAppKuyOutletV2 {
  id?: string;
  search?: string;
  kelurahan_id?: string;
}

/**
 * API Waktu KUY
 * @methode GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/waktuPickup
 */
export interface reqAppKuyWaktuPickUpV2 {
  jenis_layanan: string;
  tanggal: string;
}

/**
 * API Ukuran Item KUY
 * @methode GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/ukuranItem
 */
export interface reqAppKuyUkuranItemV2 extends kuyPengirimPenerimaKelurahanId {
  jenis_layanan: string;
}

/**
 * API Invoice List KUY
 * @methode GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/invoiceList
 */
export interface reqAppKuyInvoiceListV2 {
  no_telp: string;
}

/**
 * API Invoice Detail KUY
 * @methode GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/invoiceDetail
 */
export interface reqAppKuyInvoiceDetailV2 {
  invoice_kode: string;
}

/**
 * API Paket Detail KUY
 * @methode GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/paketDetail
 */
export interface reqAppKuyPaketDetailV2 {
  resi_kode: string;
}
// export interface reqAppKuyTrackingV2 {
//   resi_kode: string;
// }

/**
 * API SNK KUY
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/snk
 */
export interface reqAppKuySNKV2 {
  kode: string;
}

/**
 * API Cek Tarif KUY
 * @method POST
 * @link {{BASE_URL_EXPRESS}}v2/app/kuy/cekTarif
 */
export interface reqAppKuyCekTarifV2 {
  jenis_layanan: string;
  sales_channel: string;
  tgl_pengiriman: string;
  pemesan_telp: string;
  wallet_diskon: number;
  order_list: reqAppKuyCekTarifOrderListV2[]
}
export interface reqAppKuyCekTarifOrderListV2 extends kuyPengirimPenerimaKelurahanId {
  tipe_pickup: string;
  tipe_drop: string;
  pickup_pool_id: string;
  drop_pool_id: string;
  paket_list: reqAppKuyCekTarifOrderListPaketV2[]
}
export interface reqAppKuyCekTarifOrderListPaketV2 {
  jenis_item: string;
  berat_kg: number;
  panjang_cm: number;
  lebar_cm: number;
  tinggi_cm: number;
  ukuran_item_id: number;
  flag_asuransi?: number;
  nilai_barang?: number;
}