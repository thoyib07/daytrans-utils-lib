export interface resAppKuyRegionProvinsiV3 {
  provinsi_list: {
    provinsi_id: number;
    provinsi_nama: string;
  }[];
}
export interface resAppKuyRegionKotaV3 {
  kota_list: {
    kota_id: number;
    kota_nama: string;
    provinsi_nama: string;
  }[];
}
export interface resAppKuyRegionKecamatanV3 {
  kecamatan_list: {
    kecamatan_id: number;
    kecamatan_nama: string;
    kota_nama: string;
    provinsi_nama: string;
  }[];
}
export interface resAppKuyRegionKelurahanV3 {
  kelurahan_list: {
    kelurahan_id: number;
    kelurahan_kode_pos: string;
    kelurahan_nama: string;
    kecamatan_nama: string;
    kota_nama: string;
    provinsi_nama: string;
  }[];
}
export interface resAppKuyFindKelurahanV3 {
  kelurahan_list: {
    id: number;
    kode_pos: string;
    nama: string;
  }[];
}
export interface resAppKuyJenisLayananV3 {
  jenis_layanan_list: {
    kode: string;
    nama: string;
    is_close: number;
  }[];
}
export interface resAppKuyOutletV3 {
  outlet_list: {
    id: number;
    kode: string;
    nama: string;
    alamat: string;
    kelurahan_id: number;
    lat: string;
    lon: string;
  }[];
}
export interface resAppKuyWaktuPickUpV3 {
  jam_pickup_list: {
    jam_awal: string;
    jam_akhir: string;
  }[];
}
export interface resAppKuyJenisItemV3 {
  jenis_item_list:  {
    id: number;
    nama: string;
    keterangan: string;
  }[];
}
export interface resAppKuyUkuranItemV3 {
  ukuran_item_list: {
    id: number;
    nama: string;
    panjang_cm: number;
    lebar_cm: number;
    tinggi_cm: number;
    berat_kg: number;
  }[];
}
export interface resAppKuyPaymentListV3 {
  payment_channel_list: {
    kode: string;
    nama: string;
    image: string;
  }[];
}
export interface resAppKuyInvoiceListV3 {
  invoice_list: {
    invoice_kode: string;
    pemesan_nama: string;
    waktu_pemesanan: string;
    total_paket: number;
    total_berat: number;
    status_pesanan: string;
  }[];
}
export interface resAppKuyInvoiceDetailV3 {
  invoice_detail: {
    invoice_kode: string;
    jenis_layanan: string;
    jenis_pembayaran: string;
    status_pesanan: string;
    waktu_pemesanan: string;
    pengirim: resAppKuyInvoiceDetailPengirimV3;
    penerima_list: resAppKuyInvoiceDetailPenerimaListV3[];
    biaya_jemput: number;
    biaya_pengiriman_list: resAppKuyInvoiceDetailBiayaPengirimanListV3[];
    total_tarif: number;
    payment: resAppKuyInvoiceDetailPaymentV3;
  };
}
export interface resAppKuyInvoiceDetailPaymentV3 {
  amount: number;
  channel_name: string;
  code: string;
  url: string;
  expired_at: string;
}
export interface resAppKuyInvoiceDetailBiayaPengirimanListV3 {
  keterangan: string;
  tarif: number;
  biaya_antar: number;
}
export interface resAppKuyInvoiceDetailPenerimaListV3 {
  nama: string;
  telp: string;
  alamat: string;
  paket_list: resAppKuyInvoiceDetailPaketlistV3[];
}
export interface resAppKuyInvoiceDetailPaketlistV3 {
  resi: string;
  item_kode_reff: string;
  jenis_item: string;
  deskripsi_item: string;
  ukuran_item: string;
  berat: number;
  panjang: number;
  lebar: number;
  tinggi: number;
  koli: number;
  otp: string;
  flag_asuransi: number;
  asuransi_detail: resAppKuyInvoiceDetailAsuransiDetailV3;
}
export interface resAppKuyInvoiceDetailAsuransiDetailV3 {
  nama: string;
  logo: string;
  no_polis: string;
  status: string;
}
export interface resAppKuyInvoiceDetailPengirimV3 {
  nama: string;
  telp: string;
  alamat: string;
}
export interface resAppKuyPaketDetailV3 {
  paket_detail: {
    resi: string;
    item_kode_reff: string;
    tgl_pengiriman: string;
    jenis_layanan: string;
    tipe_layanan: string;
    pengirim: resAppKuyPaketDetailPengirimPenerimaV3;
    penerima: resAppKuyPaketDetailPengirimPenerimaV3;
    jenis_item: string;
    deskripsi_item: string;
    ukuran_item: string;
    berat: number;
    panjang: number;
    lebar: number;
    tinggi: number;
    koli: number;
    otp: string;
    flag_asuransi: number;
    asuransi_detail: resAppKuyPaketDetailAsuransiDetailV3;
    status_pengiriman_terakhir: string;
    log_pengiriman_list: resAppKuyPaketDetailLogPengirimanListV3[];
  };
}
export interface resAppKuyPaketDetailPengirimPenerimaV3 {
  nama: string;
  telp: string;
  alamat: string;
}
export interface resAppKuyPaketDetailAsuransiDetailV3 {
  nama: string;
  logo: string;
  no_polis: string;
  status: string;
}
export interface resAppKuyPaketDetailLogPengirimanListV3 {
  status: string;
  kurir: any[] | resAppKuyPaketDetailLogPengirimanListKurirV3;
  hari: string;
  tanggal: string;
  jam: string;
  waktu: string;
  penerima: resAppKuyPaketDetailLogPengirimanListPenerimaV3 | any[];
  foto: resAppKuyPaketDetailLogPengirimanListFotoV3 | any[];
  user_drop: string;
  catatan_drop: string;
  kurir_nama: string;
  kurir_telp: string;
}
export interface resAppKuyPaketDetailLogPengirimanListFotoV3 {
  foto_drop_primary: string;
  foto_drop_secondary: string;
}
export interface resAppKuyPaketDetailLogPengirimanListPenerimaV3 {
  nama: null;
  telp: null;
}
export interface resAppKuyPaketDetailLogPengirimanListKurirV3 {
  id: string;
  nama: string;
}
export interface resAppKuySNKV3 {
  syarat_dan_ketentuan: string;
}
export interface resAppKuyCekTarifV3 {
  biaya_jemput: number;
  biaya_pengiriman_list: resAppKuyCekTarifBiayaPengirimanListV3[];
  sub_total: number;
  wallet_diskon: number;
  total_tarif: number;
  biaya_tarif: number;
  biaya_antar: number;
  biaya_asuransi: number;
}
export interface resAppKuyCekTarifBiayaPengirimanListV3 {
  keterangan: string;
  tarif: number;
  biaya_asuransi: number;
  biaya_asuransi_detail_list: resAppKuyCekTarifBiayaPengirimanListBiayaAsuransiDetailListV3[];
  biaya_antar: number;
}
export interface resAppKuyCekTarifBiayaPengirimanListBiayaAsuransiDetailListV3 {
  nilai_barang: number;
  biaya_pengiriman: number;
  nominal_asuransi: number;
}
export interface resAppExpressGetPriceOrderV3 {
  pemesan_nama: string;
  pemesan_telp: string;
  pemesan_email: string;
  jenis_layanan: string;
  tgl_pengiriman: string;
  sales_channel: string;
  order_list: resAppExpressGetPriceOrderListV3[];
  tokenData: string;
}
export interface resAppExpressGetPriceOrderListV3 {
  tipe_pickup: string;
  tipe_drop: string;
  ready_time_pickup: string;
  ready_time_pickup_akhir: string;
  pickup_pool_id: string;
  drop_pool_id: string;
  pengirim: resAppExpressGetPriceOrderPengirimPenerimaV3;
  penerima: resAppExpressGetPriceOrderPengirimPenerimaV3;
  paket_list: resAppExpressGetPriceOrderPaketListV3[];
  total_biaya_asuransi: number;
  total_biaya_jemput: number;
  total_biaya_kirim: number;
  total_biaya_antar: number;
  total_bayar: number;
}
export interface resAppExpressGetPriceOrderPengirimPenerimaV3 {
  telp: string;
  nama: string;
  alamat: string;
  detail_lokasi: string;
  lat: string;
  lon: string;
  kelurahan_id: number;
}
export interface resAppExpressGetPriceOrderPaketListV3 {
  uniqueCode: string;
  jenis_item_id: string;
  jenis_item: string;
  ukuran_item_id: string;
  ukuran_item: string;
  deskripsi_item: string;
  berat_kg: number;
  panjang_cm: number;
  lebar_cm: number;
  tinggi_cm: number;
  koli: number;
  flag_asuransi: number;
  nilai_barang: number;
  nominal_pengiriman: number;
  nominal_asuransi: number;
}
export interface resAppExpressOrderV3 {
  sender: resAppExpressOrderSenderV3;
  orderData: resAppExpressOrderDataV3[];
  payment: resAppExpressOrderPaymentV3;
}
export interface resAppExpressOrderSenderV3 {
  senderName: string;
  senderPhone: string;
  address: string;
  notedAddress: string;
  latlng: string;
  orderId: string;
  fmCost: number;
  estimatedPickUp: string;
}
export interface resAppExpressOrderPaymentV3 {
  customerId: number;
  orderId: string;
  invoiceNo: string;
  paymentCode: string;
  paymentPrefix: null;
  paymentAmount: number;
  serviceFee: number;
  walletUse: number;
  addictUse: number;
  discountCode: null;
  discountPrice: number;
  paymentMethod: string;
  paymentStatus: string;
  paidTime: null;
  expiredTime: string;
}
export interface resAppExpressOrderDataV3 {
  recipient: resAppExpressOrderDataRecipientV3;
  item: resAppExpressOrderDataItemV3[];
}
export interface resAppExpressOrderDataRecipientV3 {
  id: number;
  isCounter: boolean;
  cityId: number;
  kelurahanId: number;
  counterId: number;
  name: string;
  phone: string;
  address: string;
  latlng: string;
  note: string;
  lsCost: number;
  bbCost: number;
  addCost: number;
  insuranceCost: number;
  noResi: string;
  serviceType: string;
  readyPickupTime: string;
}
export interface resAppExpressOrderDataItemV3 {
  orderId: string;
  uniqueCode: string;
  orderExpressRecipientId: number;
  descriptionItem: string;
  weight: number;
  quantity: number;
  size: string;
  sizeId: string;
  sizeName: string;
  dimensions: string;
  noResi: string;
  packageType: string;
  packageTypeId: string;
  flag_asuransi: number;
  nilai_barang: number;
  insuranceCost: number;
  shippingCost: number;
}