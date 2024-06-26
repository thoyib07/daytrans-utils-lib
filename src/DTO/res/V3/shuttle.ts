export interface resAppTiketuxAsalTujuanV3 {
    outlet: resAppTiketuxAsalTujuanOutletV3[];
    kota: resAppTiketuxAsalTujuanKotaV3[];
}

export interface resAppTiketuxAsalTujuanKotaV3 {
    nama: string;
    kode: string;

    kodeTraveloka?: string | "";
    group?: string | "";
    img?: string | "";
}

export interface resAppTiketuxAsalTujuanOutletV3 {
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

export interface resAppTiketuxJadwalV3 {
    schedule: resAppTiketuxJadwalScheduleV3[];
    departureCounter: string[];
    destinationCounter: string[];
}

export interface resAppTiketuxJadwalScheduleV3 {
    id_produk: string;
    kode_produk: string;
    rute: string;
    id_outlet_pickup: string;
    nama_outlet_pickup: string;
    alamat_outlet_pickup: string;
    maps_outlet_pickup: string;
    id_outlet_dropoff: string;
    nama_outlet_dropoff: string;
    alamat_outlet_dropoff: string;
    maps_outlet_dropoff: string;
    estimasi_waktu_tempuh: number;
    estimasi_waktu_tempuh_menit: number;
    estimasi_waktu_tempuh_str: string;
    tgl_berangkat_induk: string;
    jam_berangkat: string;
    tgl_sampai: string;
    jam_sampai: string;
    max_waktu_book: string;
    id_layanan: string;
    nama_layanan: string;
    tipe_kendaraan: string;
    tarif: number;
    range_tarif: string;
    min_tarif: number;
    max_tarif: number;
    range_tarif_disc: string;
    min_tarif_disc: number;
    max_tarif_disc: number;
    biaya_addon_mutasi: number;
    promo: resAppTiketuxJadwalPromoV3[];
    jumlah_kursi: number;
    sisa_kursi: number;
    kursi_terisi: number;
    keterangan: string;
    is_jadwal_dioperasikan: string;
    is_jadwal_lewat: number;
    is_waktu_verify: number;
    is_waktu_verify_maskapai: number;
    is_pilih_kursi: number;
    show_area_antar_jemput: number;
    is_transit: number;
    list_transit: resAppTiketuxJadwalListTransitV3[];
    is_connecting: number;
    list_connecting: any[];
    list_transit_connecting: resAppTiketuxJadwalListTransitConnectingV3[];
    operator: string;
    detail_rute: string;
    harga_tiket: number;
    layout_kursi: number;
    jumlah_booking: number;
    is_sold: boolean;
}

export interface resAppTiketuxJadwalListTransitConnectingV3 {
    tgl_berangkat: string;
    jam_berangkat: string;
    id_produk: string;
    kode_produk: string;
    id_outlet_pickup: string;
    nama_outlet_pickup: string;
    id_outlet_dropoff: string;
    nama_outlet_dropoff: string;
    ewt_connecting: number;
    waktu_tunggu: number;
}

export interface resAppTiketuxJadwalListTransitV3 {
    nama: string;
    ewt_menit: number;
    jam: string;
}

export interface resAppTiketuxJadwalPromoV3 {
    kode_promo: string;
    nama_promo: string;
    nominal: number;
    kursi: string;
}

export interface resAppTiketuxKursiV3 {
    totalpenumpang: string;
    metodepenjualan: string | null;
    totalkuota: string | null;
    totalpenumpangagen: number;
    tipe_kendaraan: string;
    id_layout: string;
    baris: string;
    kolom: string;
    kapasitas: string;
    petalayout: any;
    totalpenumpang_pp: string;
    metodepenjualan_pp: string;
    totalkuota_pp: string;
    totalpenumpangagen_pp: string;
    baris_pp: string;
    kolom_pp: string;
    kapasitas_pp: string;
    petalayout_pp: any;
    asuransi: number | null;
    peta_layout: resAppTiketuxKursiPetaLayoutV3[];
    peta_layout_pp: resAppTiketuxKursiPetaLayoutV3[];
    isjemput: string;
    jemputminfree: string;
    jemputbiayadalamarea: string;
    jemputmindalamarea: string;
    jemputbiayaluararea: string;
    jemputminluararea: string;
    isantar: string;
    antarminfree: string;
    antarbiayadalamarea: string;
    antarmindalamarea: string;
    antarbiayaluararea: string;
    antarminluararea: string;
    no_manifest: string | null;
    kode_kendaraan: string | null;
    no_polisi: string | null;
    kode_driver: string | null;
    nama_driver: string | null;
}

export interface resAppTiketuxKursiPetaLayoutV3 {
    status: string;
    label: string;
    tglberangkat: string;
    idproduk: string;
    idoutletpickup: string;
    idoutletdropoff: string;
    dek: string;
    notiket: string;
    kodebooking: string;
    nama: string;
    istransit: number;
    iscetaktiket: string;
    jenispembayaran: string;
    isboarding: string;
    waktupesan: string;
    hargatiket: number;
    kodepromo: string;
    namapromo: string;
    nominal: number;
    totalbayar: number;
    issmoking: number;
    isagenverified: number;
    asuransi: number;
    row: number;
    col: number;
    namapenumpang: string;
    seatPrice: number;
    kodejadwal: string;
}

export interface resAppTiketuxCheckPriceV3 {
    userBooking: resAppTiketuxCheckPriceUserBookingV3;
    orderData: resAppTiketuxCheckPriceOrderDataV3[];
    totalInsurance: number;
    totalPrice: number;
    tokenData: string;
    typeOrder?: string | "TIKETUX";

