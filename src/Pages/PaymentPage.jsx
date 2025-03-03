// import React, { useState } from "react";
// import "./css/Payment.css";
// import { loadStripe } from '@stripe/stripe-js';

// const PaymentPage = () => {
//   const [amount, setAmount] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const makePayment = async () => {
//     // Load Stripe with your public key
//     const stripe = await loadStripe('pk_test_51QkLN9EeZFXYLkzdtmSEzser5cncqgv62MGBKHslaHscPZSHyQ9EIiPJc1DPAvHF9RgkIyLPiY5MfX75FSQ8EBwF00ELxqWo22');

//     // Prepare the data to send to backend (e.g., products in the cart)
//     const body = {
//       products: [
//         {
//           name: 'UpperDiamond Bouque',
//           price: 900, // Price in USD
//           quantity: 1,
//         },
//       ],
//     };

//     const headers = {
//       "Content-Type": "application/json",
//     };

//     const api_Url = "http://localhost:5000"; 
//     const response = await fetch(`${api_Url}/create-checkout-session`, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(body),
//     });

//     const session = await response.json(); // Get the session object from backend

//     if (session.id) {
//       // Redirect to Stripe checkout page
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//       });

//       if (result.error) {
//         console.log(result.error);
//         alert("Error during checkout. Please try again.");
//       }
//     } else {
//       alert("Failed to create session. Please try again later.");
//     }
//   };
   
//   const makePayment2 = async () => {
//     // Load Stripe with your public key
//     const stripe = await loadStripe('pk_test_51QkLN9EeZFXYLkzdtmSEzser5cncqgv62MGBKHslaHscPZSHyQ9EIiPJc1DPAvHF9RgkIyLPiY5MfX75FSQ8EBwF00ELxqWo22');

//     // Prepare the data to send to backend (e.g., products in the cart)
//     const body = {
//       products: [
//         {
//           name: 'Diamond Bouque',
//           price: 450, // Price in USD
//           quantity: 1,
//         },
//       ],
//     };

//     const headers = {
//       "Content-Type": "application/json",
//     };

//     const api_Url = "http://localhost:5000"; 
//     const response = await fetch(`${api_Url}/create-checkout-session2`, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(body),
//     });

//     const session = await response.json(); // Get the session object from backend

//     if (session.id) {
//       // Redirect to Stripe checkout page
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//       });

//       if (result.error) {
//         console.log(result.error);
//         alert("Error during checkout. Please try again.");
//       }
//     } else {
//       alert("Failed to create session. Please try again later.");
//     }
//   };

//   const makePayment3 = async () => {
//     // Load Stripe with your public key
//     const stripe = await loadStripe('pk_test_51QkLN9EeZFXYLkzdtmSEzser5cncqgv62MGBKHslaHscPZSHyQ9EIiPJc1DPAvHF9RgkIyLPiY5MfX75FSQ8EBwF00ELxqWo22');

    
//     const body = {
//       products: [
//         {
//           name: 'Classic Bouque',
//           price: 250, // Price Converted in USD
//           quantity: 1,
//         },
//       ],
//     };

//     const headers = {
//       "Content-Type": "application/json",
//     };

//     const api_Url = "http://localhost:5000"; 
//     const response = await fetch(`${api_Url}/create-checkout-session3`, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(body),
//     });

//     const session = await response.json(); // Get the session object from backend

//     if (session.id) {
//       // Redirect to Stripe checkout page
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//       });

//       if (result.error) {
//         console.log(result.error);
//         alert("Error during checkout. Please try again.");
//       }
//     } else {
//       alert("Failed to create session. Please try again later.");
//     }
//   };


//   return (
//     <>
//     <div className="payment-container">
//       <h2 className="payment-title">Complete Your Payment for UpperDiamondBouque</h2>
//       <p className="payment-description">Securely pay using Stripe. </p>

//       <button className="payment-button" onClick={makePayment} disabled={loading}>
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </div>

// <div className="payment-container">
// <h2 className="payment-title">Complete Your Payment for Diamond Bouque</h2>
// <p className="payment-description">Securely pay using Stripe. </p>

// <button className="payment-button" onClick={makePayment2} disabled={loading}>
//   {loading ? "Processing..." : "Pay Now"}
// </button>
// </div>


// <div className="payment-container">
//       <h2 className="payment-title" >Complete Your Payment for classic Bouque</h2>
//       <p className="payment-description">Securely pay using Stripe. </p>

//       <button className="payment-button" onClick={makePayment3} disabled={loading}>
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </div>

//     </>
//   );
// };

// export default PaymentPage;
import React, { useState } from "react";
import "./css/Payment.css";
import { loadStripe } from '@stripe/stripe-js';

const PaymentPage = () => {
  const [loadingState, setLoadingState] = useState({
    upperDiamond: false,
    diamond: false,
    classic: false,
  });

  const makePayment = async (productKey, apiEndpoint, price, name) => {
    setLoadingState(prev => ({ ...prev, [productKey]: true }));

    const stripe = await loadStripe('pk_test_51QkLN9EeZFXYLkzdtmSEzser5cncqgv62MGBKHslaHscPZSHyQ9EIiPJc1DPAvHF9RgkIyLPiY5MfX75FSQ8EBwF00ELxqWo22');

    const body = { products: [{ name, price, quantity: 1 }] };

    const response = await fetch(`http://localhost:5000/${apiEndpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const session = await response.json();

    if (session.id) {
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      if (result.error) alert("Error during checkout. Please try again.");
    } else {
      alert("Failed to create session. Please try again later.");
    }

    setLoadingState(prev => ({ ...prev, [productKey]: false }));
  };

  return (
    <>
      <div className="payment-container">
        <h2 className="payment-title">Complete Your Payment for UpperDiamondBouque</h2>
        <p className="payment-description">Securely pay using Stripe.</p>
        <button 
          className="payment-button" 
          onClick={() => makePayment("upperDiamond", "create-checkout-session", 900, "UpperDiamond Bouque")} 
          disabled={loadingState.upperDiamond}
        >
          {loadingState.upperDiamond ? "Processing..." : "Pay Now"}
        </button>
      </div>

      <div className="payment-container">
        <h2 className="payment-title">Complete Your Payment for Diamond Bouque</h2>
        <p className="payment-description">Securely pay using Stripe.</p>
        <button 
          className="payment-button" 
          onClick={() => makePayment("diamond", "create-checkout-session2", 450, "Diamond Bouque")} 
          disabled={loadingState.diamond}
        >
          {loadingState.diamond ? "Processing..." : "Pay Now"}
        </button>
      </div>

      <div className="payment-container">
        <h2 className="payment-title">Complete Your Payment for Classic Bouque</h2>
        <p className="payment-description">Securely pay using Stripe.</p>
        <button 
          className="payment-button" 
          onClick={() => makePayment("classic", "create-checkout-session3", 250, "Classic Bouque")} 
          disabled={loadingState.classic}
        >
          {loadingState.classic ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </>
  );
};

export default PaymentPage;
