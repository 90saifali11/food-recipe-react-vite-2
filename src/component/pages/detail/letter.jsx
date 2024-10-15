import React, { useState } from 'react';
import './letter.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email);
    // Reset the input field after submission
    setEmail('');
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      backgroundColor: '#fff0ed',
      padding: '20px',  // Increased padding
      borderRadius: '8px',
      position: 'absolute',
      top: '1080px',
      right: '20px',
      
      width: '300px',  // Increased width
      height: '350px',  // Increased height
    }}>
      <h2 style={{
        fontSize: '22px',  // Slightly larger font
        fontWeight: 'bold',
        marginBottom: '20px',  // More space below heading
        textAlign: 'center',
      }}>
        Stay connected with our Recipes updates
      </h2>
      <p style={{
        fontSize: '15px',  // Slightly larger font for readability
        color: '#4A5568',
        marginBottom: '20px',  // More space below the paragraph
        textAlign: 'center',
        lineHeight: '1.6',  // Increased line height for better readability
      }}>
        for the latest health tips and delicious recipes
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>  {/* Added more space between input and button */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            style={{
              width: '100%',
              padding: '12px 14px',  // Increased padding for the input field
              border: '1px solid #CBD5E0',
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#b66055',
            color: '#FFFFFF',
            padding: '12px',  // Increased padding for the button
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#E53E3E')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#F56565')}
        >
          Sign up
        </button>
      </form>
    </div>
  
  );
};

export default NewsletterSignup;
