import React from 'react';
import RecipeSharing from '../share';
import TrendingRecipes from '../recipes';
import HeroSection from '../hero';
import BlogSection from '../blogs';
import NewsletterSubscription from '../news';
import ExploreRecipes from '../expoler';
import PopularCategories from '../popular';
import CompanyLogos from '../logo';

function Landing() {
  const containerStyle = {
    backgroundColor: "#ffffff",
    padding: "100px 0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowX: "hidden", // Ensure no horizontal scroll
  };

  return (
    <div className="landing-container" style={containerStyle}>
      <div>
        <HeroSection />
        <RecipeSharing />
        <TrendingRecipes />
        <BlogSection />
        <ExploreRecipes />
        <NewsletterSubscription />
        <PopularCategories />
        <CompanyLogos />
      </div>
    </div>
  );
}

export default Landing;


