import React from "react";
import { useGlobalContext } from "../context";

const Gigabytes = () => {
  const gigabytesSelection = [5, 10, 50];
  const { gigabytes, gigabytesSelector } = useGlobalContext();

  return (
    <div className="mt-5 ml-10 w-3/5">
      <h3 className="text-xl">
        Please choose the amount of the gigabytes needed per month:
      </h3>
      <form className="ml-5">
        {gigabytesSelection.map((unit) => {
          return (
            <div key={unit}>
              <label>
                <input
                  type="radio"
                  name="gigabytes"
                  value={unit}
                  checked={parseInt(gigabytes) === unit}
                  onChange={(e) => gigabytesSelector(e)}
                />
                <span className="pl-2">{unit} gigabytes/months</span>
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Gigabytes;
