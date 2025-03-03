import React, { useState } from 'react';
import './css/Contact.css';

const Contact = () => {
  // State for form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission using fetch
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
 const responseData=await response.json()
      if (responseData.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.'&&`the message is ${responseData.Message}`);
      }
    } catch (error) {
      console.error('There was an error sending the message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <>
      <div className='contact'>
        <h1>Contact Us</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis </p>
        <div className='inputs'>
          <input
            type="text"
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder='Your message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button onClick={handleSubmit}>Send To Us</button>
        </div>
      </div>

      <div className='intouch'>
        <div className='touch1'>
          <h1>Get In Touch</h1>
          <h3>Victor@prolific.com</h3>
          <h4>25078872345</h4>
        </div>
        <div className='touch2'>
          <h1>Location</h1>
          <h3>United States</h3>
          <h3>Toronto</h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
