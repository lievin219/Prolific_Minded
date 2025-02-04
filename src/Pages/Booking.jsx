import React from 'react'
import './css/Booking.css'
import { useState } from 'react';

const Booking = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Confirmed", formData);
    alert("Booking Confirmed!");
  };
  return (
    <div className="booking-container">
    <h2>Book a Coaching Session</h2>
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <button type="submit">Confirm Booking</button>
    </form>
  </div>
  )
}

export default Booking
