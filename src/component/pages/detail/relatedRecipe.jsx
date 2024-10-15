import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RelatedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        console.log('Fetched data:', data);
        setRecipes(data.recipes || []); // Use empty array if no recipes found
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to load recipes.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading recipes...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  }

  return (
    <div style={{ position: 'absolute', top: '1420px',  fontFamily: 'Arial, sans-serif', maxWidth: '1200px', padding: '20px', marginRight:"-70px" }}>
      <h2 style={{fontSize: '24px', margin: "10px" ,marginLeft:"30px"}}>Related Recipes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {recipes.length > 0 ? (
          recipes.slice(10, 16).map((recipe) => (
            <div key={recipe.id} style={{
              width: '48%', // Set width to 48% to fit two cards per row with space
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column', // Stack image and name vertically
              alignItems: 'center', // Center align items
            
              
            }}>
              <Link to={`/detail/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={recipe.image || '/placeholder-image.png'}
                  alt={recipe.name}
                  style={{ width: '130px', height: '100px', objectFit: 'cover', marginBottom: '10px' }} // Margin below the image
                />
                <h3 style={{ fontSize: '12px', margin: 0, textAlign: 'center' }}>{recipe.name}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p style={{ width: '100%', textAlign: 'center' }}>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RelatedRecipes;
