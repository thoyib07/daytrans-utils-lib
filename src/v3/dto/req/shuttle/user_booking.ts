import { UserBooking } from "@app/legacy";

export interface UserBookingV3 extends Omit<UserBooking, 'nama'> {
	name: string;
}