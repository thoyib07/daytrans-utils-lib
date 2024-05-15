export interface resAppTiketuxAsalTujuanV2 {
    outlet: resAppTiketuxAsalTujuanOutletV2[];
    kota: resAppTiketuxAsalTujuanKotaV2[];
}

interface resAppTiketuxAsalTujuanKotaV2 {
    nama: string;
    kode: string;
    kodeTraveloka: string;
}

interface resAppTiketuxAsalTujuanOutletV2 {
    id: string;
    group: string;
    kode: string;
    nama: string;
    telpon: string;
    alamat: string;
    latitude: string;
    longitude: string;
    kode_kota: string;
    kota: string;
    flag_bandara: number;
    flag_agen: number;
    flag_aktif: number;
    flag_virtual_outlet: number;
    img: string;
    url_map_tujuan?: string;
    list_img: any[];
    min_tarif?: number;
    max_tarif?: number;
    range_tarif?: string;
    code: string;
    cabang_tujuan?: string;
    kota_tujuan?: string;
    url_map?: string;
    distance?: number;
}

export interface resAppTiketuxJadwalV2 {
    schedule: resAppTiketuxJadwalScheduleV2[];
    departureCounter: string[];
    destinationCounter: string[];
}

interface resAppTiketuxJadwalScheduleV2 {
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
    promo: resAppTiketuxJadwalPromoV2[];
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
    list_transit: resAppTiketuxJadwalListTransitV2[];
    is_connecting: number;
    list_connecting: any[];
    list_transit_connecting: resAppTiketuxJadwalListTransitConnectingV2[];
    operator: string;
    detail_rute: string;
    harga_tiket: number;
    layout_kursi: number;
    jumlah_booking: number;
    is_sold: boolean;
}

interface resAppTiketuxJadwalListTransitConnectingV2 {
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

interface resAppTiketuxJadwalListTransitV2 {
    nama: string;
    ewt_menit: number;
    jam: string;
}

interface resAppTiketuxJadwalPromoV2 {
    kode_promo: string;
    nama_promo: string;
    nominal: number;
    kursi: string;
}

export interface resAppTiketuxKursiV2 {
    totalpenumpang: string;
    metodepenjualan: string;
    totalkuota: string;
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
    petalayout_pp: string;
    asuransi: number;
    peta_layout: resAppTiketuxKursiPetaLayoutV2[];
    peta_layout_pp: resAppTiketuxKursiPetaLayoutV2[];
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
    no_manifest: string;
    kode_kendaraan: string;
    no_polisi: string;
    kode_driver: string;
    nama_driver: string;
}

interface resAppTiketuxKursiPetaLayoutV2 {
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

export interface resAppTiketuxCheckPriceV2 {
    userBooking: resAppTiketuxCheckPriceUserBookingV2;
    orderData: resAppTiketuxCheckPriceOrderDataV2[];
    isInsurance?: boolean;
    isReturn?: boolean;
    isConnecting?: boolean;
    totalInsurance?: number;
    totalPrice?: number;
    tokenData?: string;
}

interface resAppTiketuxCheckPriceUserBookingV2 {
    name: string;
    title: string;
    phone: string;
    email: string;
}

interface resAppTiketuxCheckPriceOrderDataV2 {
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
    traveler: resAppTiketuxCheckPriceTravelerV2[];
    isInsurance?: boolean;
    isReturn?: boolean;
    isConnecting?: boolean;
    totalPriceTraveler?: number;
    totalPriceInsurance?: number;
}

interface resAppTiketuxCheckPriceTravelerV2 {
    name: string;
    title: string;
    idLayout: string;
    seatNumber: string;
    promoCode: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
    priceInsurance: number;
}

export interface resAppShuttleOrderV2 {
    orderData: resAppShuttleOrderOrderDataV2[];
    payment: resAppShuttleOrderPaymentV2;
}

interface resAppShuttleOrderPaymentV2 {
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

interface resAppShuttleOrderOrderDataV2 {
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
    traveler: resAppShuttleOrderTravelerV2[];
    cashbackPoint: number;
    useCashback: boolean;
    typeOrder: string;
    version: string;
    platform: string;
}

interface resAppShuttleOrderTravelerV2 {
    orderId: number;
    scheduleCode: string;
    name: string;
    title: string;
    idLayout: string;
    seatNumber: string;
    price: number;
    priceNormal: number;
    pricePromo: number;
    tiketNumber: string;
    qrcode: string;
    insured: boolean;
    priceInsurance: number;
}