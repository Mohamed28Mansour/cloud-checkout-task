import React from "react";
import { useGlobalContext } from "../context";

const SelectionSummary = () => {
  const { gigabytes, duration, totalPrice } = useGlobalContext();

  return (
    <div>
      <p>Subscription: {duration} months</p>
      <p>Gigabytes per month: {gigabytes}</p>
      <p>Total Price: {totalPrice}$</p>
    </div>
  );
};

export default SelectionSummary;
