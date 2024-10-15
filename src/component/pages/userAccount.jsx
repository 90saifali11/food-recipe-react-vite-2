import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';

const ConfirmationPage = () => {
  const { user } = useContext(UserContext); // Access the user context
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign the user out using Firebase's signOut function
      console.log('User signed out successfully');
      // Optionally, you can redirect the user to the login page or display a success message
    } catch (error) {
      console.error('Error signing out:', error); // Handle any errors that may occur during sign-out
    }
  };
  const containerStyle = {
    display: 'flex',
    maxWidth: '900px',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    marginTop:"50px",
    marginBottom:"100px"
  };

  const imageStyle = {
    width: '50%',
    objectFit: 'cover',
    height:"400px"
  };

  const contentStyle = {
    width: '50%',
    padding: '40px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const subtitleStyle = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
  };

  const emailStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#c97a7e',
    textDecoration: 'none',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const backButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#c97a7e',
    color: '#fff',
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f0f0f0',
    color: '#333',
  };

  const logoStyle = {
    alignSelf: 'flex-end',
    marginTop: '20px',
    width: "100px"
  };

  return (
    <div style={containerStyle}>
      <img 
        src="/src/7eecb2_e103986e826f4b61b172a1fcdcd05612~mv2_d_3569_5353_s_4_2.webp" 
        alt="Chef taking photo of food" 
        style={imageStyle}
      />
      <div style={contentStyle}>
        <h2 style={titleStyle}>Thank you Chef</h2>
        <p style={subtitleStyle}>We have sent a verification email to activate your account</p>
        <span style={emailStyle}>{user?.userInfo?.email}</span> {/* Safely accessing email */}
        <p style={subtitleStyle}>
          Didn't receive email? <a href="#" style={linkStyle}>Resend email</a>
        </p>
        <div style={buttonContainerStyle}>
          <Link to={`/`}>
          <button style={backButtonStyle}>Back</button>
          </Link>
          <button
    onClick={handleSignOut} // Trigger handleSignOut on button click
    style={{
      backgroundColor: '#FF6B6B', // Styling for the logout button (adjust colors as needed)
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }}
  >
    Log out
  </button>
        </div>
        <img 
          src="/src/logo.png" 
          alt="PerfectRecipe" 
          style={logoStyle}
        />
      </div>
    </div>
  );
};

export default ConfirmationPage;
