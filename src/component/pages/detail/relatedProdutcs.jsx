import React from 'react';

const RelatedProduct = () => {
  const tags = ['Dessert', 'CheesecakeRecipe', 'FoodBlog', 'DeliciousDesserts', 'Baking'];

  /* Base styles */
  const styles = {
    container: {
      maxWidth: '24rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f3f4f6',
      padding: '1rem',
      borderRadius: '0.5rem',
      position: 'absolute',
      top: '2000px',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    productCard: {
      backgroundColor: '#ffffff',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
    },
    productImage: {
      width: '100%',
      height: '12rem',
      objectFit: 'cover',
      marginBottom: '1rem',
    },
    button: {
      width: '100%',
      backgroundColor: '#b66055',
      color: '#ffffff',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      transition: 'background-color 300ms',
      cursor: 'pointer',
      border: 'none',
    },
    buttonHover: {
      backgroundColor: '#ef4444', // On hover
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    tag: {
      backgroundColor: '#e5e7eb',
      color: '#374151',
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
    },
    subTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Related Product</h2>
      <div style={styles.productCard}>
        <img 
          src="/src/0_ot4byZYX36QAhFLW.jpg" 
          alt="Measuring spoons with ingredients" 
          style={styles.productImage}
        />
        <button 
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#f87171')}
        >
          Buy Now
        </button>
      </div>
      <div>
        <h3 style={styles.subTitle}>Tags</h3>
        <div style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <span key={index} style={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;


