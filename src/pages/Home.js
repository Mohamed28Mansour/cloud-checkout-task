import React from "react";
import { Link } from "react-router-dom";
import Duration from "../components/Duration";
import Gigabytes from "../components/Gigabytes";
import PaymentOption from "../components/PaymentOption";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-dark-blue">
      <div className="bg-white h-3/5 md:w-1/2 rounded-md flex flex-col relative">
        <Duration />
        <Gigabytes />
        <PaymentOption />
        <Link to="/payment">
          <button className="font-bold text-white absolute right-20 mt-5 w-20 bg-red-700 rounded-xl p-1">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
