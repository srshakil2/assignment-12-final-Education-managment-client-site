import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_stripe);
const Prement = () => {
  const data = useLoaderData();

  return (
    <div className="px-4 ">
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Prement;
