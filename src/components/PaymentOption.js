import React from "react";
import { useGlobalContext } from "../context";

const PaymentOption = () => {
  const { upfrontPayment, paymentSelector, totalPrice } = useGlobalContext();
  console.log(upfrontPayment);

  return (
    <div>
      <h3>Would you like to pay for the entire duration now?</h3>
      <input
        type="checkbox"
        name="upfrontPayment"
        id="upfrontPayment"
        value={upfrontPayment}
        checked={upfrontPayment}
        onChange={() => paymentSelector()}
      />
      <p>Get 10% discount on the total price if you pay now.</p>
      <p>Total Price: {totalPrice}$</p>
    </div>
  );
};

export default PaymentOption;
