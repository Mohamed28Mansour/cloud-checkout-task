import React from "react";
import { useGlobalContext } from "../context";

const Duration = () => {
  const { duration, plans, durationSelector } = useGlobalContext();

  return (
    <div className="mt-5 ml-10">
      <h3 className="text-xl">
        Please choose the duration of your subscription:
      </h3>
      <form className="ml-5">
        {plans.map((plan) => {
          return (
            <div key={plan.duration_months}>
              <label>
                <input
                  type="radio"
                  name="duration"
                  value={plan.duration_months}
                  checked={parseInt(duration) === plan.duration_months}
                  onChange={(e) => durationSelector(e, plan.price_usd_per_gb)}
                />
                <span className="pl-2">{plan.duration_months} months</span>
              </label>
              <p className="text-xs pl-4 text-gray-400">
                Price per gigabyte: {plan.price_usd_per_gb}$
              </p>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Duration;
