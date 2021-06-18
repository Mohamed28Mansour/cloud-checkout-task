import React from "react";
import { useGlobalContext } from "../context";

const CreditCardForm = () => {
  const {
    creditCardNumber,
    cvc,
    expiryDate,
    errorMessage,
    cardHolder,
    cardValidate,
    nameValidate,
    cvcValidate,
    dateValidate,
    addCard,
    addName,
    addCvc,
    addMonth,
    addYear,
  } = useGlobalContext();

  const month = new Date().getMonth() + 1;
  const year = new Date().getUTCFullYear().toString().slice(-2);

  console.log(creditCardNumber);
  console.log(errorMessage);
  console.log(expiryDate);
  console.log(typeof year);

  return (
    <div>
      <h3>Please enter your credit card details</h3>
      <form>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          id="cardNumber"
          name="cardNumber"
          type="tel"
          value={creditCardNumber}
          onChange={(e) => addCard(e)}
          onBlur={(e) => cardValidate(e.target.value)}
        />
        {errorMessage.cardError && (
          <span>Please enter a valid card number</span>
        )}
        <label htmlFor="cardHolder">Card Holder Name:</label>
        <input
          id="cardHolder"
          name="cardHolder"
          type="text"
          value={cardHolder}
          onChange={(e) => addName(e)}
          onBlur={(e) => nameValidate(e.target.value)}
        />
        {errorMessage.nameError && <span>Please enter a valid name</span>}
        <label htmlFor="cvcNumber">CVC Number:</label>
        <input
          id="cvcNumber"
          name="cvcNumber"
          type="tel"
          value={cvc}
          onChange={(e) => addCvc(e)}
          onBlur={(e) => cvcValidate(e.target.value)}
        />
        {errorMessage.cvcError && <span>Please enter a valid cvc number</span>}
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          id="expiryMonth"
          name="expiryMonth"
          type="number"
          min="0"
          max="12"
          placeholder={month < 10 ? `0${month}` : month}
          value={expiryDate.month}
          onChange={(e) => addMonth(e)}
          //   onBlur={
          //     expiryDate.year.length > 0
          //       ? dateValidate(expiryDate.month, expiryDate.year)
          //       : null
          //   }
        />{" "}
        /{" "}
        <input
          id="expiryYear"
          name="expiryYear"
          type="number"
          min={parseInt(year)}
          max={parseInt(year) + 30}
          placeholder={year}
          value={expiryDate.year}
          onChange={(e) => addYear(e)}
          onBlur={dateValidate(expiryDate.month, expiryDate.year)}
        />
        {errorMessage.expiryError && <span>Please enter a valid date</span>}
      </form>
    </div>
  );
};

export default CreditCardForm;
