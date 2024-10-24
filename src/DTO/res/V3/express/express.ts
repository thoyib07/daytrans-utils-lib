import { reqAppExpressGetPriceOrderV3 } from "../../../req/V3/express";
import { resAppExpressGetPriceOrderListV2, resAppExpressGetPriceOrderPaketListV2, resAppExpressOrderDataItemV2, resAppExpressOrderDataRecipientV2, resAppExpressOrderDataV2, resAppExpressOrderPaymentV2, resAppExpressOrderSenderV2, resAppExpressOrderV2, resAppKuyCekTarifBiayaPengirimanListBiayaAsuransiDetailListV2, resAppKuyCekTarifBiayaPengirimanListV2, resAppKuyCekTarifV2, resAppKuyFindKelurahanV2, resAppKuyInvoiceDetailAsuransiDetailV2, resAppKuyInvoiceDetailBiayaPengirimanListV2, resAppKuyInvoiceDetailPaketlistV2, resAppKuyInvoiceDetailPaymentV2, resAppKuyInvoiceDetailPenerimaListV2, resAppKuyInvoiceDetailPengirimV2, resAppKuyInvoiceDetailV2, resAppKuyInvoiceListV2, resAppKuyJenisItemV2, resAppKuyJenisLayananV2, resAppKuyOutletV2, resAppKuyPaketDetailAsuransiDetailV2, resAppKuyPaketDetailLogPengirimanListFotoV2, resAppKuyPaketDetailLogPengirimanListKurirV2, resAppKuyPaketDetailLogPengirimanListPenerimaV2, resAppKuyPaketDetailLogPengirimanListV2, resAppKuyPaketDetailPengirimPenerimaV2, resAppKuyPaketDetailV2, resAppKuyPaymentListV2, resAppKuyRegionKecamatanV2, resAppKuyRegionKelurahanV2, resAppKuyRegionKotaV2, resAppKuyRegionProvinsiV2, resAppKuySNKV2, resAppKuyUkuranItemV2, resAppKuyWaktuPickUpV2 } from "../../V2/express";

export interface resAppKuyRegionProvinsiV3 extends resAppKuyRegionProvinsiV2 { }
export interface resAppKuyRegionKotaV3 extends resAppKuyRegionKotaV2 { }
export interface resAppKuyRegionKecamatanV3 extends resAppKuyRegionKecamatanV2 { }
export interface resAppKuyRegionKelurahanV3 extends resAppKuyRegionKelurahanV2 { }
export interface resAppKuyFindKelurahanV3 extends resAppKuyFindKelurahanV2 { }
export interface resAppKuyJenisLayananV3 extends resAppKuyJenisLayananV2 { }
export interface resAppKuyOutletV3 extends resAppKuyOutletV2 { }
export interface resAppKuyWaktuPickUpV3 extends resAppKuyWaktuPickUpV2 { }
export interface resAppKuyJenisItemV3 extends resAppKuyJenisItemV2 { }
export interface resAppKuyUkuranItemV3 extends resAppKuyUkuranItemV2 { }
export interface resAppKuyPaymentListV3 extends resAppKuyPaymentListV2 { }
export interface resAppKuyInvoiceListV3 extends resAppKuyInvoiceListV2 { }
export interface resAppKuyInvoiceDetailV3 extends resAppKuyInvoiceDetailV2 { }
export interface resAppKuyInvoiceDetailPaymentV3 extends resAppKuyInvoiceDetailPaymentV2 { }
export interface resAppKuyInvoiceDetailBiayaPengirimanListV3 extends resAppKuyInvoiceDetailBiayaPengirimanListV2 { }
export interface resAppKuyInvoiceDetailPenerimaListV3 extends resAppKuyInvoiceDetailPenerimaListV2 { }
export interface resAppKuyInvoiceDetailPaketlistV3 extends resAppKuyInvoiceDetailPaketlistV2 { }
export interface resAppKuyInvoiceDetailAsuransiDetailV3 extends resAppKuyInvoiceDetailAsuransiDetailV2 { }
export interface resAppKuyInvoiceDetailPengirimV3 extends resAppKuyInvoiceDetailPengirimV2 { }
export interface resAppKuyPaketDetailV3 extends resAppKuyPaketDetailV2 { }
export interface resAppKuyPaketDetailPengirimPenerimaV3 extends resAppKuyPaketDetailPengirimPenerimaV2 { }
export interface resAppKuyPaketDetailAsuransiDetailV3 extends resAppKuyPaketDetailAsuransiDetailV2 { }
export interface resAppKuyPaketDetailLogPengirimanListV3 extends resAppKuyPaketDetailLogPengirimanListV2 { }
export interface resAppKuyPaketDetailLogPengirimanListFotoV3 extends resAppKuyPaketDetailLogPengirimanListFotoV2 { }
export interface resAppKuyPaketDetailLogPengirimanListPenerimaV3 extends resAppKuyPaketDetailLogPengirimanListPenerimaV2 { }
export interface resAppKuyPaketDetailLogPengirimanListKurirV3 extends resAppKuyPaketDetailLogPengirimanListKurirV2 { }
export interface resAppKuySNKV3 extends resAppKuySNKV2 { }
export interface resAppKuyCekTarifV3 extends resAppKuyCekTarifV2 { }
export interface resAppKuyCekTarifBiayaPengirimanListV3 extends resAppKuyCekTarifBiayaPengirimanListV2 { }
export interface resAppKuyCekTarifBiayaPengirimanListBiayaAsuransiDetailListV3 extends resAppKuyCekTarifBiayaPengirimanListBiayaAsuransiDetailListV2 { }
export interface resAppExpressGetPriceOrderV3 extends reqAppExpressGetPriceOrderV3 { 
  firstMile: number;
  lastMile: number;
  backBone: number;
  insurance: number;
  orderSummary?: {
    firstMile: number;
    lastMile: number;
    backBone: number;
    insurance: number;
    serviceFee: number;
    serviceFeeDetail: string;
    voucher: number;
    addict: number;
    amount: number;
  }
  exp?: number;
}
export interface resAppExpressGetPriceOrderListV3 extends resAppExpressGetPriceOrderListV2 { }
export interface resAppExpressGetPriceOrderPengirimPenerimaV3 {
  telp: string;
  nama: string;
  alamat: string;
  detail_lokasi: string;
  lat: string;
  lon: string;
  kelurahan_id: number;
}
export interface resAppExpressGetPriceOrderPaketListV3 extends resAppExpressGetPriceOrderPaketListV2 { }
export interface resAppExpressOrderV3 extends resAppExpressOrderV2 { }
export interface resAppExpressOrderSenderV3 extends resAppExpressOrderSenderV2 { }
export interface resAppExpressOrderPaymentV3 extends resAppExpressOrderPaymentV2 { }
export interface resAppExpressOrderDataV3 extends resAppExpressOrderDataV2 { }
export interface resAppExpressOrderDataRecipientV3 extends resAppExpressOrderDataRecipientV2 { }
export interface resAppExpressOrderDataItemV3 extends resAppExpressOrderDataItemV2 { }