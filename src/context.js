import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

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
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);
  const [dataSent, setDataSent] = useState("");

  const sendCollectedData = () => {
    axios
      .post("https://httpbin.org/post", {
        duration,
        gigabytes,
        pricePerGigabyte,
        totalPrice,
        upfrontPayment,
        creditCardNumber,
        cardHolder,
        cvc,
        expiryDate,
        email,
        terms,
      })
      .then(() => {
        setDataSent("Thank you for your purchase!");
      })
      .catch(() => {
        setDataSent("An error occured, please try again later");
      });
  };

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

  const termsSelector = () => {
    setTerms(!terms);
  };

  const priceCalculator = () => {
    const price = duration * (pricePerGigabyte * gigabytes);
    const discount = 0.1;
    const discountedPrice = price - price * discount;
    if (upfrontPayment) {
      setTotalPrice(discountedPrice);
    } else {
      setTotalPrice(price);
    }
  };

  useEffect(() => {
    priceCalculator();
  });

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
        email,
        terms,
        dataSent,
        durationSelector,
        gigabytesSelector,
        paymentSelector,
        termsSelector,
        priceCalculator,
        setCreditCardNumber,
        setCardHolder,
        setCvc,
        setExpiryDate,
        setEmail,
        sendCollectedData,
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
