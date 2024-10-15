import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#ffff',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    flexDirection: isMobile ? 'column' : 'row', // Stack content on mobile
  };

  const contentStyle = {
    maxWidth: isMobile ? '100%' : '50%',
    textAlign: isMobile ? 'center' : 'left', // Center text on mobile
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const subHeadingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#b65f54',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    color: '#666',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#b65f54',
    color: 'white',
    border: 'none',
    borderRadius: '9px',
    cursor: 'pointer',
    margin: '0.5rem', // Add spacing between buttons
     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.9)'
  };

  const loginLinkStyle = {
    marginTop: '1rem',
    display: 'block',
    color: '#666',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '40%',
    display: isMobile ? 'none' : 'block', // Hide on mobile
  };

  const dishImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  };

  const reviewStyle = {
    position: 'absolute',
    bottom: '10%',
    left: '-20%',
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: isMobile ? 'none' : 'flex', // Hide review on mobile
    alignItems: 'center',
    maxWidth: '250px',
  };

  const leafStyle = {
    position: 'absolute',
    width: '50px',
    height: 'auto',
    display: isMobile ? 'none' : 'block', // Hide leaves on mobile
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Your Daily Dish</h1>
        <h2 style={subHeadingStyle}>A Food Journey</h2>
        {!isMobile && (
          <p style={descriptionStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit.
          </p>
        )}
        <Link to={`/signin`} style={buttonStyle}>Sign In</Link>
        <a href="#" style={loginLinkStyle}>
          Do you have an account? <span style={{ color: '#b65f54' }}>Log in</span>
        </a>
      </div>
      <div style={imageContainerStyle}>
        <img src="/src/images/h3-product6-400x378.png" alt="Delicious dish" style={dishImageStyle} />
        <div style={reviewStyle}>
          <img src="/src/images/user.jpg" alt="Sara Johnson" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '1rem' }} />
          <div>
            <strong>Sara Johnson</strong>
            <div style={{ color: '#FFD700' }}>★★★★★</div>
            <small>Wow, this is a flavor explosion in my mouth! Very delicious.</small>
          </div>
        </div>
      </div>
      <img src="/src/images/download (1).png" alt="Leaf decoration" style={{ ...leafStyle, top: '10%', right: '15%' }} />
      <img src="/src/images/download (1).png" alt="Leaf decoration" style={{ ...leafStyle, bottom: '25%', right: '25%', mixBlendMode: 'color-burn' }} />
    </div>
  );
};

export default HeroSection;
