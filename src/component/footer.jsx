// import React from 'react';

const Footer = () => {
    const footerStyle = {
      backgroundColor: '#f5f5f5', // Updated background color
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
      marginBottom:"-100px",
      height:"380px"
    };
  
    const containerStyle = {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      
    };
  
    const columnStyle = {
      flex: '1',
      minWidth: '200px',
      marginBottom: '20px',
    };
  
    const headingStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    };
  
    const linkStyle = {
      color: '#333',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '5px',
    };
  
    const inputStyle = {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    };
  
    const buttonStyle = {
      width: '100%',
      padding: '10px',
      backgroundColor: '#b65f54',
      color: 'white',
      border: 'none',
      borderRadius: '4px 12px 8px 0',
      cursor: 'pointer',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)', // Add shadow here

    };
  
    const copyrightStyle = {
      borderTop: '1px solid #ddd',
      paddingTop: '20px',
      marginTop: '20px',
      textAlign: 'center',
      width: '100%',
    };
  
    const socialIconStyle = {
      width: '24px',
      height: '24px',
      margin: '0 10px',
    };
  
    return (
     
      <footer style={footerStyle}  >
        <div style={containerStyle}>
          <div style={columnStyle}>
            <h3 style={headingStyle}>
              <img src="/src/logo.png" alt="" style={{width:"150px",}}/>
            </h3>
            <p>
              The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
            </p>
          </div>
          <div style={columnStyle}>
            <h4 style={headingStyle}>Quick links</h4>
            <a href="#" style={linkStyle}>Home</a>
            <a href="#" style={linkStyle}>Recipes</a>
            <a href="#" style={linkStyle}>Blog</a>
          </div>
          <div style={columnStyle}>
            <h4 style={headingStyle}>Quick links</h4>
            <a href="#" style={linkStyle}>Share Recipe</a>
            <a href="#" style={linkStyle}>About Us</a>
            <a href="#" style={linkStyle}>Contact</a>
          </div>
          <div style={columnStyle}>
            <h4 style={headingStyle}>Legal</h4>
            <a href="#" style={linkStyle}>Terms Of Use</a>
            <a href="#" style={linkStyle}>Privacy & Cookies</a>
          </div>
          <div style={columnStyle}>
            <h4 style={headingStyle}>Newsletter</h4>
            <p>Subscribe to our newsletter to get more free tips</p>
            <input type="email" placeholder="Enter Your Email" style={inputStyle} />
            <button style={buttonStyle}>Subscribe</button>
          </div>
        </div>
        <div style={copyrightStyle}>
          <p>© 2023 Recipe.com. All Rights Reserved</p>
          <div>
            {/* Replace the src with the actual URLs for your social media icons */}
            <img src="/src/music_12485747.png" alt="TikTok" style={socialIconStyle} />
            <img src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg?w=740" alt="Twitter" style={socialIconStyle} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={socialIconStyle} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={socialIconStyle} />
            <img src="/src/images/pinterest_2504932.png" alt="Pinterest" style={socialIconStyle} />
          </div>
        </div>
      </footer>
     
    );
  };
  
  export default Footer;
  