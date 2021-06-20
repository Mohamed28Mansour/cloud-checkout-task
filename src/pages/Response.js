import React from "react";
import { useGlobalContext } from "../context";

const Response = () => {
  const { dataSent } = useGlobalContext();

  return (
    <div className="h-screen flex justify-center items-center bg-dark-blue">
      <div className="bg-white h-3/5 md:w-1/2 rounded-md flex justify-center items-center">
        <h3 className="text-xl font-bold">{dataSent}</h3>
      </div>
    </div>
  );
};

export default Response;
