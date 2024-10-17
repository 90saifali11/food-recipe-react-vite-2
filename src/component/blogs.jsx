import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Unlocking the Benefits of Intermittent Fasting for Weight Management and Health',
      excerpt: 'Explore the health benefits of intermittent fasting, including weight management and improved metabolism...',
      image: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2FFasting-Ketosis-750x511.jpg?alt=media&token=954c4b53-1d44-4935-9398-41aef27a5929',
    },
    {
      id: 2,
      title: 'The Impact of Sugar Consumption on Your Health',
      excerpt: 'Unveiling the hidden dangers of excessive sugar intake and its effects on overall health...',
      image: 'https://firebasestorage.googleapis.com/v0/b/first-project-e823d.appspot.com/o/recipes%2Fimages%20(2).jpg?alt=media&token=8e0a723f-f1d8-40a0-ba73-ebbc9f49e19f',
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Blog</h1>
        <Link to={`/blogsPage`}>View more</Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {blogPosts.map((post) => (
          <div key={post.id} style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <Link to={`/allBlogs/${post.id}`}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{post.title}</h2>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{post.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
