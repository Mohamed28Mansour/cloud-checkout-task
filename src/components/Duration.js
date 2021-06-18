import React from "react";
import { useGlobalContext } from "../context";

const Duration = () => {
  const { duration, plans, durationSelector } = useGlobalContext();
  console.log({ plans });
  console.log({ duration });
  return (
    <div>
      <h3>Please choose the duration of your subscription:</h3>
      <form>
        {plans.map((plan) => {
          console.log(plan.duration_months);
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
                {plan.duration_months} months
              </label>
              <p>Price per gigabyte: {plan.price_usd_per_gb}$</p>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Duration;
