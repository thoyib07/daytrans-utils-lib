export interface resAppKuyRegionProvinsiV2 {
  results: {
    provinsi_list: {
      provinsi_id: number;
      provinsi_nama: string;
    }[];
  };
  status: string;
}
export interface resAppKuyRegionKotaV2 {
  results: {
    kota_list: {
      kota_id: number;
      kota_nama: string;
      provinsi_nama: string;
    }[];
  };
  status: string;
}
export interface resAppKuyRegionKecamatanV2 {
  results: {
    kecamatan_list: {
      kecamatan_id: number;
      kecamatan_nama: string;
      kota_nama: string;
      provinsi_nama: string;
    }[];
  };
  status: string;
}
export interface resAppKuyRegionKelurahanV2 {
  results: {
    kelurahan_list: {
      kelurahan_id: number;
      kelurahan_kode_pos: string;
      kelurahan_nama: string;
      kecamatan_nama: string;
      kota_nama: string;
      provinsi_nama: string;
    }[];
  };
  status: string;
}
export interface resAppKuyFindKelurahanV2 {
  results: {
    kelurahan_list: {
      id: number;
      kode_pos: string;
      nama: string;
    }[];
  };
  status: string;
}
export interface resAppKuyJenisLayananV2 {
  results: {
    jenis_layanan_list: {
      kode: string;
      nama: string;
      is_close: number;
    }[];
  };
  status: string;
}
export interface resAppKuyOutletV2 {
  results: {
    outlet_list: {
      id: number;
      kode: string;
      nama: string;
      alamat: string;
      kelurahan_id: number;
      lat: string;
      lon: string;
    }[];
  };
  status: string;
}
export interface resAppKuyWaktuPickUpV2 {
  results: {
    jam_pickup_list: {
      jam_awal: string;
      jam_akhir: string;
    }[];
  };
  status: string;
}
export interface resAppKuyJenisItemV2 {
  results: {
    jenis_item_list:  {
      id: number;
      nama: string;
      keterangan: string;
    }[];
  };
  status: string;
}
export interface resAppKuyUkuranItemV2 {
  results: {
    ukuran_item_list: {
      id: number;
      nama: string;
      panjang_cm: number;
      lebar_cm: number;
      tinggi_cm: number;
      berat_kg: number;
    }[];
  };
  status: string;
}
export interface resAppKuyPaymentListV2 {
  results: {
    payment_channel_list: {
      kode: string;
      nama: string;
      image: string;
    }[];
  };
  status: string;
}
export interface resAppKuyInvoiceListV2 {
  results: {
    invoice_list: {
      invoice_kode: string;
      pemesan_nama: string;
      waktu_pemesanan: string;
      total_paket: number;
      total_berat: number;
      status_pesanan: string;
    }[];
  };
  status: string;
}
export interface resAppKuyInvoiceDetailV2 {
  results: {
    invoice_detail: {
      invoice_kode: string;
      jenis_layanan: string;
      jenis_pembayaran: string;
      status_pesanan: string;
      waktu_pemesanan: string;
      pengirim: resAppKuyInvoiceDetailPengirimV2;
      penerima_list: resAppKuyInvoiceDetailPenerimaListV2[];
      biaya_jemput: number;
      biaya_pengiriman_list: resAppKuyInvoiceDetailBiayaPengirimanListV2[];
      total_tarif: number;
      payment: resAppKuyInvoiceDetailPaymentV2;
    };
  };
  status: string;
}
export interface resAppKuyInvoiceDetailPaymentV2 {
  amount: number;
  channel_name: string;
  code: string;
  url: string;
  expired_at: string;
}
export interface resAppKuyInvoiceDetailBiayaPengirimanListV2 {
  keterangan: string;
  tarif: number;
  biaya_antar: number;
}
export interface resAppKuyInvoiceDetailPenerimaListV2 {
  nama: string;
  telp: string;
  alamat: string;
  paket_list: resAppKuyInvoiceDetailPaketlistV2[];
}
export interface resAppKuyInvoiceDetailPaketlistV2 {
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
  asuransi_detail: resAppKuyInvoiceDetailAsuransiDetailV2;
}
export interface resAppKuyInvoiceDetailAsuransiDetailV2 {
  nama: string;
  logo: string;
  no_polis: string;
  status: string;
}
export interface resAppKuyInvoiceDetailPengirimV2 {
  nama: string;
  telp: string;
  alamat: string;
}
export interface resAppKuyPaketDetailV2 {
  results: {
    paket_detail: {
      resi: string;
      item_kode_reff: string;
      tgl_pengiriman: string;
      jenis_layanan: string;
      tipe_layanan: string;
      pengirim: resAppKuyPaketDetailPengirimV2;
      penerima: resAppKuyPaketDetailPenerimaV2;
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
      asuransi_detail: resAppKuyPaketDetailAsuransiDetailV2;
      status_pengiriman_terakhir: string;
      log_pengiriman_list: resAppKuyPaketDetailLogPengirimanListV2[];
    };
  };
  status: string;
}
export interface resAppKuyPaketDetailPengirimV2 {
  nama: string;
  telp: string;
  alamat: string;
}
export interface resAppKuyPaketDetailPenerimaV2 {
  nama: string;
  telp: string;
  alamat: string;
}
export interface resAppKuyPaketDetailAsuransiDetailV2 {
  nama: string;
  logo: string;
  no_polis: string;
  status: string;
}
export interface resAppKuyPaketDetailLogPengirimanListV2 {
  status: string;
  kurir: any[] | resAppKuyPaketDetailLogPengirimanListKurirV2;
  hari: string;
  tanggal: string;
  jam: string;
  waktu: string;
  penerima: resAppKuyPaketDetailLogPengirimanListPenerimaV2 | any[];
  foto: resAppKuyPaketDetailLogPengirimanListFotoV2 | any[];
  user_drop: string;
  catatan_drop: string;
  kurir_nama: string;
  kurir_telp: string;
}
export interface resAppKuyPaketDetailLogPengirimanListFotoV2 {
  foto_drop_primary: string;
  foto_drop_secondary: string;
}
export interface resAppKuyPaketDetailLogPengirimanListPenerimaV2 {
  nama: string;
  telp: string;
}
export interface resAppKuyPaketDetailLogPengirimanListKurirV2 {
  id: string;
  nama: string;
}
export interface resAppKuySNKV2 {
  results: {
    syarat_dan_ketentuan: string;
  };
  status: string;
}
export interface resAppKuyCekTarifV2 {
  results: {
    biaya_jemput: number;
    biaya_pengiriman_list: resAppKuyCekTarifBiayaPengirimanListV2[];
    sub_total: number;
    wallet_diskon: number;
    total_tarif: number;
    biaya_tarif: number;
    biaya_antar: number;
    biaya_asuransi: number;
  };
  status: string;
}
export interface resAppKuyCekTarifBiayaPengirimanListV2 {
  keterangan: string;
  tarif: number;
  biaya_asuransi: number;
  biaya_asuransi_detail_list: resAppKuyCekTarifBiayaPengirimanListBiayaAsuransiDetailListV2[];
  biaya_antar: number;
}
export interface resAppKuyCekTarifBiayaPengirimanListBiayaAsuransiDetailListV2 {
  nilai_barang: number;
  biaya_pengiriman: number;
  nominal_asuransi: number;
}
export interface resAppExpressGetPriceOrderV2 {
  pemesan_nama: string;
  pemesan_telp: string;
  pemesan_email: string;
  jenis_layanan: string;
  tgl_pengiriman: string;
  sales_channel: string;
  order_list: resAppExpressGetPriceOrderListV2[];
  tokenData: string;
}
export interface resAppExpressGetPriceOrderListV2 {
  tipe_pickup: string;
  tipe_drop: string;
  ready_time_pickup: string;
  ready_time_pickup_akhir: string;
  pickup_pool_id: string;
  drop_pool_id: string;
  pengirim: resAppExpressGetPriceOrderPengirimV2;
  penerima: resAppExpressGetPriceOrderPenerimaV2;
  paket_list: resAppExpressGetPriceOrderPaketListV2[];
  total_biaya_asuransi: number;
  total_biaya_jemput: number;
  total_biaya_kirim: number;
  total_biaya_antar: number;
  total_bayar: number;
}
export interface resAppExpressGetPriceOrderPengirimV2 {
  telp: string;
  nama: string;
  alamat: string;
  detail_lokasi: string;
  lat: string;
  lon: string;
  kelurahan_id: number;
}
export interface resAppExpressGetPriceOrderPenerimaV2 {
  telp: string;
  nama: string;
  alamat: string;
  detail_lokasi: string;
  lat: string;
  lon: string;
  kelurahan_id: number;
}
export interface resAppExpressGetPriceOrderPaketListV2 {
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
export interface resAppExpressOrderV2 {
  sender: resAppExpressOrderSenderV2;
  orderData: resAppExpressOrderDataV2[];
  payment: resAppExpressOrderPaymentV2;
}
export interface resAppExpressOrderSenderV2 {
  senderName: string;
  senderPhone: string;
  address: string;
  notedAddress: string;
  latlng: string;
  orderId: string;
  fmCost: number;
  estimatedPickUp: string;
}
export interface resAppExpressOrderPaymentV2 {
  customerId: number;
  orderId: string;
  invoiceNo: string;
  paymentCode: string;
  paymentPrefix: string;
  paymentAmount: number;
  serviceFee: number;
  walletUse: number;
  addictUse: number;
  discountCode: string;
  discountPrice: number;
  paymentMethod: string;
  paymentStatus: string;
  paidTime: string;
  expiredTime: string;
}
export interface resAppExpressOrderDataV2 {
  recipient: resAppExpressOrderDataRecipientV2;
  item: resAppExpressOrderDataItemV2[];
}
export interface resAppExpressOrderDataRecipientV2 {
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
export interface resAppExpressOrderDataItemV2 {
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