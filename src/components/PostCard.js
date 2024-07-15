import React from 'react';
import { Link } from 'react-router-dom'; 
import './PostCard.css'; 

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img className="post-image" src={post.imageUrl} alt={post.title} />
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-text">{post.content}</p>
        <Link to={`/post/${post.id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default PostCard;
