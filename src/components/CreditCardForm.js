import React from "react";
import { useGlobalContext } from "../context";

const CreditCardForm = ({ setErrorMessage, errorMessage }) => {
  const {
    expiryDate,
    setCreditCardNumber,
    setCardHolder,
    setCvc,
    setExpiryDate,
  } = useGlobalContext();

  const cardValidate = (cardNumber) => {
    if (
      cardNumber.length < 12 ||
      cardNumber.length > 19 ||
      !cardNumber.match(/^[0-9]+$/)
    ) {
      setErrorMessage({ ...errorMessage, cardError: true });
      setCreditCardNumber("");
    } else {
      setErrorMessage({ ...errorMessage, cardError: false });
      setCreditCardNumber(cardNumber);
    }
  };

  const nameValidate = (name) => {
    if (
      name.length === 0 ||
      !name.match(/^[a-zA-Z\s]*$/) ||
      name.split(" ").length < 2
    ) {
      setErrorMessage({ ...errorMessage, nameError: true });
      setCardHolder("");
    } else {
      setErrorMessage({ ...errorMessage, nameError: false });
      setCardHolder(name);
    }
  };

  const cvcValidate = (cvc) => {
    if (cvc.length < 3 || cvc.length > 4 || !cvc.match(/^[0-9]+$/)) {
      setErrorMessage({ ...errorMessage, cvcError: true });
      setCvc("");
    } else {
      setErrorMessage({ ...errorMessage, cvcError: false });
      setCvc(cvc);
    }
  };

  const dateValidate = (enteredMonth, enteredYear) => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getUTCFullYear().toString().slice(-2);
    if (
      (enteredMonth < currentMonth && enteredYear <= parseInt(currentYear)) ||
      enteredMonth > 12 ||
      enteredMonth <= 0 ||
      enteredYear < currentYear ||
      !enteredMonth.match(/[0-9]/) ||
      !enteredYear.match(/[0-9]/)
    ) {
      setErrorMessage({ ...errorMessage, dateError: true });
      setExpiryDate({ ...expiryDate, month: "", year: "" });
    } else {
      setErrorMessage({ ...errorMessage, dateError: false });
      setExpiryDate({ ...expiryDate, month: enteredMonth, year: enteredYear });
    }
  };

  const month = new Date().getMonth() + 1;
  const year = new Date().getUTCFullYear().toString().slice(-2);

  return (
    <div className="mt-5 ml-10">
      <h3 className="text-xl mb-5">Please enter your credit card details</h3>
      <form className="ml-5">
        <label htmlFor="cardNumber" className="block">
          Card Number:
          <input
            className="border-2 h-5 ml-2 rounded-md p-2"
            id="cardNumber"
            name="cardNumber"
            type="tel"
            onBlur={(e) => cardValidate(e.target.value.trim())}
          />
          {errorMessage.cardError && (
            <span className="ml-5 text-xs text-red-700">
              Please enter a valid card number
            </span>
          )}
        </label>
        <label className="block" htmlFor="cardHolder">
          Card Holder:
          <input
            className="border-2 h-5 ml-4 rounded-md p-2"
            id="cardHolder"
            name="cardHolder"
            type="text"
            onBlur={(e) => nameValidate(e.target.value.trim())}
          />
          {errorMessage.nameError && (
            <span className="ml-5 text-xs text-red-700">
              Please enter a valid name
            </span>
          )}
        </label>
        <label className="block" htmlFor="cvcNumber">
          CVC Number:
          <input
            className="border-2 h-5 ml-2 rounded-md p-2"
            id="cvcNumber"
            name="cvcNumber"
            type="tel"
            onBlur={(e) => cvcValidate(e.target.value)}
          />
          {errorMessage.cvcError && (
            <span className="ml-5 text-xs text-red-700">
              Please enter a valid cvc number
            </span>
          )}
        </label>
        <label className="block" htmlFor="expiryDate">
          Expiry Date:
          <input
            className="border-2 h-5 ml-5 rounded-md pl-4"
            id="expiryMonth"
            name="expiryMonth"
            type="number"
            min="0"
            max="12"
            placeholder={month < 10 ? `0${month}` : month}
            value={expiryDate.month}
            onChange={(e) =>
              setExpiryDate({ ...expiryDate, month: e.target.value.trim() })
            }
            onBlur={
              expiryDate.year.length > 0
                ? (e) => dateValidate(e.target.value, expiryDate.year)
                : null
            }
          />{" "}
          /{" "}
          <input
            className="border-2 h-5 ml-2 rounded-md pl-4"
            id="expiryYear"
            name="expiryYear"
            type="number"
            min={parseInt(year)}
            max={parseInt(year) + 30}
            placeholder={year}
            value={expiryDate.year}
            onChange={(e) =>
              setExpiryDate({ ...expiryDate, year: e.target.value.trim() })
            }
            onBlur={(e) => dateValidate(expiryDate.month, e.target.value)}
          />
          {errorMessage.dateError && (
            <span className="ml-5 text-xs text-red-700">
              Please enter a valid date
            </span>
          )}
        </label>
      </form>
    </div>
  );
};

export default CreditCardForm;
