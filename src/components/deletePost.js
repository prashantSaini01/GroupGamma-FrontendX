import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeletePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  console.log(postId);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3030/posts/delete/${postId}`);
      console.log('Post deleted:', response.data);
      alert('Post Deleted');
      navigate('/post-list'); // Navigate to post list after deletion
    } catch (error) {
      console.error('Error deleting post:', error.message);
      alert('Failed to delete post. Please try again.'); // Notify user of error
    }
  };

  return (
    <div className="delete-post-container">
      <h3 className="delete-post-title">Delete Post</h3>
      <p className="delete-post-message">Are you sure you want to delete this post?</p>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeletePost;
