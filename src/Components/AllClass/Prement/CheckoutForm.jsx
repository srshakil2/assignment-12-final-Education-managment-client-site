import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import useAxiosPrivet from "../../../Hooks/useAxiosPrivet";
import { MainContext } from "../../../Provider/Authcontext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ data }) => {
  const navigate = useNavigate();
  const [massage, setMassage] = useState("");
  const [taka, setTaka] = useState(0);
  const stripe = useStripe();
  const elements = useElements();
  const axiosPrivet = useAxiosPrivet();
  const { user, themeColor } = useContext(MainContext);

  const username = user?.displayName;
  const useremail = user?.email;

  const {
    _id: calssId,
    name: teachername,
    email: teacheremail,
    title,
    bio,
    photoUrl,
    price,
    enroll,
  } = data || {};
  const coust = Number(price);
  const inputAmaunt = Number(taka);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    if (coust !== inputAmaunt) {
      return setMassage("Amaunt not valid");
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setMassage("error");
    } else {
      //   console.log("[PaymentMethod]", paymentMethod);
      const { id } = paymentMethod || {};
      const saveData = {
        tanxId: id,
        calssId,
        username,
        useremail,
        teachername,
        teacheremail,
        photoUrl,
        title,
        bio,
        coust,
        enroll,
      };

      //   post data to student prement
      axiosPrivet
        .post("/payment", saveData)
        .then((res) => {
          if (res.data?.insertedId) {
            axiosPrivet
              .patch(`/update/class/enroll`, saveData)
              .then((res) => {
                if (res.data?.modifiedCount) {
                  setMassage("");
                  setTaka(0);
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Payment Success Full",
                    showConfirmButton: false,
                    timer: 1000,
                  });
                  navigate("/dashboard/myenrollclass");
                }
              })
              .catch((err) => {
                // console.log(err);
              });
          }
        })
        .catch((err) => {
          //   console.log(err);
        });
    }
  };

  return (
    <div
      className={
        themeColor === "light"
          ? "lg:w-5/12 my-40 mx-auto card shadow-xl p-10"
          : "lg:w-5/12 my-40 mx-auto card shadow-xl p-10 bg-gray-800 text-white"
      }
    >
      <div className="flex flex-col mb-8">
        <label className="text-lg font-semibold p-1">amaunt Hare</label>
        <input
          onKeyUp={(e) => setTaka(e.target.value)}
          type="number"
          placeholder={`Your price is: $ ${data.price}`}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn text-white text-lgm bg-indigo-500 mt-7"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </button>
        <p className="mt-3 text-sm text-red-500"></p>
      </form>
    </div>
  );
};

export default CheckoutForm;
