import React, { useState, useEffect, useContext } from "react";

const subscriptionPlans =
  "https://cloud-storage-prices-moberries.herokuapp.com/prices";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [duration, setDuration] = useState(12);
  const [gigabytes, setGigabytes] = useState(5);
  const [pricePerGigabyte, setPricePerGigabyte] = useState(2);
  const [totalPrice, setTotalPrice] = useState(120);
  const [upfrontPayment, setUpfrontPayment] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiryDate, setExpiryDate] = useState({
    month: "",
    year: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    cardError: false,
    nameError: false,
    cvcError: false,
    expiryError: false,
  });

  const fetchSubscriptionData = async () => {
    const response = await fetch(subscriptionPlans);
    const data = await response.json();
    const plans = Object.values(data)[0];
    setPlans(plans);
  };

  useEffect(() => {
    fetchSubscriptionData();
  }, []);

  const durationSelector = (e, pricePerGB) => {
    setDuration(e.target.value);
    setPricePerGigabyte(pricePerGB);
  };

  const gigabytesSelector = (e) => {
    setGigabytes(e.target.value);
  };

  const paymentSelector = () => {
    setUpfrontPayment(!upfrontPayment);
  };

  //   const priceCalculator = () => {
  //     const price = duration * (pricePerGigabyte * gigabytes);
  //     const discount = 0.1;
  //     const discountedPrice = price * discount;
  //     if (upfrontPayment) {
  //       setTotalPrice(discountedPrice);
  //     } else {
  //       setTotalPrice(price);
  //     }
  //   };

  /*   useEffect(() => {
    priceCalculator();
  }, [duration]); */

  const cardValidate = (creditCardNumber) => {
    if (
      creditCardNumber.length < 12 ||
      creditCardNumber.length > 19 ||
      !creditCardNumber.match(/[0-9]/)
    ) {
      showAlert(true, false, false, false);
    } else {
      showAlert(false, false, false, false);
    }
  };

  const nameValidate = (name) => {
    if (name.length === 0 || !name.match(/[a-zA-Z]/)) {
      showAlert(false, true, false, false);
    } else {
      showAlert(false, false, false, false);
    }
  };

  const cvcValidate = (cvc) => {
    if (cvc.length < 3 || cvc.length > 4 || !cvc.match(/[0-9]/)) {
      showAlert(false, false, true, false);
    } else {
      showAlert(false, false, false, false);
    }
  };

  const dateValidate = (month, year) => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getUTCFullYear().toString().slice(-2);
    if (
      (month < currentMonth && year <= parseInt(currentYear)) ||
      month > 12 ||
      year < currentYear ||
      !month.match(/[0-9]/) ||
      !year.match(/[0-9]/)
    ) {
      showAlert(false, false, false, true);
    } else {
      showAlert(false, false, false, false);
    }
  };

  const addCard = (e) => {
    e.preventDefault();
    setCreditCardNumber(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    setCardHolder(e.target.value);
  };

  const addCvc = (e) => {
    e.preventDefault();
    setCvc(e.target.value);
  };

  const addMonth = (e) => {
    e.preventDefault();
    setExpiryDate({ ...expiryDate, month: e.target.value });
  };

  const addYear = (e) => {
    e.preventDefault();
    setExpiryDate({ ...expiryDate, year: e.target.value });
  };

  const showAlert = (
    cardError = false,
    nameError = false,
    cvcError = false,
    expiryError = false
  ) => {
    setErrorMessage({ cardError, nameError, cvcError, expiryError });
  };

  return (
    <AppContext.Provider
      value={{
        plans,
        duration,
        gigabytes,
        pricePerGigabyte,
        totalPrice,
        upfrontPayment,
        creditCardNumber,
        cardHolder,
        cvc,
        expiryDate,
        errorMessage,
        durationSelector,
        gigabytesSelector,
        paymentSelector,
        // priceCalculator,
        cardValidate,
        nameValidate,
        cvcValidate,
        dateValidate,
        addCard,
        addName,
        addCvc,
        addMonth,
        addYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
