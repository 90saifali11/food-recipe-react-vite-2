import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    // Reset the input field after submission
    setEmail('');
  };

  const containerStyle = {
    backgroundColor: '#fff0ed',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
    maxWidth: '400px',
    margin: '0 auto 20px',
  };

  const formStyle = {
    display: 'flex',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const inputStyle = {
    flex: 1,
    with:"600px",
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px 0 0 4px',
  };

  const buttonStyle = {
    padding: '10px 10px',
  marginLeft:"10px",
    fontSize: '16px',
    backgroundColor: '#b86459',
    color: 'white',
    border: 'none',
    borderRadius: '0 12px 4px 0',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)', // Add shadow here

  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Let's Stay In Touch!</h2>
      <p style={descriptionStyle}>
        Join our newsletter, so that we reach out to you with our news and offers.
      </p>
      <form onSubmit={handleSubmit} style={formStyle}>
      <input
  type="email"
  placeholder="Enter Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  style={inputStyle}
/>
        <button type="submit" style={buttonStyle}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;