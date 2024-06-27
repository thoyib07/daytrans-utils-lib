import { Traveler } from "@app/legacy";

export interface TravelerV3 extends Omit<Traveler, 'id_layout'> {
	idLayout: string;
}