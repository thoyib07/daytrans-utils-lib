import { ShuttleProvider } from "../../constants";

export interface CheckPricePayload<TypeUserBooking, TypeOrderData> {
  userBooking: TypeUserBooking;
  orderData: TypeOrderData;

  typeOrder: keyof typeof ShuttleProvider;
  totalPrice: number;
  totalInsurance: number;
  tokenData: string;
}
