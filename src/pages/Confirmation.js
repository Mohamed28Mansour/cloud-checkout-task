import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectionSummary from "../components/SelectionSummary";
import ConfirmationForm from "../components/ConfirmationForm";
import { useGlobalContext } from "../context";

const Confirmation = () => {
  const { email, terms, sendCollectedData } = useGlobalContext();
  const [emailError, setEmailError] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const isFormValid = () => {
    if (email !== "" && terms && !incorrect) {
      return false;
    }
    return true;
  };
  return (
    <div className="h-screen flex justify-center items-center bg-dark-blue">
      <div className="bg-white h-3/5 md:w-1/2 rounded-md flex flex-col relative">
        <SelectionSummary />
        <ConfirmationForm
          emailError={emailError}
          setEmailError={setEmailError}
          incorrect={incorrect}
          setIncorrect={setIncorrect}
        />
        <Link to="/payment">
          <button className="font-bold text-white absolute left-20 bottom-5 mt-5 w-20 bg-red-700 rounded-xl p-1">
            Back
          </button>
        </Link>
        <Link to="/response">
          <button
            className={
              isFormValid()
                ? "font-bold text-white absolute right-20 bottom-5 mt-5 w-20 rounded-xl p-1 bg-gray-200"
                : "font-bold text-white absolute right-20 bottom-5 mt-5 w-20 rounded-xl p-1 bg-red-700"
            }
            disabled={isFormValid()}
            onClick={() => sendCollectedData()}
          >
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
