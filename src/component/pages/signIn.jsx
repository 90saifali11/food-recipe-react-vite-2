import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('Example123@gmail.com');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages
  
    // Validate passwords match
    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }
  
    // Validate user agrees to terms and conditions
    if (!agreeTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }
  
    setLoading(true); // Set loading to true at the start of submission
  
    try {
      // Create user using Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
  
      // You can perform additional actions here like saving the user's name, etc.
  
      // Optionally reset form fields after successful sign-up
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      setAgreeTerms(false);
  
    } catch (error) {
      setError(error.message); // Display error message if sign-up fails
      console.error('Error signing up:', error);
    } finally {
      setLoading(false); // Always stop loading, whether the process succeeds or fails
    }
  };

  const handleClosePopup = () => {
    setIsLoginPopupOpen(false); // Close popup on click
  };

  // Styling variables
  const containerStyle = {
    display: 'flex',
    maxWidth: '900px',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '50%',
    objectFit: 'cover',
  };

  const formContainerStyle = {
    width: '50%',
    padding: '40px',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#b65f54', // Match with your theme
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const socialButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '4%',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  // Popup styles
  const popupOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const popupStyle = {
    width: '90%',
    maxWidth: '600px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1000,
  };

  const contentStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const privacyNoteStyle = {
    fontSize: '12px',
    color: '#999',
    marginTop: '10px',
    textAlign: 'center',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <img src="/src/images (7).jpg" alt="Delicious meal" style={imageStyle} />
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Want to join our Family</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="email"
            placeholder="Example123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <div style={{ marginBottom: '15px' }}>
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="agreeTerms" style={{ marginLeft: '5px' }}>
              I agree to the terms & policy
            </label>
          </div>
          <button
      type="submit"
      style={{
        backgroundColor: loading ? '#9CA3AF' : '#3B82F6', // Change color when loading
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s',
        
      }}
      disabled={loading} // Disable button when loading
    >
      {loading ? 'Signing up...' : 'Sign in'} {/* Show loading text when loading */}
    </button>
          
        </form>
        <p style={{ textAlign: 'center', margin: '20px 0' }}>Or you can join with</p>
        <div>
          <button style={socialButtonStyle}>
            <img src="/src/images (8).jpg" alt="Google" style={{ marginRight: '10px', width: '20px' }} />
            Sign in with Google
          </button>
          <button style={{ ...socialButtonStyle, marginRight: 0, height: "40px" }}>
            <img src="/src/fb.webp" alt="Facebook" style={{ marginRight: '10px', width: '20px' }} />
            Sign in with Facebook
          </button>
        </div>
        <div>
          <button
            style={buttonStyle}
            onClick={() => setIsLoginPopupOpen(true)} // Open popup on click
          >
            Log in
          </button>

          {isLoginPopupOpen && (
            <div style={popupOverlayStyle}>
              <div style={popupStyle}>
                <button onClick={handleClosePopup} style={closeButtonStyle}>
                  ×
                </button>
                <h2 style={titleStyle}>Welcome Back!</h2>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px', textAlign: 'center' }}>
                  Please enter your email to log in.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    required
                  />
                  <button type="submit" style={buttonStyle}>
                    Log In
                  </button>
                </form>
                <p style={privacyNoteStyle}>
                  Your information is safe with us.
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to={`/`}>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Already have an account? <a href="#" style={{ color: '#c97a7e' }}>Log in</a>
        </p>
        </Link>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src="/src/logo.png" alt="PerfectRecipe" style={{ width: '90px' }} />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
