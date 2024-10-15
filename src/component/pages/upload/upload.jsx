import React, { useState, useEffect } from 'react';
import { BiCamera, BiPlusCircle } from 'react-icons/bi';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../../../utils/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const RecipeUpload = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [image, setImage] = useState('/placeholder.svg'); // Placeholder image
  const [imageFile, setImageFile] = useState(null); // Store the selected file
  const [servings, setServings] = useState('');
  const [cookingTimeHours, setCookingTimeHours] = useState('');
  const [cookingTimeMinutes, setCookingTimeMinutes] = useState('');
  const [prepTimeHours, setPrepTimeHours] = useState('');
  const [prepTimeMinutes, setPrepTimeMinutes] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [collectionName, setCollection] = useState('');
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(false); // State to manage loading

 
  useEffect(() => {
    const auth = getAuth();
    // Listen for changes to the user's sign-in state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file)); // Display the selected image
      setImageFile(file); // Store the selected file
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading to true at the start
    if (imageFile) {
      try {
        // Upload the image to Firebase Storage
        const storageRef = ref(storage, `recipes/${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
  
        // Get the download URL for the uploaded image
        const downloadURL = await getDownloadURL(snapshot.ref);
  
        // Save the recipe data to Firestore
        const recipeCollection = collection(db, 'recipes');
        await addDoc(recipeCollection, {
          imageUrl: downloadURL,
          title: recipeTitle,
          description: description,
          ingredients: ingredients,
          servings: servings,
          cookingTime: {
            hours: cookingTimeHours,
            minutes: cookingTimeMinutes,
          },
          prepTime: {
            hours: prepTimeHours,
            minutes: prepTimeMinutes,
          },
          cuisine: cuisine,
          collection: collectionName,
          userId: user.uid, // Save the user ID with the recipe
        });
  
        console.log('Document added to Firestore!');
        // Reset form or give feedback to the user here if necessary
      } catch (error) {
        console.error('Error uploading file or saving data:', error);
      } finally {
        // Set loading to false once the process is complete (whether successful or not)
        setLoading(false);
      }
    } else {
      alert('Please select a file to upload');
      setLoading(false); // Reset loading in case no file was selected
    }
  };
  

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '24px' }}>
      {user ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Create new recipe</h1>
            <button
  onClick={handleUpload} // Trigger handleUpload on button click
  disabled={loading} // Disable button when loading
  style={{
    backgroundColor: loading ? '#9CA3AF' : '#3B82F6', // Change color when loading
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    cursor: loading ? 'not-allowed' : 'pointer' // Show not-allowed cursor when loading
  }}
>
  {loading ? 'Loading...' : 'Save'} {/* Show loading text when loading */}
</button>


          </div>

          <form onSubmit={handleUpload}>
            {/* Recipe Title */}
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="recipeTitle" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>
                Recipe Title:
              </label>
              <input
                type="text"
                id="recipeTitle"
                placeholder="Enter recipe title"
                value={recipeTitle}
                onChange={(e) => setRecipeTitle(e.target.value)}
                style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
              />
            </div>

            {/* Recipe Image */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>Recipe image:</label>
              <div style={{ position: 'relative', border: '1px solid grey', height: '250px', borderRadius: '12px', marginBottom: '20px' }}>
                <img src={image} alt="Recipe" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    padding: '8px',
                    cursor: 'pointer',
                    height: '35px',
                  }}
                >
                  <BiCamera size={20} />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px', gap: '8px' }}>
                <img src={image} alt="Thumbnail" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '4px' }} />
                <label htmlFor="upload" style={{ cursor: 'pointer' }}>
                  <BiPlusCircle size={24} style={{ color: '#A0AEC0' }} />
                  <input
                    id="upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="description" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Introduce your recipe"
                style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
                rows={3}
              />
              <div style={{ textAlign: 'right', fontSize: '12px', color: '#A0AEC0' }}>{description.length}/150</div>
            </div>

            {/* Ingredients */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>Ingredients:</label>
              {ingredients.map((ingredient, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Enter ingredient"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px', marginBottom: '8px' }}
                />
              ))}
              <button
                type="button"
                onClick={handleAddIngredient}
                style={{ color: '#3B82F6', cursor: 'pointer', transition: 'color 0.3s' }}
              >
                + Add ingredient
              </button>
            </div>

            {/* Servings */}
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="servings" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>
                Servings:
              </label>
              <input
                type="number"
                id="servings"
                placeholder="Enter number of servings"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
              />
            </div>

            {/* Cooking Time */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>Cooking Time:</label>
              <input
                type="number"
                placeholder="Hours"
                value={cookingTimeHours}
                onChange={(e) => setCookingTimeHours(e.target.value)}
                style={{ width: '48%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px', marginRight: '4%' }}
              />
              <input
                type="number"
                placeholder="Minutes"
                value={cookingTimeMinutes}
                onChange={(e) => setCookingTimeMinutes(e.target.value)}
                style={{ width: '48%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
              />
            </div>

            {/* Prep Time */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>Prep Time:</label>
              <input
                type="number"
                placeholder="Hours"
                value={prepTimeHours}
                onChange={(e) => setPrepTimeHours(e.target.value)}
                style={{ width: '48%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px', marginRight: '4%' }}
              />
              <input
                type="number"
                placeholder="Minutes"
                value={prepTimeMinutes}
                onChange={(e) => setPrepTimeMinutes(e.target.value)}
                style={{ width: '48%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
              />
            </div>

            {/* Cuisine */}
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="cuisine" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>
                Cuisine:
              </label>
              <input
                type="text"
                id="cuisine"
                placeholder="Enter cuisine type"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
              />
            </div>

            {/* Collection */}
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="collection" style={{ display: 'block', fontSize: '14px', fontWeight: 'medium', color: '#4A5568', marginBottom: '8px' }}>
                Collection:
              </label>
              <input
                type="text"
                id="collection"
                placeholder="Enter collection name"
                value={collectionName}
                onChange={(e) => setCollection(e.target.value)}
                style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '4px' }}
              />
            </div>
          </form>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '24px', border: '1px solid #D1D5DB', borderRadius: '4px' }}>
          <h2 style={{ color: '#4A5568' }}>Please log in to upload a recipe.</h2>
        </div>
      )}
    </div>
  );
};

export default RecipeUpload;







