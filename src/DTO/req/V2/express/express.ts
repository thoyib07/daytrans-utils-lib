/**
 * API Order Express
 * @method POST
 * @link {{BASE_URL_EXPRESS}}v2/app/order
 */
export interface reqAppExpressOrderV2 {
  tokenData: string;
  paymentMethod: string;
  isWallet: boolean;
  voucherCode: string;
  voucherEventCode: string;
  useCashback: boolean;
}

/**
 * API Check Price Express
 * @method POST
 * @link {{BASE_URL_EXPRESS}}v2/app/order/check-price
 */
export interface reqAppExpressGetPriceOrderV2 {
  originCity: reqAppExpressGetPriceOrderOriginCityV2,
  destinationCity: reqAppExpressGetPriceOrderDestinationCityV2[],
  jenis_layanan: string;
  tgl_pengiriman: string;
  sales_channel?: string;
  tipe_pickup?: string;
  tipe_drop?: string;
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

/**
 * API Get List Order Express
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/order
 */
export interface reqAppExpressGetOrderListV2 {
  page: number;
  limit: number;
}

/**
 * API Get Detail Order Express
 * @method GET
 * @link {{BASE_URL_EXPRESS}}v2/app/order/:id
 */
export interface reqAppExpressGetOrderDetailV2 {
  id: number;
}