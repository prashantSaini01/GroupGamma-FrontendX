import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeletePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3030/posts/delete/${postId}`);
      console.log('Post deleted:', response.data);
      alert('Post Deleted');
      navigate('/post-list'); // Navigate to post list after deletion
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  return (
    <div>
      <h3>Delete Post</h3>
      <p>Are you sure you want to delete this post?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeletePost;
