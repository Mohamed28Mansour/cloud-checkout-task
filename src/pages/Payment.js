import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectionSummary from "../components/SelectionSummary";
import CreditCardForm from "../components/CreditCardForm";
import { useGlobalContext } from "../context";

const Payment = () => {
  const [errorMessage, setErrorMessage] = useState({
    cardError: false,
    nameError: false,
    cvcError: false,
    expiryError: false,
  });

  const { creditCardNumber, cardHolder, cvc, expiryDate } = useGlobalContext();

  const isFormValid = () => {
    if (
      creditCardNumber.length > 0 &&
      cardHolder.length > 0 &&
      cvc.length > 0 &&
      expiryDate.month.length > 0 &&
      expiryDate.year.length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="h-screen flex justify-center items-center bg-dark-blue">
      <div className="bg-white h-3/5 md:w-1/2 rounded-md flex flex-col relative">
        <SelectionSummary />
        <CreditCardForm
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <Link to="/">
          <button className="font-bold text-white absolute left-20 bottom-5 mt-5 w-20 bg-red-700 rounded-xl p-1">
            Back
          </button>
        </Link>
        <Link to="/confirmation">
          <button
            disabled={!isFormValid()}
            className={
              isFormValid()
                ? "font-bold text-white absolute right-20 bottom-5 mt-5 w-20 bg-red-700 rounded-xl p-1"
                : "font-bold text-white absolute right-20 bottom-5 mt-5 w-20 bg-gray-200 rounded-xl p-1"
            }
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
