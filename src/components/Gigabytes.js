import React from "react";
import { useGlobalContext } from "../context";

const Gigabytes = () => {
  const gigabytesSelection = [5, 10, 50];
  const { gigabytes, gigabytesSelector } = useGlobalContext();
  console.log(gigabytes);

  return (
    <div>
      <h3>Please choose the amount of the gigabytes needed per month:</h3>
      <form>
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
                {unit} gigabytes/months
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Gigabytes;
