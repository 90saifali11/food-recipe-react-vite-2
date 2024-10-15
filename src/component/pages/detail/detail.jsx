import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar, FaPrint, FaClock, FaUtensils, FaShare, FaHeart } from 'react-icons/fa';
import RecipeCommentSection from './fake';
import NutritionFacts from './nutrition';
import './detail.css'
import LikeRecipes from './card';
import RelatedProduct from './relatedProdutcs';
import NewsletterSignup from './letter';
import RelatedRecipes from './relatedRecipe';
import RecentRecipes from './recent';
// RecipeInstructions Component
const RecipeInstructions = ({ instructions }) => {
  return (
    <div
  style={{
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    textAlign: "left",
    width: "100%",
    marginLeft:"-200px"
  }}
>
  <div
    style={{
      width: "500px",
      margin: "0 auto",
      padding: "40px",
     
     
    }}
  >
    <h2
      style={{
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "24px",
        color: "#4A4A4A",
        borderBottom: "2px solid #E53E3E",
        paddingBottom: "8px",
      }}
    >
      Instructions:
    </h2>

    <ol
      style={{
        paddingLeft: "0", // Reset padding for the container
        listStyleType: "none", // Remove default list style
      }}
    >
      {instructions.map((instruction, index) => (
        <li key={index} style={{ display: "flex", marginBottom: "16px", alignItems: "flex-start" }}>
          <div
            style={{
              minWidth: "30px", // Ensure the number box has a fixed width
              height: "30px",
              backgroundColor: "#b66055",
              color: "#FFFFFF",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
              fontWeight: "bold",
              marginRight: "16px",
            }}
          >
            {index + 1}
          </div>
          <div style={{ flexGrow: 1 }}>
            <p style={{ color: "#4A4A4A", fontSize: "18px", lineHeight: "1.6", margin: 0 }}>
              {instruction}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </div>
</div>

  );
};

const RecipePage = () => {
  const [ingredients, setIngredients] = useState([]);

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) throw new Error('Recipe not found');
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError('Failed to load recipe.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleCheckboxChange = (ingredient) => {
    setCheckedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>No recipe found.</div>;

  return (
    <div 
    className="max-w-4xl mx-auto px-4 py-8" 
    style={{ width: '80%', backgroundColor: "#ffff", textAlign: "left", marginLeft: "30px", paddingTop: "20px" }} // Updated background color
  >
    <div className="max-w-4xl  mx-auto px-4 py-8" style={{ width: '80%',backgroundColor:"#ffff",textAlign:"left", marginLeft:"30px", paddingTop:"20px"}}>
      <nav className="text-sm mb-4">
        <span className="text-gray-500">Home &gt; Recipe &gt;</span> {recipe.name}
      </nav>

      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

      <div className="flex items-center text-sm text-gray-600 mb-4 " style={{marginBottom:"20px",marginLeft:"10px"}}>
        <span style={{marginLeft:"10px"}} className="mr-4">user ID :{recipe.userId || 'Unknown Author'}</span>
        <span style={{marginLeft:"10px"}} className="mr-4">{new Date().toLocaleDateString()}</span>
        <span style={{marginLeft:"10px"}} className="mr-4">{recipe.reviewCount || 0} comments</span>
        <span style={{marginLeft:"10px"}} className="mr-4">{recipe.servings} Saves</span>
        <span style={{marginLeft:"10px"}} className="flex items-center">
          {[...Array(5)].map((_, i) => (
            i < Math.floor(recipe.rating) ? <FaStar key={i} color='#b76156' className="text-yellow-400" /> : <FaRegStar key={i} color='#b76156' className="text-yellow-400" />
          ))}
          <span className="ml-1">({recipe.reviewCount || 0} Reviews)</span>
        </span>
      </div>

      <img src={recipe.image} alt={recipe.name} style={{ width: "80%", height: "400px", borderRadius: "12px" }} className="w-full h-48 object-cover" />

      <div className="" style={{display:"flex", justifyContent:"space-between", alignContent:"center",marginBottom:"6px", marginLeft: "100px" ,marginLeft:"10px"}}>
      <div className="flex space-x-4 text-sm">
        <span style={{ color: "grey",marginLeft:"10px" }}>Prep mins</span>
        <span style={{ color: "grey", fontSize: "30px",marginLeft:"10px" }}>|</span>
        <span style={{ color: "grey",marginLeft:"10px" }}>Cook</span>
        <span style={{ color: "grey", fontSize: "30px" ,marginLeft:"10px"}}>|</span>
        <span style={{ color: "grey",marginLeft:"10px" }}>Serving</span>
        
        <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center ml-2" style={{ border: "1px solid #b76156", borderRadius: "6px",marginLeft:"10px",color:"#b76156" }}>
          <FaPrint color='#b76156' className="mr-2" /> Print Recipe
        </button>
        <br />
        <span className="ml-4" style={{ color: "black",marginLeft:"20px" }}>{recipe.prepTimeMinutes} mins</span>
        <span className="ml-4" style={{ color: "black",marginLeft:"20px" }}>{recipe.cookTimeMinutes} mins</span>
        <span className="ml-4" style={{ color: "black",marginLeft:"20px" }}>{recipe.servings} Serving</span>
      </div>
    </div>

      <p className="mb-6">{recipe.description}</p>

      <h2 className="text-xl font-bold mb-4" style={{textAlign:"left", marginLeft:"30px"}}>Ingredients:</h2>
      <ul className="mb-6">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} style={{textAlign:"left"}} className="flex items-center mb-2">
            <input 
              type="checkbox" 
              className="mr-2" 
              style={{
                appearance: 'none',
                width: '20px',
                height: '20px',
                border: '2px solid #b76156',
                borderRadius: '4px',
                position: 'relative',
                backgroundColor: 'transparent',
              }}
              onChange={() => handleCheckboxChange(ingredient)}
              onClick={(e) => {
                e.target.style.backgroundColor = e.target.checked ? '#b76156' : 'transparent';
                e.target.style.color = e.target.checked ? '#ffffff' : 'transparent';
              }}
            />
            <span style={{
              textDecoration: checkedIngredients.includes(ingredient) ? 'line-through' : 'none',
              color: '#b76156'
            }}>
              {ingredient}
            </span>
          </li>
        ))}
      </ul>

      <RecipeInstructions instructions={recipe.instructions} />
      <div style={{  width: "70%", marginLeft: "50px" }}>
      <div style={{
        width: "500px",
        margin: "auto",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        padding:"10px",
        marginLeft:"-100px"

       
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', mdFlexDirection: 'row', alignItems: 'center' }}>
          {/* Left: Image */}
          <div style={{ flex: 1 }}>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{  width: "400px", height: "400px", borderRadius: "12px", objectFit: "cover" }}
            />
          </div>

          {/* Right: Text */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '4px', marginTop: '4px' }}>
            <div style={{ padding: "16px", backgroundColor: "#b76156", opacity: 0.8, color: "white", borderRadius: "12px" }}>
              <h2 style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>{recipe.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px',marginLeft:"50px" }}>
                <span style={{ marginRight: "8px" }}>{recipe.userId || "Unknown Author"}</span>
                <span style={{ marginRight: "8px" }}>•</span>
                <span style={{ marginRight: "8px" }}>{recipe.date || "Date Not Available"}</span>
                <span style={{ marginRight: "8px" }}>•</span>
                <span>{recipe.comments || 0} comments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ratings and Actions */}
        <div style={{ padding: "16px" }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: "16px",marginLeft:"140px" }}>
            {[...Array(5)].map((_, i) => (
              <FaStar style={{ marginLeft: "5px" }} color="#b76156" key={i} />
            ))}
            <span style={{ marginLeft: "8px", color: "#666" }}>({recipe.reviews || 0} Reviews)</span>
          </div>

          {/* Buttons: Print, Share, Save */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: "16px" }}>
            <button style={{ backgroundColor: "#b76156", color: "#fff", marginLeft: "10px", padding: "12px 16px", borderRadius: "4px", flex: 1 }}>
              <FaPrint color="#fff" style={{ marginRight: "5px" }} /> Print Recipe
            </button>
            <button style={{ backgroundColor: "#b76156", color: "#fff", marginLeft: "10px", padding: "12px 16px", borderRadius: "4px", flex: 1 }}>
              <FaShare color="#fff" style={{ marginRight: "5px" }} /> Share Recipe
            </button>
            <button style={{ backgroundColor: "#b76156", color: "#fff", marginLeft: "10px", padding: "12px 16px", borderRadius: "4px", flex: 1 }}>
              <FaHeart color="#fff" style={{ marginRight: "5px" }} /> Save Recipe
            </button>
          </div>
        </div>

        {/* Recipe Description */}
        <p style={{ marginBottom: "24px" }}>{recipe.description}</p>

        {/* Ingredients with Checkboxes */}
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px", marginLeft: "30px", textAlign: "left" }}>Ingredients:</h2>
        <ul style={{ marginBottom: "24px" }}>
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: "8px", textAlign: "left" }}>
              <input
                type="checkbox"
                style={{
                  appearance: 'none',
                  width: '20px',
                  height: '20px',
                  border: '2px solid #b76156',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  position: 'relative',
                }}
                onChange={() => handleCheckboxChange(ingredient)}
                onClick={(e) => {
                  e.target.style.backgroundColor = e.target.checked ? '#b76156' : 'transparent';
                  e.target.style.color = e.target.checked ? '#ffffff' : 'transparent';
                }}
              />
              <span style={{
                textDecoration: checkedIngredients.includes(ingredient) ? 'line-through' : 'none',
                color: '#b76156'
              }}>
                {ingredient}
              </span>
            </li>
          ))}
        </ul>

        {/* Instructions Component */}
        <div style={{ display: 'flex', justifyContent: 'center',marginLeft:"150px" }}>
        <RecipeInstructions instructions={recipe.instructions} />
      </div>

        {/* Cooking Note */}
        <div style={{ backgroundColor: "#ffeb3b", padding: "16px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>Cooking Note:</h3>
          <ol>
            <li>Ensure the freshness of your mixed greens. Look for crisp, vibrant leaves with no signs of wilting or browning.</li>
          </ol>
        </div>
      </div>
    </div>


<hr style={{ borderColor: "#b76156", borderWidth: "4px", height: "4px",marginTop:"20px" }} />

      <RecipeCommentSection/>
      <LikeRecipes/>

   
    <div
      style={{
        backgroundColor: "#ffff",
        position: "absolute",
        top: "270px",
        right: isMobile ? 'auto' : '50px', // Move to left on mobile
        left: isMobile ? '10px' : 'auto',  // Keep margin on left for mobile
        width: isMobile ? '90%' : '30%',    // Adjust width for mobile
      }}
    >
      <NutritionFacts />
      <RecentRecipes />
      <NewsletterSignup />
      <RelatedProduct />
      <RelatedRecipes />
    </div>
 
    </div>
    </div>
  );
};

export default RecipePage;
