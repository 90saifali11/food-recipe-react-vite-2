import React, { useState } from 'react';
import { FaReply, FaHeart } from 'react-icons/fa';

const Comment = ({ author, src, content, timestamp, likes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '16px' }}>
        <img src={src} alt={author} style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '16px' }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{author}</h3>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{timestamp}</span>
            </div>
            <button style={{ color: '#6b7280' }}>...</button>
          </div>
          <p style={{ color: '#374151', marginBottom: '8px' }}>{content}</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button style={{ color: '#6b7280', display: 'flex', alignItems: 'center' }}>
              <FaReply style={{ marginRight: '4px' }} />
              Reply
            </button>
            <button 
              style={{ color: isLiked ? '#ef4444' : '#6b7280', display: 'flex', alignItems: 'center' }}
              onClick={handleLike}
            >
              <FaHeart style={{ marginRight: '4px' }} />
              {likeCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeCommentSection = () => {
  const initialComments = [
    {
      author: 'Sara Johnson',
      src: "/src/user.jpg", // Simple image source
      content: 'Wow, this Mixed Greens with Sun-Dried Tomato Dressing recipe is a flavor explosion!',
      timestamp: '40 min ago',
      likes: 26,
    },
    {
      author: 'John Doe',
      src: '/src/personalized_photo_patch-rfbf58f49b69c46e09d0dabc46c7b694c_q2bzd_166.jpg', // Simple image source
      content: 'Absolutely loved this recipe! It was easy and quick to make.',
      timestamp: '1 h ago',
      likes: 15,
    },
    {
      author: 'Emily Brown',
      src: '/src/images (1).jpg', // Simple image source
      content: 'The dressing really elevated the salad. Will make it again for sure.',
      timestamp: '2 h ago',
      likes: 10,
    },
  ];

  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  // Add a new comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;

    const newCommentData = {
      author: 'You',
      src: 'https://via.placeholder.com/48', // Simple image source for user avatar
      content: newComment,
      timestamp: 'Just now',
      likes: 0,
    };

    setComments([newCommentData, ...comments]); // Add the new comment to the top
    setNewComment(''); // Clear the input
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>Comments</h2>
      {/* Render existing comments */}
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}

      {/* Comment input form */}
      <form onSubmit={handleAddComment} style={{ maxWidth: '600px', margin: '0 auto', marginTop: '24px' }}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', marginBottom: '8px' }}
          rows="4"
          placeholder="Type your comment here..."
        />
        <button
          type="submit"
          style={{ backgroundColor: '#ef4444', color: '#ffffff', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default RecipeCommentSection;
