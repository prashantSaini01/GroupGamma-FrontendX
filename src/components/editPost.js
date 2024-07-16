import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditPost = ({ onUpdate }) => {
  const { postId } = useParams(); 
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/posts/${postId}`);
        setFormData({
          title: response.data.title,
          content: response.data.content,
        });
      } catch (error) {
        console.error('Error fetching post:', error.message);
      }
    };

    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3030/posts/update/${postId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Post updated:', response.data);
      alert('Post Updated');
      onUpdate(); // Optional: Trigger a callback to refresh parent component or data
    } catch (error) {
      console.error('Error updating post:', error.message);
    }
  };

  return (
    <div className="edit-post-container">
      <h3>Edit Post</h3>
      <form className="edit-post-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        <label>Content:</label>
        <textarea name="content" value={formData.content} onChange={handleChange} />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
