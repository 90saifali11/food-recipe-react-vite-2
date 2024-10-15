import React, { useEffect, useState, useContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/userContext';
import { auth } from '../utils/firebase';
import { Search, X } from 'lucide-react';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Cheese');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false); // Added this line

  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      const data = await response.json();
      setRecipes(data.recipes || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchRecipes(searchTerm);
    }
  }, [searchTerm]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({ isLogin: false, userInfo: {} });
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const userInfo = userCredential.user;
        setUser({ isLogin: true, userInfo: { email: userInfo.email, gender: 'female' } }); // Customize the user info as needed
        setIsLoginPopupOpen(false); // Close the popup after successful login
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Styles for the header and navigation
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffff',
    fontFamily: 'Arial, sans-serif',
    flexWrap: 'nowrap',
  };

  const logoStyle = {
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    fontWeight: 'bold',
    flex: '0 1 auto',
    marginLeft: "-10px"
  };

  const navStyle = {
    display: isMobile && !menuOpen ? 'none' : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'flex-end' : 'center',
    position: isMobile ? 'absolute' : 'static',
    top: isMobile ? '60px' : 'auto',
    right: isMobile ? '10px' : 'auto',
    backgroundColor: isMobile ? '#ffffff' : 'transparent',
    padding: isMobile ? '1rem' : '0',
    zIndex: isMobile ? '1' : 'auto',
    gap: isMobile ? '0.5rem' : '1.5rem',
    width: isMobile ? 'auto' : '100%',
  };

  const mobileNavStyle = {
    display: isMobile ? 'block' : 'none',
    position: 'absolute',
    width: '100%',
    top: '60px',
    right: '0',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    textAlign: 'right',
  };

  const linkStyle = {
    position:"relative",
    top:"10px",
    right:"0",
    left:"10px",
    textDecoration: 'none',
    color: '#333',
    fontWeight: '600',
    marginLeft: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  };

  const loginButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#FFF',
    color: 'black',
    borderRadius: '9px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
  };

  const signupButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#b65f54',
    color: '#FFF',
    borderRadius: '9px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
  };

  const menuIconStyle = {
    display: isMobile ? 'block' : 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  };

  const popupOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const popupStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    width: '300px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#b65f54',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <img src="/src/images/logo.png" style={{ width: '200px' }} alt="Logo" />
      </div>

      <div style={menuIconStyle} onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Main navigation */}
      <nav style={menuOpen && isMobile ? mobileNavStyle : navStyle}>
        <Link to={`/`} style={linkStyle}>Home</Link>
        <Link to={`/dataFromDb`} style={linkStyle}>upload</Link>
        <Link to={`/perfectRecipe`} style={linkStyle}>Recipe</Link>
        <Link to={`/about`} style={linkStyle}>About Us</Link>
        {user.isLogin ? (
  <Link to={`/upload`} style={linkStyle}>Add Recipe</Link>
) : (
  <span
  style={linkStyle}
    onClick={() => alert('Please log in to upload a recipe.')}
  >
    Add Recipe
  </span>
)}


        <Link to={`/blogPage`} style={linkStyle}>Blog</Link>
        

        <div style={buttonContainerStyle}>
  {user.isLogin ? (
    <>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '30px' }}>
        <Search color='grey' onClick={() => setIsSearchPopupOpen(true)} />
        {isSearchPopupOpen && ( // Added condition for the search popup
          <div style={popupStyle}>
            <button onClick={() => setIsSearchPopupOpen(false)} style={closeButtonStyle}>
              <X size={24} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={inputStyle}
              />
              <button
                onClick={() => fetchRecipes(searchTerm)}
                style={buttonStyle}
              >
                Search
              </button>
            </div>
            {loading && <p>Loading...</p>}
            <ul>
              {recipes.map(recipe => (
                <li key={recipe.id}>{recipe.title}</li>
              ))}
            </ul>
          </div>
        )}
        <Link to={'/userAccount'} style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <img
            src="/src/images/boy.jpg" // Path to your male avatar image
            alt="User Avatar"
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
          />
          <span>{user.userInfo.email}</span>
        </Link>
      </div>
      <button style={loginButtonStyle} onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  ) : (
    <>
      <button style={loginButtonStyle} onClick={() => setIsLoginPopupOpen(true)}>Login</button>
      <Link to={`/signin`} style={signupButtonStyle}>Sign In</Link>
    </>
  )}
</div>

      </nav>

      {/* Login Popup */}
      {isLoginPopupOpen && (
        <div style={popupOverlayStyle}>
          <div style={popupStyle}>
            <button onClick={() => setIsLoginPopupOpen(false)} style={closeButtonStyle}>
              <X size={24} />
            </button>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
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
              <button type="submit" style={buttonStyle}>Login</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

