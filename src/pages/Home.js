import React from "react";
import { Link } from "react-router-dom";
import Duration from "../components/Duration";
import Gigabytes from "../components/Gigabytes";
import PaymentOption from "../components/PaymentOption";

const Home = () => {
  return (
    <div>
      <Duration />
      <Gigabytes />
      <PaymentOption />
      <Link to="/payment">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Home;
