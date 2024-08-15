import { CheckPricePayload } from "@app/legacy/dto";
import { UserBookingV3 } from "./user_booking";
import { OrderDataV3 } from "./order_data";

export interface CheckPriceV3 extends CheckPricePayload<UserBookingV3, OrderDataV3[]> {
  isInsurance: boolean;
  isReturn: boolean;
  isConnecting: boolean;
}