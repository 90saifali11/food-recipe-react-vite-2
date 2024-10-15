import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecentRecipes = () => {
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
        <span key={i} style={{ color: i < rating ? '#FFD700' : '#ddd', fontSize: '10px' }}>★</span>
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
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', margin: 0 }}>Trending Recipes</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {recipes.length > 0 ? (
          recipes.slice(6, 10).map((recipe) => (
            <div key={recipe.id} style={{
              width: '250px',
              maxWidth: '400px',
              marginBottom: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              height: '100px',
            }}>
              <Link to={`/detail/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', width: '100%' }}>
                <img
                  src={recipe.image || '/placeholder-image.png'}
                  alt={recipe.name}
                  style={{ width: '80px', height: '100px', objectFit: 'cover', borderRadius: '8px 0 0 8px' }}
                />
                <div style={{ flex: 1, padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: '12px', margin: '0 0 3px 0' }}>{recipe.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: '#666' }}>
                      {renderStars(Math.round(recipe.rating))}
                    </span>
                    <span style={{ fontSize: '10px', color: '#666' }}>{recipe.rating}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src="/src/male_boy_person_people_avatar_icon_159358.png"
                        alt={recipe.author}
                        style={{ width: '16px', height: '16px', borderRadius: '50%', marginRight: '5px' }}
                      />
                      <span style={{ fontSize: '10px' }}>UserId.{recipe.userId}</span>
                    </div>
                    <span style={{ fontSize: '10px', color: '#666' }}>
                      <img src="/src/noun-calories-7053265.png" style={{ width: "12px", marginRight: '2px' }} alt="" />
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

export default RecentRecipes;


