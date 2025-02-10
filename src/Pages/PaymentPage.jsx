import React, { useState } from "react";
import "./css/Payment.css";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!email || amount <= 0) {
      alert("Please enter a valid email and amount.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:6789", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, email }),
      });
      const data = await response.json();
      console.log('data is ',data)
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert(`An error occurred  ${error}. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Complete Your Payment</h2>
      <p className="payment-description">Securely pay using Stripe.</p>
      <input
        type="email"
        className="payment-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        className="payment-input"
        placeholder="Enter amount (USD)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button className="payment-button" onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default PaymentPage;
