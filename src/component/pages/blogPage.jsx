import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Unlocking the Benefits of Intermittent Fasting for Weight Management and Health',
    excerpt: 'Explore the health benefits of intermittent fasting, including weight management and improved metabolism.',
    image: '/src/images/Fasting-Ketosis-750x511.jpg',
    date: 'September 15, 2022',
  },
  {
    id: 2,
    title: 'The Impact of Sugar Consumption on Your Health',
    excerpt: 'Unveiling the hidden dangers of excessive sugar intake and its effects on overall health.',
    image: '/src/images/images (2).jpg',
    date: 'October 10, 2022',
  },
  {
    id: 3,
    title: 'Classic New York-Style Cheesecake Recipe',
    excerpt: 'Learn how to make a classic New York-style cheesecake that everyone will love.',
    image: '/src/images/nsplsh_9e3d502f3ae94f6f9d222a18243d04c5~mv2.webp',
    date: 'November 5, 2022',
  },
  {
    id: 4,
    title: 'Healthy Meal Prep Ideas for Busy People',
    excerpt: 'Discover easy meal prep ideas to save time and eat healthy throughout the week.',
    image: '/src/images/images (3).jpg',
    date: 'December 12, 2022',
  },
  {
    id: 5,
    title: 'The Benefits of Eating Whole Foods',
    excerpt: 'Learn why incorporating whole foods into your diet is essential for better health.',
    image: '/src/images/images (4).jpg',
    date: 'January 20, 2023',
  },
  {
    id: 6,
    title: 'Quick and Easy Smoothie Recipes',
    excerpt: 'Get inspired with these delicious and nutritious smoothie recipes that are perfect for breakfast.',
    image: '/src/images/images (5).jpg',
    date: 'February 15, 2023',
  },
  {
    id: 7,
    title: 'Unlocking the Benefits of Intermittent Fasting',
    excerpt: 'Discover how intermittent fasting can transform your health and well-being.',
    image: '/src/images/images (6).jpg',
    date: 'March 10, 2023',
  },
];

const BlogPage = () => {
  // State to keep track of the selected blog post
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  // Function to handle click on a blog post
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
        <ol style={{ listStyleType: 'none', padding: 0, display: 'inline-flex' }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#" style={{ color: '#4A4A4A' }}>Home</a>
            <svg
              style={{ fill: '#4A4A4A', width: '1em', height: '1em', verticalAlign: 'middle', margin: '0 0.75rem' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li>
            <a href="#" style={{ color: '#4A4A4A', fontWeight: '500' }}>Blog</a>
          </li>
        </ol>
      </nav>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Blog</h1>

      {/* Featured Blog Post */}
      <div style={{ padding: '20px' }}>
        <h2>Featured Blog Post</h2>
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden', marginBottom: '2rem' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '2rem', flex: 1 }}>
              <div style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', color: '#4B0082', fontWeight: '600' }}>
                on {selectedPost.date}
              </div>
              <a
                href="#"
                style={{
                  display: 'block',
                  marginTop: '0.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                {selectedPost.title}
              </a>
              <p style={{ marginTop: '0.5rem', color: '#6B7280' }}>
                {selectedPost.excerpt}
              </p>
              <button
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#B66055',
                  color: 'white',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#A75D4C')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#B66055')}
              >
                Read more →
              </button>
            </div>
            <div style={{ flexShrink: 0 }}>
              <img
                style={{ height: '320px', width: '100%', objectFit: 'cover' }}
                src={selectedPost.image}
                alt="Featured Blog Post"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Grid */}
      <h2>Blog Posts</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {blogPosts.map((post) => (
          <div
            key={post.id}
            style={{
              height: '300px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
            onClick={() => handlePostClick(post)} // Add click handler here
          >
            <img
              style={{ height: '12rem', width: '100%', objectFit: 'cover' }}
              src={post.image}
              alt={post.title}
            />
            <div style={{ padding: '0.9rem' }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.2rem' }}>{post.title}</h2>
              <p style={{ color: '#6B7280', fontSize: '1rem' }}>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;