import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore'; // Assuming Firebase Firestore is set up
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase';

const RecipeFromDb = () => {
    const [recipes, setRecipes] = useState([]); // State to hold recipe data
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "recipes")); // Fetching documents from the 'recipes' collection
                const recipesData = [];
                querySnapshot.forEach((doc) => {
                    recipesData.push({ id: doc.id, ...doc.data() }); // Collecting document data
                    console.log('Fetched data:', recipesData);
                });
                setRecipes(recipesData); // Setting the state with fetched recipes
            } catch (error) {
                console.error("Error fetching recipes: ", error);
            } finally {
                setLoading(false); // Set loading to false once fetching is complete
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {loading ? (
                <p style={{ fontSize: '18px', color: '#666', margin: '20px' }}>Loading recipes...</p>
            ) : recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <div key={recipe.id} style={{
                        margin: '20px',
                        textAlign: 'center',
                        width: '300px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'box-shadow 0.3s ease',
                        backgroundColor: '#fff',
                        height: '500px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
                    >
                        <Link to={`/uploadData/${recipe.id}`}>
                            <img
                                src={recipe.imageUrl || 'https://via.placeholder.com/300'}
                                alt={recipe.recipeName || 'Recipe Image'}
                                style={{
                                    height: '200px',
                                    width: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '12px 12px 0 0'
                                }}
                            />
                            <div style={{ padding: '15px' }}>
                                <h3 style={{ fontSize: '20px', margin: '10px 0', color: '#333' }}>
                                    {recipe.title || 'Recipe Name'}
                                </h3>
                                <p style={{ fontSize: '16px', color: '#666' }}>
                                    UserId: {recipe.userId || 'No user available'}
                                </p>
                                <FaStar color='#b86459' />
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p style={{ fontSize: '18px', color: '#666', margin: '20px' }}>No recipes available</p>
            )}
        </div>
    );
};

export default RecipeFromDb;


