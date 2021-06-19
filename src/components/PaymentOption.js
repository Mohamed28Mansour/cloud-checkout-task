import React from "react";
import { useGlobalContext } from "../context";

const PaymentOption = () => {
  const { upfrontPayment, paymentSelector, totalPrice } = useGlobalContext();

  return (
    <div className="mt-5 ml-10">
      <h3 className="text-xl">
        Would you like to pay for the entire duration now?
      </h3>
      <span className="pl-4">Pay now </span>
      <input
        type="checkbox"
        name="upfrontPayment"
        id="upfrontPayment"
        value={upfrontPayment}
        checked={upfrontPayment}
        onChange={() => paymentSelector()}
      />
      <p className="text-xs pl-4 text-gray-400">
        Get 10% discount on the total price if you pay now.
      </p>
      <p className="pl-4 text-green-400 text-xl mt-5">
        Total Price: {totalPrice}$
      </p>
    </div>
  );
};

export default PaymentOption;
