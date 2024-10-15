import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PerfectRecipe = () => {
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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < rating ? '#FFD700' : '#ddd' }}>★</span>
      );
    }
    return stars;
  };

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading recipes...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', margin: 0 }}>Trending Recipes</h2>
        <Link to="/all-recipes" style={{ color: '#b65f54', textDecoration: 'none' }}>View more</Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} style={{
              width: 'calc(33.333% - 20px)',
              marginBottom: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <Link to={`/detail/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={recipe.image || '/placeholder-image.png'} alt={recipe.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <span style={{ fontSize: '16px', color: '#b55d51' }}>
                    {renderStars(Math.round(recipe.rating))}
                  </span>
                  <span style={{ fontSize: '14px', marginLeft: '5px', color: '#666' }}>{recipe.rating}</span>
                </div>
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>{recipe.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src="/src/male_boy_person_people_avatar_icon_159358.png" alt={recipe.author} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                      <span style={{ fontSize: '14px' }}>UserId.{recipe.userId}</span>
                    </div>
                    <span style={{ fontSize: '14px', color: '#666' }}>
                      <img src="/src/noun-calories-7053265.png" style={{ width: "20px" }} alt="" />
                      {recipe.caloriesPerServing || recipe.calories} cals
                    </span>
                  </div>
                </div>
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

export default PerfectRecipe;