import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Unlocking the Benefits of Intermittent Fasting for Weight Management and Health',
    excerpt: 'Explore the health benefits of intermittent fasting, including weight management and improved metabolism.',
    image: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2FFasting-Ketosis-750x511.jpg?alt=media&token=954c4b53-1d44-4935-9398-41aef27a5929',
    date: 'September 15, 2022',
  },
  {
    id: 2,
    title: 'The Impact of Sugar Consumption on Your Health',
    excerpt: 'Unveiling the hidden dangers of excessive sugar intake and its effects on overall health.',
    image: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fimages%20(2).jpg?alt=media&token=8e0a723f-f1d8-40a0-ba73-ebbc9f49e19f',
    date: 'October 10, 2022',
  },
  {
    id: 3,
    title: 'Classic New York-Style Cheesecake Recipe',
    excerpt: 'Learn how to make a classic New York-style cheesecake that everyone will love.',
    image: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fimages%20(3).jpg?alt=media&token=429363c0-b589-4bcc-8181-5524fa13fd8f',
    date: 'November 5, 2022',
  },
  {
    id: 4,
    title: 'Healthy Meal Prep Ideas for Busy People',
    excerpt: 'Discover easy meal prep ideas to save time and eat healthy throughout the week.',
    image: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fnsplsh_9e3d502f3ae94f6f9d222a18243d04c5~mv2.webp?alt=media&token=65fe5d20-119d-42b6-9aab-7a1049c099c6',
    date: 'December 12, 2022',
  },
  {
    id: 5,
    title: 'The Benefits of Eating Whole Foods',
    excerpt: 'Learn why incorporating whole foods into your diet is essential for better health.',
    image: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fimages%20(4).jpg?alt=media&token=7195cac2-5ce6-4e27-8c24-c48a94e66cad.jpg',
    date: 'January 20, 2023',
  },
  {
    id: 6,
    title: 'Quick and Easy Smoothie Recipes',
    excerpt: 'Get inspired with these delicious and nutritious smoothie recipes that are perfect for breakfast.',
    image: 'data:image/jpeg;base64,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',
    date: 'February 15, 2023',
  },
  {
    id: 7,
    title: 'Unlocking the Benefits of Intermittent Fasting',
    excerpt: 'Discover how intermittent fasting can transform your health and well-being.',
    image: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fimages%20(6).jpg?alt=media&token=5acdaec4-bdab-4599-a764-3df2b5d6561c',
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