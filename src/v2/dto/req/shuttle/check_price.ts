import { CheckPricePayload, OrderData, UserBooking } from "@app/legacy/dto";

export interface CheckPriceV2 extends CheckPricePayload<UserBooking, OrderData[]> {
  exp: number;
  isasuransi: boolean;
  ispp: boolean;
  isconnecting: boolean;
}