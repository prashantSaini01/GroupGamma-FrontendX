import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

const PostCard = ({ post }) => {
  
  return (
    <div className="post-card">
      <img className="post-image" src={post.img} alt={post.title} />
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-text">{post.content}</p>
        <div className="post-actions">
          <Link to={`/edit-post/${post.id}`} className="post-action">Update</Link>
          <Link to={`/delete-post/${post.id}`} className="post-action">Delete</Link>
        </div>
        <Link to="#">Read more</Link>
      </div>
    </div>
  );
};

export default PostCard;
