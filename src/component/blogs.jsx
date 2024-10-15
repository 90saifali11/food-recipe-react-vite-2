import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Unlocking the Benefits of Intermittent Fasting for Weight Management and Health',
      excerpt: 'Weight Management and Health Weight Management and Health Weight Management and Health Weight Management and Health Weight ...',
      image: '/src/images/Fasting-Ketosis-750x511.jpg'
    },
    {
      id: 2,
      title: 'The Impact of Sugar Consumption on Your Health',
      excerpt: 'Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden ...',
      image: '/src/images/images (2).jpg'
    },
    {
      id: 3,
      title: 'Classic New York-Style Cheesecake Recipe',
      excerpt: 'Learn how to make a classic New York-style cheesecake that everyone will love.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 4,
      title: 'Healthy Meal Prep Ideas for Busy People',
      excerpt: 'Discover easy meal prep ideas to save time and eat healthy throughout the week.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 5,
      title: 'The Benefits of Eating Whole Foods',
      excerpt: 'Learn why incorporating whole foods into your diet is essential for better health.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 6,
      title: 'Quick and Easy Smoothie Recipes',
      excerpt: 'Get inspired with these delicious and nutritious smoothie recipes that are perfect for breakfast.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 7,
      title: 'Unlocking the Benefits of Intermittent Fasting',
      excerpt: 'Discover how intermittent fasting can transform your health and well-being.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 8,
      title: 'Understanding Food Labels: What to Look For',
      excerpt: 'Learn how to read food labels and make healthier choices at the grocery store.',
      image: '/placeholder.svg?height=200&width=300'
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Blog</h1>
        <Link to={`/BlogsPage/allBlogs`}> View more </Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {blogPosts.slice(0, 2).map((post) => (
          <div key={post.id} style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <Link to={`/allBlogs/${post.id}`}> {/* Pass blog id here */}
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
