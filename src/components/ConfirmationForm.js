import React from "react";
import { useGlobalContext } from "../context";

const ConfirmationForm = ({
  setEmailError,
  emailError,
  incorrect,
  setIncorrect,
}) => {
  const { terms, termsSelector, email, setEmail } = useGlobalContext();

  const emailValidate = (enteredEmail) => {
    const validEmail = /^\S{1,}@\S{2,}\.\S{2,}$/;
    if (enteredEmail.trim() === "" || !validEmail.test(enteredEmail)) {
      setEmailError(true);
      setEmail("");
    } else {
      setEmailError(false);
      setEmail(enteredEmail);
    }
  };

  const isEmailConfirmed = (enteredEmail, stateEmail) => {
    if (enteredEmail.trim() !== stateEmail.trim()) {
      setIncorrect(true);
    } else {
      setIncorrect(false);
    }
  };

  return (
    <div className="mt-5 ml-10">
      <h3 className="text-xl mb-5">Please enter your email address</h3>
      <form className="ml-5">
        <label className="block" htmlFor="email">
          Email:
          <input
            className="border-2 h-5 ml-20 rounded-md p-2"
            type="email"
            id="email"
            name="email"
            placeholder="john@doe.com"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            onBlur={(e) => emailValidate(email)}
          />
          {emailError && (
            <span className="ml-5 text-xs text-red-700">
              Please enter a valid email
            </span>
          )}
        </label>
        <label htmlFor="confirmEmail">
          Confirm email:
          <input
            className="border-2 h-5 ml-4 rounded-md p-2"
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            placeholder="john@doe.com"
            onBlur={(e) => isEmailConfirmed(e.target.value, email)}
          />
          {incorrect && (
            <span className="ml-5 text-xs text-red-700">
              Emails do not match
            </span>
          )}
        </label>
      </form>
      <h3 className="text-xl mt-5 mr-2 inline-block">
        Please confirm Terms and Conditions:
      </h3>
      <input
        className="inline"
        type="checkbox"
        name="terms"
        id="terms"
        value={terms}
        checked={terms}
        onChange={() => termsSelector()}
      />
    </div>
  );
};

export default ConfirmationForm;
