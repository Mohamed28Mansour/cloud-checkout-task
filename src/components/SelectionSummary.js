import React from "react";
import { useGlobalContext } from "../context";

const SelectionSummary = () => {
  const { gigabytes, duration, pricePerGigabyte, totalPrice } =
    useGlobalContext();

  return (
    <div className="mt-5 ml-10 mr-10 p-3 bg-gray-100">
      <h3 className="text-xl mb-5">Subscription Summary</h3>
      <div className="ml-5">
        <span>Subscription: </span>
        <span>{duration} months</span>
        <br />
        <span>Gigabytes per month: </span>
        <span>{gigabytes}</span>
        <br />
        <span>Price per Gigabyte: </span>
        <span>{pricePerGigabyte}$</span>
        <br />
        <span>Total Price: </span>
        <span>{totalPrice}$</span>
      </div>
    </div>
  );
};

export default SelectionSummary;
