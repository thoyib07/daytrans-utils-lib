export interface reqAppKuyRegionKotaV3 {
  provinceId?: string;
  search?: string;
}
export interface reqAppKuyRegionKecamatanV3 {
  cityId?: string;
  search?: string;
}
export interface reqAppKuyRegionKelurahanV3 {
  districtId?: string;
  search?: string;
}
export interface reqAppKuyFindKelurahanV3 {
  provinceName?: string;
  cityName: string;
  districtName: string;
  subdistrictName?: string;
  zipCode?: string;
}
export interface reqAppKuyJenisLayananV3 {
  date: string;
  senderSubdistrictId: string;
  senderLat?: string;
  senderLon?: string;

  recipientSubdistrictId: string;
  recipientLat?: string;
  recipientLon?: string;
}
export interface reqAppKuyOutletV3 {
  id?: string;
  search?: string;
  subdistrictId?: string;
}
export interface reqAppKuyWaktuPickUpV3 {
  serviceType: string;
  date: string;
}
export interface reqAppKuyUkuranItemV3 {
  serviceType: string;
  senderSubdistrictId: string;
  recipientSubdistrictId: string;
}
export interface reqAppKuyInvoiceListV3 {
  phone: string;
}
export interface reqAppKuyInvoiceDetailV3 {
  invoiceCode: string;
}
export interface reqAppKuyPaketDetailV3 {
  receiptCode: string;
}
export interface reqAppKuyTrackingV3 {
  receiptCode: string;
}
export interface reqAppKuySNKV3 {
  code: string;
}
export interface reqAppKuyCekTarifV3 {
  serviceType: string;
  salesChannel: string;
  deliveryDate: string;
  senderPhone: string;
  walletDiscount: number;
  orderLists: reqAppKuyCekTarifOrderListsV3[]
}
export interface reqAppKuyCekTarifOrderListsV3 {
  pickupType: string;
  dropType: string;
  pickupPoolId: string;
  dropPoolId: string;
  senderLat: string;
  senderLon: string;
  senderSubdistrict_Id: string;
  recipientLat: string;
  recipientLon: string;
  recipientSubdistrictId: string;
  packageLists: reqAppKuyCekTarifOrderListPackageV3[]
}
export interface reqAppKuyCekTarifOrderListPackageV3 {
  itemType: string;
  weight: number;
  length: number;
  width: number;
  high: number;
  itemSizeId: number;
  insuranceFlag?: number | 0;
  itemValue?: number | 0;
}
export interface reqAppExpressOrderV3 {
  tokenData: string;
  paymentMethod: string;
  // isWallet?: boolean;
  voucherCode: string;
  // voucherEventCode?: string;
  useCashback: 0 | 1;
  card?: string;
}
export interface reqAppExpressGetPriceOrderV3 {
  originCity: reqAppExpressGetPriceOrderOriginCityV3;
  destinationCity: reqAppExpressGetPriceOrderDestinationCityV3[];
  serviceType: string;
  deliveryDate: string;
  pickupType: string;
  dropType: string;
  salesChannel?: string;
  payment?: {
    firstMile: number;
    lastMile: number;
    backBone: number;
    insurance: number;
    method: string;
    isAddict: 0 | 1;
    voucherCode: string;
  }
}
export interface reqAppExpressGetPriceOrderOriginCityV3 {
  subdistrictId: number;
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  address: string;
  latlng: string;
  estimatedPickUp: string;
  notedAddress?: string;
}
export interface reqAppExpressGetPriceOrderDestinationCityV3 {
  counterId?: string;
  isCounter: 0 | 1;
  insuranceFee: number;
  pickUpFee: number;
  shippingFee: number;
  deliveryFee: number;
  recipient: reqAppExpressGetPriceOrderDestinationCityRecipientV3;
  items: reqAppExpressGetPriceOrderDestinationCityItemsV3[];
}
export interface reqAppExpressGetPriceOrderDestinationCityRecipientV3 {
  subdistrictId: number;
  address: string;
  latlng: string;

  name: string;
  phone: string;
  note?: string;
}
export interface reqAppExpressGetPriceOrderDestinationCityItemsV3 {
  uniqueCode?: string;
  descriptionItem: string;
  weight: number;
  qty: number;
  dimensions: string;
  packageTypeId: number;
  packageType: string;
  sizeItemId: number;
  sizeItem: string;
  insuranceFlag: number;
  itemValue: number;
  shippingAmount: number;
  insuranceAmount: number;
}
export interface reqAppExpressGetOrderListV3 {
  page: number;
  limit: number;
}
export interface reqAppExpressGetOrderDetailV3 {
  id: number;
}