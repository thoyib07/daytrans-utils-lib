export interface reqAppKuyRegionKotaV2 {
  provinsi_id?: string;
}
export interface reqAppKuyRegionKecamatanV2 {
  kota_id?: string;
}
export interface reqAppKuyRegionKelurahanV2 {
  kecamatan_id?: string;
}
export interface reqAppKuyFindKelurahanV2 {
  provinsi_nama?: string;
  kota_nama: string;
  kecamatan_nama: string;
  kelurahan_nama?: string;
  kode_pos?: string;
}
export interface reqAppKuyJenisLayananV2 {
  tanggal: string;
  pengirim_kelurahan_id: string;
  pengirim_lat?: string;
  pengirim_lon?: string;

  penerima_kelurahan_id: string;
  penerima_lat?: string;
  penerima_lon?: string;
}
export interface reqAppKuyOutletV2 {
  id?: string;
  search?: string;
  kelurahan_id?: string;
}
export interface reqAppKuyWaktuPickUpV2 {
  jenis_layanan: string;
  tanggal: string;
}
export interface reqAppKuyUkuranItemV2 {
  jenis_layanan: string;
  pengirim_kelurahan_id: string;
  penerima_kelurahan_id: string;
}
export interface reqAppKuyInvoiceListV2 {
  no_telp: string;
}
export interface reqAppKuyInvoiceDetailV2 {
  invoice_kode: string;
}
export interface reqAppKuyPaketDetailV2 {
  resi_kode: string;
}
export interface reqAppKuyTrackingV2 {
  resi_kode: string;
}
export interface reqAppKuySNKV2 {
  kode: string;
}
export interface reqAppKuyCekTarifV2 {
  jenis_layanan: string;
  sales_channel: string;
  tgl_pengiriman: string;
  pemesan_telp: string;
  wallet_diskon: number;
  order_list: reqAppKuyCekTarifOrderListV2[]
}
export interface reqAppKuyCekTarifOrderListV2 {
  tipe_pickup: string;
  tipe_drop: string;
  pickup_pool_id: string;
  drop_pool_id: string;
  pengirim_lat: string;
  pengirim_lon: string;
  pengirim_kelurahan_id: string;
  penerima_lat: string;
  penerima_lon: string;
  penerima_kelurahan_id: string;
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
export interface reqAppExpressOrderV2 {
  tokenData: string;
  paymentMethod: string;
  isWallet: boolean;
  voucherCode: string;
  voucherEventCode: string;
  useCashback: boolean;
}
export interface reqAppExpressGetPriceOrderV2 {
  originCity: reqAppExpressGetPriceOrderOriginCityV2,
  destinationCity: reqAppExpressGetPriceOrderDestinationCityV2[],
  jenis_layanan: string;
  tgl_pengiriman: string;
  sales_channel?: string;
  tipe_pickup?: string;
  tipe_drop?: string;
}
export interface reqAppExpressGetPriceOrderDestinationCityV2 {
  counterId?: string;
  isCounter: boolean;
  recipient: reqAppExpressGetPriceOrderDestinationCityRecipientV2,
  item: reqAppExpressGetPriceOrderDestinationCityItemsV2[],
  biaya_asuransi: number;
  biaya_jemput: number;
  biaya_pengiriman: number;
  biaya_antar: number;
}
export interface reqAppExpressGetPriceOrderDestinationCityRecipientV2 {
  kelurahanId: number;
  address: string;
  latlng: string;

  name?: string;
  phone?: string;
  note?: string;
}
export interface reqAppExpressGetPriceOrderDestinationCityItemsV2 {
  descriptionItem: string;
  weight: number;
  quantity: number;
  dimensions: string;
  packageTypeId: string;
  packageType: string;
  sizeItemId: string;
  sizeItem: string;
  flag_asuransi: number;
  nilai_barang: number;
  nominal_pengiriman: number;
  nominal_asuransi: number;
}
export interface reqAppExpressGetPriceOrderOriginCityV2 {
  kelurahanId: number;
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  address: string;
  notedAddress?: string;
  latlng: string;
  estimatedPickUp: string;
}
export interface reqAppExpressGetOrderListV2 {
  page: number;
  limit: number;
}
export interface reqAppExpressGetOrderDetailV2 {
  id: number;
}