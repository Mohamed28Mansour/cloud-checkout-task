import React from "react";
import { Link } from "react-router-dom";
import SelectionSummary from "../components/SelectionSummary";
import CreditCardForm from "../components/CreditCardForm";

const Payment = () => {
  return (
    <div>
      <SelectionSummary />
      <CreditCardForm />
      <Link to="/">
        <button>Back</button>
      </Link>
      <Link to="/confirmation">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Payment;