    isInsurance: boolean;
    isReturn: boolean;
    isConnecting: boolean;
}

export interface resAppTiketuxCheckPriceUserBookingV3 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface resAppTiketuxCheckPriceOrderDataV3 {
    departureDate: string;
    departureTime: string;
    estimatedTravelTime: number;
    departureCounterId: string;
    departureCounter: string;
    destinationCounterId: string;
    destinationCounter: string;
    departureCity: string;
    destinationCity: string;
    scheduleCode: string;
    traveler: resAppTiketuxCheckPriceTravelerV3[];

    isInsurance?: boolean | false;
    isReturn?: boolean | false;
    isConnecting?: boolean | false;
    totalPriceTraveler?: number | 0;
    totalPriceTravelerPrev?: number | 0;
    totalPriceInsurance?: number | 0;
}

export interface resAppTiketuxCheckPriceTravelerV3 {
    name: string;
    title: string;
    idLayout?: string | "";
    seatNumber: string;

    price?: number | 0;
    priceNormal?: number | 0;
    pricePromo?: number | 0;
    priceInsurance?: number | 0;
}

export interface resAppShuttleOrderV3 {
    orderData: resAppShuttleOrderOrderDataV3[];
    payment: resAppShuttleOrderPaymentV3;
}

export interface resAppShuttleOrderPaymentV3 {
    customerId: number;
    orderId: string;
    invoiceNo: string;
    paymentCode: string;
    paymentPrefix: string;
    paymentAmount: number;
    serviceFee: number;
    serviceFeeInfo: string;
    walletUse: number;
    addictUse: number;
    discountCode: string;
    discountPrice: number;
    paymentMethod: string;
    paymentStatus: string;
    paidTime: string;
    expiredTime: string;
    bookingStatus: any[];
}

export interface resAppShuttleOrderOrderDataV3 {
    customerId: number;
    orderId: string;
    bookingName: string;
    bookingTitle: string;
    bookingPhone: string;
    bookingEmail: string;
    bookingCode: string;
    providerId: string;
    providerName: string;
    departureDate: string;
    arrivalDate: string;
    departureCounter: string;
    departureCounterId: string;
    destinationCounter: string;
    destinationCounterId: string;
    departureCity: string;
    destinationCity: string;
    scheduleCode: string;
    totalAmount: number;
    totalInsurance: number;
    typeTrip: string;
    traveler: resAppShuttleOrderTravelerV3[];
    cashbackPoint: number;
    useCashback: boolean;
    typeOrder: string;
    version: string;
    platform: string;
}

export interface resAppShuttleOrderTravelerV3 {
    orderId: number;
    scheduleCode: string;
    name: string;
    title: string;
    idLayout?: string | "";
    seatNumber: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
    tiketNumber: string;
    qrcode: string;
    insured: boolean;
    priceInsurance: number;
}

export interface resAppShuttleCheckPriceV3 {
    userBooking: resAppShuttleCheckPriceUserBookingV3;
    orderData: resAppShuttleCheckPriceOrderDataV3[];
    totalInsurance: number;
    totalPrice: number;
    tokenData: string;
    typeOrder?: string | "TIKETUX";

