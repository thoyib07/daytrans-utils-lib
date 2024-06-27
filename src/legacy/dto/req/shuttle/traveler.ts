/**
 * @deprecated `id_layout`: use `idLayout` instead
 */
export interface Traveler {
	name: string;
	title: string;
	id_layout: string;
	seatNumber: string;
	price: number;
	priceNormal: number;
	pricePromo: number;

	passengerIdentity: string;
	priceInsurance: number;
	kodePromo: string;
}