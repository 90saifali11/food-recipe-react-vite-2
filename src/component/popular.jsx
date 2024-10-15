import React, { useEffect, useState } from 'react';

// Dummy JSON API URL for recipes
const apiURL = 'https://dummyjson.com/recipes';

const PopularCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log('Fetched data:', data);
        // Assuming the API returns a list of recipes
        setCategories(data.recipes || []); // Use empty array if no recipes found
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to load recipes.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const viewMoreStyle = {
    color: '#b65f54',
    textDecoration: 'none',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Adjusted to show 3 categories per row
    gap: '20px',
  };

  const categoryStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold', // Make the text bold for better visibility
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Popular Categories</h2>
        <a href="#" style={viewMoreStyle}>View more</a>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div style={gridStyle}>
          {categories.slice(0, 8).map((category) => ( // Use slice instead of splice to not mutate the original array
            <div key={category.id} style={categoryStyle}>
              <img src={category.image} alt={category.title} style={imageStyle} />
              
              <span style={labelStyle}>{category.mealType} Recipe</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularCategories;

