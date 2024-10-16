import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const UploadDetail = () => {
  const { id } = useParams(); // Retrieve the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const docRef = doc(db, 'recipes', id); // Reference to the specific recipe document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setRecipe(docSnap.data()); // Set the recipe data
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  if (!recipe) {
    return <div>Recipe not found</div>; // Handle case where recipe is not found
  }

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
      
      <p style={{ fontSize: '16px', color: '#666', marginTop: '16px' }}>Description: {recipe.description || 'No description available'}</p>
      
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '24px' }}>Ingredients</h2>
      <ul>
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} style={{ fontSize: '16px', color: '#666' }}>
            {ingredient}
          </li>
        ))}
      </ul>

      <p style={{ fontSize: '16px', color: '#666', marginTop: '16px' }}>Servings: {recipe.servings || 'N/A'}</p>
      <p style={{ fontSize: '16px', color: '#666' }}>Cooking Time: {recipe.cookingTime?.hours}h {recipe.cookingTime?.minutes}m</p>
      <p style={{ fontSize: '16px', color: '#666' }}>Prep Time: {recipe.prepTime?.hours}h {recipe.prepTime?.minutes}m</p>
      <p style={{ fontSize: '16px', color: '#666' }}>Cuisine: {recipe.cuisine || 'N/A'}</p>
    </div>
  );
};

export default UploadDetail;
