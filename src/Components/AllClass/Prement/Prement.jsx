import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_stripe);
const Prement = () => {
  const data = useLoaderData();

  return (
    <div className="px-4 ">
      <Helmet>
        <title>Education || Pay</title>
      </Helmet>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Prement;