    isInsurance: boolean;
    isReturn: boolean;
    isConnecting: boolean;
}
export interface resAppShuttleCheckPriceTravelokaV3 {
    userBooking: resAppShuttleCheckPriceUserBookingV3;
    orderData: resAppShuttleCheckPriceTravelokaOrderDataV3[];
    totalPrice: number;
    tokenData: string;
    typeOrder?: string | "TRAVELOKA";
    
    totalInsurance?: number | 0;
    exp?: number | 0;
    isInsurance?: boolean | false;
    isReturn?: boolean | false;
    isConnecting?: boolean | false;
}

export interface resAppShuttleCheckPriceUserBookingV3 {
    nama?: string;
    name?: string;
    title: string;
    phone: string;
    email: string;
}

export interface resAppShuttleCheckPriceOrderDataV3 {
    departureDate: string;
    departureTime: string;
    estimatedTravelTime: number;
    departureCounterId: string;
    departureCounter: string;
    destinationCounterId: string;
    destinationCounter: string;
    departureCity: string;
    destinationCity: string;
    scheduleCode: string;
    traveler: resAppShuttleCheckPriceTravelerV3[];

    isInsurance?: boolean | false;
    isReturn?: boolean | false;
    isConnecting?: boolean | false;
    totalPriceTraveler?: number | 0;
    totalPriceTravelerPrev?: number | 0;
    totalPriceInsurance?: number | 0;
}

export interface resAppShuttleCheckPriceTravelokaOrderDataV3 {
    departureDate: string;
    departureTime: string;
    departureCounterId: string;
    departureCounter: string;
    departureCity: string;
  
    arrivalDate: string;
    arrivalTime: string;
    arrivalCounterId: string;
    arrivalCounter: string;
    arrivalCity: string;
  
    routeId: string;
    skuId: string;
    providerId: string;
    providerName: string;
    busTripCode: string;
    seatClass: string;
    seatSubclass: string;
    traveler: resAppShuttleCheckPriceTravelokaTravelerV3[];

    isInsurance?: boolean | false;
    isReturn?: boolean | false;
    isConnecting?: boolean | false;
    totalPriceTraveler?: number | 0;
    totalPriceTravelerPrev?: number | 0;
    totalPriceInsurance?: number | 0;
}

export interface resAppShuttleCheckPriceTravelerV3 {
    nama?: string;
    name?: string;
    title: string;
    id_layout?: string | "";
    idLayout?: string | "";
    seatNumber: string;

    price?: number | 0;
    priceNormal?: number | 0;
    pricePromo?: number | 0;
    priceInsurance?: number | 0;
}

export interface resAppShuttleCheckPriceTravelokaTravelerV3 {
    nama?: string;
    name?: string;
    title: string;
    seatNumber: string;
    
    passengerIdentity?: string | "";
    id_layout?: string | "";
    idLayout?: string | "";
    promoCode?: string | "";
    price?: number | 0;
    priceNormal?: number | 0;
    pricePromo?: number | 0;
    priceInsurance?: number | 0;
}